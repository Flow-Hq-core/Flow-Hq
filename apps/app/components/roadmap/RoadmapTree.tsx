import { cn } from "@/lib/utils";
import type { RNode } from "@/data/businessRoadmap";
import styles from "./roadmap-tree.module.css";

/** A node's children — either real children or a flat `cluster` of leaves. */
function childrenOf(node: RNode): RNode[] {
  if (node.children?.length) return node.children;
  if (node.cluster?.length) return node.cluster.map((c) => ({ label: c.label, status: c.status }));
  return [];
}

function TreeNode({ node, root = false }: { node: RNode; root?: boolean }) {
  const kids = childrenOf(node);
  return (
    <li>
      <span
        className={cn(styles.lbl, root && styles.root, node.status === "pending" && styles.pending)}
      >
        {node.label}
      </span>
      {kids.length > 0 && (
        <ul>
          {kids.map((child) => (
            <TreeNode key={child.label} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Renders a roadmap node as a left-to-right connector tree (see
 * roadmap-tree.module.css). Scrolls horizontally when wider than the viewport.
 */
export function RoadmapTree({ root }: { root: RNode }) {
  return (
    <div className="overflow-x-auto pb-4">
      <ul className={styles.tree}>
        <TreeNode node={root} root />
      </ul>
    </div>
  );
}
