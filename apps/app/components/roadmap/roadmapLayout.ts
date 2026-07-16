import type { RNode, RStatus } from "@/data/businessRoadmap";

export interface PlacedNode {
  id: string;
  parentId: string | null;
  label: string;
  status: RStatus;
  level: number;
  side: 1 | -1;
  cx: number;
  cy: number;
  w: number;
  h: number;
  isMain: boolean;
  cluster?: { label: string; status: RStatus }[];
}

export interface BranchEdge {
  id: string;
  d: string;
}

export interface RoadmapLayout {
  nodes: PlacedNode[];
  spinePath: string;
  spineX: number;
  branchEdges: BranchEdge[];
  width: number;
  height: number;
}

const TOP_PAD = 48;
const SIDE_PAD = 56;
const SECTION_GAP = 36;
const ROW_STEP = 52;
const NODE_H = 46;
const MAIN_H = 46;
const CLUSTER_HEADER = 28;
const CLUSTER_ROW = 36;
const CLUSTER_PAD = 12;
const STEP_L1 = 268;
const STEP_DEEP = 228;
const SPINE_X = 720;

const clamp = (min: number, val: number, max: number) => Math.max(min, Math.min(max, val));

function measureWidth(node: RNode, level: number): number {
  if (node.cluster) return 200;
  if (level === 0) return clamp(160, node.label.length * 7.2 + 36, 280);
  if (level === 1) return clamp(140, node.label.length * 6.8 + 32, 260);
  return clamp(120, node.label.length * 6.2 + 28, 220);
}

function measureHeight(node: RNode, level: number): number {
  if (node.cluster) {
    const rows = Math.ceil(node.cluster.length / 2);
    return CLUSTER_HEADER + rows * CLUSTER_ROW + CLUSTER_PAD;
  }
  return level === 0 ? MAIN_H : NODE_H;
}

interface SubtreeResult {
  height: number;
  nodes: PlacedNode[];
}

function layoutSubtree(node: RNode, id: string, parentId: string, level: number, side: 1 | -1, parentCx: number, startY: number): SubtreeResult {
  const step = level === 1 ? STEP_L1 : STEP_DEEP;
  const cx = parentCx + side * step;
  const w = measureWidth(node, level);
  const h = measureHeight(node, level);
  const hasChildren = !!node.children && node.children.length > 0;

  if (!hasChildren) {
    const blockHeight = Math.max(ROW_STEP, h + 8);
    const cy = startY + blockHeight / 2;
    return {
      height: blockHeight,
      nodes: [{ id, parentId, label: node.label, status: node.status, level, side, cx, cy, w, h, isMain: false, cluster: node.cluster }]
    };
  }

  const childResult = layoutChildren(node.children!, id, level + 1, side, cx, startY);
  const blockHeight = Math.max(childResult.height, h + 12);
  const cy = startY + blockHeight / 2;

  return {
    height: blockHeight,
    nodes: [{ id, parentId, label: node.label, status: node.status, level, side, cx, cy, w, h, isMain: false, cluster: node.cluster }, ...childResult.nodes]
  };
}

function layoutChildren(children: RNode[], parentId: string, level: number, side: 1 | -1, parentCx: number, startY: number): SubtreeResult {
  let y = startY;
  const nodes: PlacedNode[] = [];

  children.forEach((child, i) => {
    const res = layoutSubtree(child, `${parentId}.${i}`, parentId, level, side, parentCx, y);
    nodes.push(...res.nodes);
    y += res.height;
  });

  return { height: y - startY, nodes };
}

function buildBranchPath(parent: PlacedNode, child: PlacedNode): string {
  const dir = child.side;
  const startX = parent.cx + dir * (parent.w / 2);
  const startY = parent.cy;
  const endX = child.cx - dir * (child.w / 2);
  const endY = child.cy;

  if (Math.abs(startY - endY) < 2) {
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }

  const elbowX = startX + dir * Math.max(24, Math.abs(endX - startX) * 0.35);
  return `M ${startX} ${startY} L ${elbowX} ${startY} L ${elbowX} ${endY} L ${endX} ${endY}`;
}

export function buildRoadmapLayout(sections: RNode[]): RoadmapLayout {
  const placed: PlacedNode[] = [];
  let y = TOP_PAD;

  sections.forEach((section, i) => {
    const side: 1 | -1 = i % 2 === 0 ? 1 : -1;
    const mainCx = SPINE_X;
    const mainW = measureWidth(section, 0);
    const mainId = `s${i}`;

    const childResult = section.children ? layoutChildren(section.children, mainId, 1, side, mainCx, y) : { height: ROW_STEP, nodes: [] };
    const blockHeight = Math.max(childResult.height, MAIN_H + 16);
    const mainCy = y + blockHeight / 2;

    placed.push({ id: mainId, parentId: null, label: section.label, status: section.status, level: 0, side, cx: mainCx, cy: mainCy, w: mainW, h: MAIN_H, isMain: true });
    placed.push(...childResult.nodes);
    y += blockHeight + SECTION_GAP;
  });

  let minLeft = Infinity;
  let maxRight = -Infinity;
  let maxBottom = -Infinity;

  placed.forEach((n) => {
    minLeft = Math.min(minLeft, n.cx - n.w / 2);
    maxRight = Math.max(maxRight, n.cx + n.w / 2);
    maxBottom = Math.max(maxBottom, n.cy + n.h / 2);
  });

  const offsetX = SIDE_PAD - minLeft;
  placed.forEach((n) => {
    n.cx += offsetX;
  });

  const spineX = SPINE_X + offsetX;
  const width = maxRight - minLeft + SIDE_PAD * 2;
  const height = maxBottom + TOP_PAD;

  const mains = placed.filter((n) => n.isMain).sort((a, b) => a.cy - b.cy);
  const topY = mains[0].cy - mains[0].h / 2 - 20;
  const bottomY = mains[mains.length - 1].cy + mains[mains.length - 1].h / 2 + 20;
  const spinePath = `M ${spineX} ${topY} L ${spineX} ${bottomY}`;

  const byId = new Map(placed.map((n) => [n.id, n]));
  const branchEdges: BranchEdge[] = [];

  placed.forEach((n) => {
    if (!n.parentId) return;
    const parent = byId.get(n.parentId);
    if (!parent) return;
    branchEdges.push({ id: `e-${n.id}`, d: buildBranchPath(parent, n) });
  });

  return { nodes: placed, spinePath, spineX, branchEdges, width, height };
}
