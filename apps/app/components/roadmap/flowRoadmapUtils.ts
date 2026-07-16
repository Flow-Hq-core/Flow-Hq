import type { RNode, RStatus } from "@/data/businessRoadmap";

export function normalizeRoadmapForFlow(sections: RNode[]): RNode[] {
  const normalizeNode = (node: RNode): RNode => {
    if (node.cluster) {
      return {
        label: node.label,
        status: node.status,
        children: node.cluster.map((item) => ({
          label: item.label,
          status: item.status
        }))
      };
    }
    if (node.children) {
      return { ...node, children: node.children.map(normalizeNode) };
    }
    return node;
  };

  return sections.map(normalizeNode);
}

export function getNodeByLayoutId(sections: RNode[], id: string): RNode | null {
  const parts = id.split(".").filter(Boolean);
  if (parts.length === 0) return null;
  const sectionIndex = Number.parseInt(parts[0].replace("s", ""), 10);
  let node = sections[sectionIndex];
  if (!node) return null;

  for (let i = 1; i < parts.length; i++) {
    const childIndex = Number.parseInt(parts[i], 10);
    if (!node.children?.[childIndex]) return null;
    node = node.children[childIndex];
  }

  return node;
}

export type FlowNodeLevel = "category" | "subcategory" | "task";

export interface SelectedFlowNode {
  id: string;
  label: string;
  level: FlowNodeLevel;
  status: RStatus;
  progress: number;
  breadcrumb: string[];
}

function collectLeaves(node: RNode): RStatus[] {
  if (node.cluster) return node.cluster.map((c) => c.status);
  if (node.children?.length) return node.children.flatMap(collectLeaves);
  return [node.status];
}

export function nodeProgress(node: RNode): number {
  const leaves = collectLeaves(node);
  if (leaves.length === 0) return node.status === "done" ? 100 : 0;
  const done = leaves.filter((s) => s === "done").length;
  return Math.round((done / leaves.length) * 100);
}
