import type { RStatus } from "@/data/businessRoadmap";
import type { FlowGraph, FlowGraphNodeType } from "./flowRoadmapGraph";

export interface FlowPlacedNode {
  id: string;
  parentId: string | null;
  label: string;
  status: RStatus;
  level: number;
  type: FlowGraphNodeType;
  side: 1 | -1;
  cx: number;
  cy: number;
  w: number;
  h: number;
  isMain: boolean;
  terminal?: "start" | "finish";
  isLabel?: boolean;
  hidden?: boolean;
}

export type FlowEdgeStyle = "solid" | "dotted-curve" | "dotted-straight";
export type FlowEdgeKind = "spine" | "branch" | "task" | "sequence" | "terminal";

export interface FlowBranchEdge {
  id: string;
  source: string;
  target: string;
  d: string;
  kind: FlowEdgeKind;
  style: FlowEdgeStyle;
}

export interface FlowRoadmapLayout {
  nodes: FlowPlacedNode[];
  spinePath: string;
  spineX: number;
  branchEdges: FlowBranchEdge[];
  width: number;
  height: number;
}

const TOP_PAD = 40;
const BOTTOM_PAD = 56;
const SIDE_PAD = 48;
const TOPIC_H = 42;
const SUBTOPIC_H = 34;
const LABEL_H = 28;
const TOPIC_GAP = 30;
const SUBTOPIC_GAP = 12;
const CATEGORY_GAP_TOP = 44;
const CATEGORY_GAP_BOTTOM = 26;
const STUB_LEN = 34;
const START_ID = "__start";
const FINISH_ID = "__finish";

const clamp = (min: number, val: number, max: number) => Math.max(min, Math.min(max, val));

function measureWidth(label: string, type: FlowGraphNodeType): number {
  if (type === "category") return clamp(148, label.length * 8.4 + 40, 300);
  if (type === "subcategory") return clamp(132, label.length * 6.8 + 36, 250);
  return clamp(112, label.length * 6.2 + 32, 210);
}

function buildSpineEdge(prev: FlowPlacedNode, next: FlowPlacedNode): string {
  return `M ${prev.cx} ${prev.cy + prev.h / 2} L ${next.cx} ${next.cy - next.h / 2}`;
}

function buildVerticalEdge(parent: FlowPlacedNode, child: FlowPlacedNode): string {
  return `M ${parent.cx} ${parent.cy + parent.h / 2} L ${child.cx} ${child.cy - child.h / 2}`;
}

function buildDottedCurveSide(parent: FlowPlacedNode, child: FlowPlacedNode): string {
  const dir = child.side;
  const startX = parent.cx + dir * (parent.w / 2);
  const startY = parent.cy;
  const endX = child.cx - dir * (child.w / 2);
  const endY = child.cy;
  const dx = Math.abs(endX - startX);
  const cp1x = startX + dir * Math.max(36, dx * 0.45);
  const cp2x = endX - dir * Math.max(36, dx * 0.45);
  return `M ${startX} ${startY} C ${cp1x} ${startY} ${cp2x} ${endY} ${endX} ${endY}`;
}

function buildDottedStraightSide(parent: FlowPlacedNode, child: FlowPlacedNode): string {
  const dir = child.side;
  const startX = parent.cx + dir * (parent.w / 2);
  const startY = parent.cy;
  const endX = child.cx - dir * (child.w / 2);
  const endY = child.cy;
  if (Math.abs(endY - startY) < 10) return `M ${startX} ${startY} L ${endX} ${endY}`;
  const midX = (startX + endX) / 2;
  return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
}

function pickBranchStyle(siblingCount: number): FlowEdgeStyle {
  return siblingCount >= 3 ? "dotted-curve" : "dotted-straight";
}

function buildStyledSideEdge(style: FlowEdgeStyle, parent: FlowPlacedNode, child: FlowPlacedNode): string {
  if (style === "dotted-curve") return buildDottedCurveSide(parent, child);
  return buildDottedStraightSide(parent, child);
}

