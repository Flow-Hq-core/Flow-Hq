import type { RNode, RStatus } from "@/data/businessRoadmap";
import { normalizeRoadmapForFlow } from "./flowRoadmapUtils";

export type FlowGraphNodeType = "category" | "subcategory" | "task";

export interface FlowGraphNode {
  id: string;
  parentId: string | null;
  label: string;
  status: RStatus;
  type: FlowGraphNodeType;
  sectionIndex: number;
  siblingIndex: number;
  siblingCount: number;
  sequential?: boolean;
}

export interface FlowGraph {
  nodes: FlowGraphNode[];
}

function levelToType(level: number): FlowGraphNodeType {
  if (level === 0) return "category";
  if (level === 1) return "subcategory";
  return "task";
}

export function buildFlowGraph(sections: RNode[]): FlowGraph {
  const tree = normalizeRoadmapForFlow(sections);
  const nodes: FlowGraphNode[] = [];

  const walk = (node: RNode, id: string, parentId: string | null, level: number, sectionIndex: number, siblingIndex: number, siblingCount: number) => {
    nodes.push({
      id,
      parentId,
      label: node.label,
      status: node.status,
      type: levelToType(level),
      sectionIndex,
      siblingIndex,
      siblingCount,
      sequential: node.sequential
    });

    const children = node.children ?? [];
    children.forEach((child, i) => {
      walk(child, `${id}.${i}`, id, level + 1, sectionIndex, i, children.length);
    });
  };

  tree.forEach((section, i) => {
    walk(section, `s${i}`, null, 0, i, i, tree.length);
  });

  return { nodes };
}
