"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RNode } from "@/data/businessRoadmap";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import styles from "./roadmap-tree.module.css";

/** A node's children — either real children or a flat `cluster` of leaves. */
function childrenOf(node: RNode): RNode[] {
  if (node.children?.length) return node.children;
  if (node.cluster?.length) return node.cluster.map((c) => ({ label: c.label, status: c.status }));
  return [];
}

function TreeNode({
  node,
  root = false,
  onSelect
}: {
  node: RNode;
  root?: boolean;
  onSelect: (node: RNode) => void;
}) {
  const kids = childrenOf(node);
  return (
    <li data-status={node.status}>
      <button
        type="button"
        onClick={() => onSelect(node)}
        className={cn(styles.lbl, root && styles.root, node.status === "pending" && styles.pending)}
      >
        {node.label}
      </button>
      {kids.length > 0 && (
        <ul>
          {kids.map((child) => (
            <TreeNode key={child.label} node={child} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
}

/** roadmap.sh-style status control. Local to the panel — not persisted yet (no
 *  progress backend), initialised from the node's status in the data. */
const STATUS_OPTIONS = [
  { key: "pending", label: "Pending" },
  { key: "in-progress", label: "In Progress" },
  { key: "done", label: "Done" },
  { key: "skip", label: "Skip" }
] as const;

const ACTIVE_STATUS: Record<string, string> = {
  pending: "border-transparent bg-muted text-foreground",
  "in-progress": "border-transparent bg-amber-500/15 text-amber-600",
  done: "border-transparent bg-emerald-500/15 text-emerald-600",
  skip: "border-transparent bg-muted text-muted-foreground"
};

/** The side-panel body for a clicked node, modelled on the roadmap.sh topic
 *  drawer: title, a status control, a description, then a resource-style list
 *  built from the node's sub-topics. Shows `summary` prose when data provides it. */
function NodeDetails({ node }: { node: RNode }) {
  const kids = childrenOf(node);
  const [status, setStatus] = useState<string>(node.status === "done" ? "done" : "pending");

  return (
    <div>
      <SheetTitle className="text-2xl font-bold text-foreground">{node.label}</SheetTitle>

      <div className="mt-4 flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setStatus(opt.key)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              status === opt.key
                ? ACTIVE_STATUS[opt.key]
                : "border-border text-muted-foreground hover:bg-muted/50"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <SheetDescription className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {node.summary ??
          (kids.length > 0
            ? `This area breaks down into ${kids.length} ${kids.length === 1 ? "topic" : "topics"}.`
            : "A single milestone in this roadmap.")}
      </SheetDescription>

      {kids.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Breakdown
          </h3>
          <ul className="space-y-2">
            {kids.map((k) => (
              <li
                key={k.label}
                className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-muted/20 px-3 py-2.5 text-sm"
              >
                {k.status === "done" ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                )}
                <span className={cn(k.status === "pending" && "text-muted-foreground")}>{k.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Renders a roadmap node as a left-to-right connector tree (see
 * roadmap-tree.module.css), centered when it fits and scrollable when wider than
 * the viewport. Each node is a button that opens a right-side sheet with its
 * details.
 */
export function RoadmapTree({ root }: { root: RNode }) {
  const [selected, setSelected] = useState<RNode | null>(null);

  return (
    <>
      <div className="overflow-x-auto pb-4">
        {/* safe center: centered when it fits, start-aligned (fully scrollable)
            when it overflows, so the left edge never gets clipped. */}
        <div className="flex [justify-content:safe_center]">
          <ul className={styles.tree}>
            <TreeNode node={root} root onSelect={setSelected} />
          </ul>
        </div>
      </div>

      <Sheet
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
          {selected && <NodeDetails key={selected.label} node={selected} />}
        </SheetContent>
      </Sheet>
    </>
  );
}