function placeNode(
  nodes: FlowPlacedNode[],
  partial: Omit<FlowPlacedNode, "cx" | "cy" | "w" | "h"> & { cx: number; cy: number; w?: number; h?: number }
): FlowPlacedNode {
  const w = partial.w ?? measureWidth(partial.label, partial.type);
  const h = partial.h ?? (partial.type === "category" ? LABEL_H : partial.type === "subcategory" ? TOPIC_H : SUBTOPIC_H);
  const placed: FlowPlacedNode = { ...partial, w, h };
  nodes.push(placed);
  return placed;
}

function childrenMap(graph: FlowGraph): Map<string, FlowGraph["nodes"]> {
  const map = new Map<string, FlowGraph["nodes"]>();
  graph.nodes.forEach((n) => {
    if (!n.parentId) return;
    const list = map.get(n.parentId) ?? [];
    list.push(n);
    map.set(n.parentId, list);
  });
  return map;
}

export function buildFlowRoadmapLayout(graph: FlowGraph, containerWidth: number, mobile: boolean): FlowRoadmapLayout {
  const width = Math.max(containerWidth, 360);
  const spineX = width / 2;
  const childrenOf = childrenMap(graph);
  const categories = graph.nodes.filter((n) => n.type === "category");
  const half = Math.max(160, (width - SIDE_PAD * 2) / 2);
  const sideStep = mobile ? 0 : clamp(220, half * 0.62, 340);

  const nodes: FlowPlacedNode[] = [];
  const branchEdges: FlowBranchEdge[] = [];
  const topicNodes: FlowPlacedNode[] = [];

  let y = TOP_PAD + STUB_LEN;
  let topicIndex = 0;
  let prevTopicNode: FlowPlacedNode | null = null;

  categories.forEach((cat) => {
    const topics = childrenOf.get(cat.id) ?? [];
    y += CATEGORY_GAP_TOP;
    const labelW = measureWidth(cat.label, "category");
    placeNode(nodes, { id: cat.id, parentId: null, label: cat.label, status: cat.status, level: 0, type: "category", side: -1, cx: spineX - labelW / 2 - 16, cy: y + LABEL_H / 2, w: labelW, h: LABEL_H, isMain: true, isLabel: true });
    y += LABEL_H + CATEGORY_GAP_BOTTOM;

    topics.forEach((topic) => {
      const side: 1 | -1 = topicIndex % 2 === 0 ? 1 : -1;
      const subtopics = childrenOf.get(topic.id) ?? [];
      const topicSequential = Boolean(topic.sequential);
      const fanStyle = pickBranchStyle(subtopics.length);

      const placeTopic = (cy: number) =>
        placeNode(nodes, { id: topic.id, parentId: cat.id, label: topic.label, status: topic.status, level: 1, type: "subcategory", side, cx: spineX, cy, h: TOPIC_H, isMain: false });

      const chainSpine = (topicNode: FlowPlacedNode) => {
        if (prevTopicNode) {
          branchEdges.push({ id: `seq-${prevTopicNode.id}-${topic.id}`, source: prevTopicNode.id, target: topic.id, d: buildSpineEdge(prevTopicNode, topicNode), kind: "sequence", style: "solid" });
        }
        prevTopicNode = topicNode;
        topicNodes.push(topicNode);
      };

      if (mobile) {
        const topicNode = placeTopic(y + TOPIC_H / 2);
        chainSpine(topicNode);
        let sy = topicNode.cy + TOPIC_H / 2 + SUBTOPIC_GAP + 6;
        let prevSubNode: FlowPlacedNode | null = null;

        subtopics.forEach((subtopic) => {
          const subNode = placeNode(nodes, { id: subtopic.id, parentId: topic.id, label: subtopic.label, status: subtopic.status, level: 2, type: "task", side: 1, cx: spineX + 20, cy: sy + SUBTOPIC_H / 2, h: SUBTOPIC_H, isMain: false });
          branchEdges.push({ id: `e-${(prevSubNode ?? topicNode).id}-${subtopic.id}`, source: (prevSubNode ?? topicNode).id, target: subtopic.id, d: buildVerticalEdge(prevSubNode ?? topicNode, subNode), kind: topicSequential ? "sequence" : "task", style: topicSequential ? "solid" : "dotted-straight" });
          prevSubNode = subNode;
          sy += SUBTOPIC_H + SUBTOPIC_GAP;
        });

        y = (subtopics.length > 0 ? sy : topicNode.cy + TOPIC_H / 2) + TOPIC_GAP;
        topicIndex += 1;
        return;
      }

      const fanH = subtopics.length > 0 ? subtopics.length * SUBTOPIC_H + (subtopics.length - 1) * SUBTOPIC_GAP : 0;
      const rowH = Math.max(TOPIC_H, fanH);
      const rowCenter = y + rowH / 2;
      const topicNode = placeTopic(rowCenter);
      chainSpine(topicNode);

      const subX = spineX + side * sideStep;
      let subY = rowCenter - fanH / 2;
      let prevSubNode: FlowPlacedNode | null = null;

      subtopics.forEach((subtopic) => {
        const subNode = placeNode(nodes, { id: subtopic.id, parentId: topic.id, label: subtopic.label, status: subtopic.status, level: 2, type: "task", side, cx: subX, cy: subY + SUBTOPIC_H / 2, h: SUBTOPIC_H, isMain: false });
        branchEdges.push({
          id: `e-${(prevSubNode ?? topicNode).id}-${subtopic.id}`,
          source: (prevSubNode ?? topicNode).id,
          target: subtopic.id,
          d: topicSequential ? buildVerticalEdge(prevSubNode ?? topicNode, subNode) : buildStyledSideEdge(fanStyle, topicNode, subNode),
          kind: topicSequential ? "sequence" : "task",
          style: topicSequential ? "solid" : fanStyle
        });
        prevSubNode = subNode;
        subY += SUBTOPIC_H + SUBTOPIC_GAP;
      });

      y = rowCenter + rowH / 2 + TOPIC_GAP;
      topicIndex += 1;
    });
  });

  const firstTopic = topicNodes[0];
  const lastTopic = topicNodes[topicNodes.length - 1];

  if (firstTopic) {
    const startAnchor = placeNode(nodes, { id: START_ID, parentId: null, label: "", status: "done", level: 0, type: "subcategory", side: 1, cx: spineX, cy: firstTopic.cy - firstTopic.h / 2 - STUB_LEN, w: 1, h: 1, isMain: false, terminal: "start", hidden: true });
    branchEdges.push({ id: "term-start", source: startAnchor.id, target: firstTopic.id, d: buildVerticalEdge(startAnchor, firstTopic), kind: "terminal", style: "dotted-straight" });
  }

  if (lastTopic) {
    const finishAnchor = placeNode(nodes, { id: FINISH_ID, parentId: null, label: "", status: "pending", level: 0, type: "subcategory", side: 1, cx: spineX, cy: lastTopic.cy + lastTopic.h / 2 + STUB_LEN, w: 1, h: 1, isMain: false, terminal: "finish", hidden: true });
    branchEdges.push({ id: "term-finish", source: lastTopic.id, target: finishAnchor.id, d: buildVerticalEdge(lastTopic, finishAnchor), kind: "terminal", style: "dotted-straight" });
  }

  let minLeft = Infinity;
  let maxRight = -Infinity;
  nodes.forEach((n) => {
    minLeft = Math.min(minLeft, n.cx - n.w / 2);
    maxRight = Math.max(maxRight, n.cx + n.w / 2);
  });

  const contentSpan = maxRight - minLeft;
  const targetWidth = Math.max(width, contentSpan + SIDE_PAD * 2);
  const offsetX = (targetWidth - contentSpan) / 2 - minLeft;

  if (Math.abs(offsetX) > 0.5) {
    nodes.forEach((n) => {
      n.cx += offsetX;
    });
    const byId = new Map(nodes.map((n) => [n.id, n]));
    branchEdges.forEach((edge) => {
      const parent = byId.get(edge.source);
      const child = byId.get(edge.target);
      if (!parent || !child) return;
      edge.d =
        edge.kind === "spine" || edge.kind === "terminal" || edge.kind === "sequence"
          ? buildVerticalEdge(parent, child)
          : buildStyledSideEdge(edge.style, parent, child);
    });
  }

  const finalSpineX = spineX + offsetX;
  const spinePath = firstTopic ? `M ${finalSpineX} ${firstTopic.cy} L ${finalSpineX} ${lastTopic.cy}` : "";
  const contentBottom = nodes.reduce((max, n) => Math.max(max, n.cy + n.h / 2), 0);

  return { nodes, spinePath, spineX: finalSpineX, branchEdges, width: targetWidth, height: contentBottom + BOTTOM_PAD };
}
