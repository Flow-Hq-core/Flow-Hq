"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RNode, RStatus } from "@/data/businessRoadmap";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
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

function StatusBadge({ status }: { status: RStatus }) {
  const done = status === "done";
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 self-start rounded-full border px-2.5 py-0.5 text-xs font-medium",
        done
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600"
          : "border-border bg-muted/50 text-muted-foreground"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", done ? "bg-emerald-500" : "bg-muted-foreground/50")} />
      {done ? "Complete" : "In progress"}
    </span>
  );
}

/** The side-panel body for a clicked node. Shows status + a breakdown built from
 *  the node's own children; renders `summary` prose when the data provides it. */
function NodeDetails({ node }: { node: RNode }) {
  const kids = childrenOf(node);
  const doneCount = kids.filter((k) => k.status === "done").length;

  return (
    <div>
      <SheetHeader className="pr-8 text-left">
        <StatusBadge status={node.status} />
        <SheetTitle className="text-xl">{node.label}</SheetTitle>
        <SheetDescription>
          {node.summary ??
            (kids.length > 0
              ? `${doneCount} of ${kids.length} ${kids.length === 1 ? "topic" : "topics"} complete.`
              : "A single milestone in this roadmap.")}
        </SheetDescription>
      </SheetHeader>

      {kids.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Breakdown
          </p>
          <ul className="space-y-1.5">
            {kids.map((k) => (
              <li
                key={k.label}
                className="flex items-center gap-2.5 rounded-lg border border-border/70 px-3 py-2 text-sm"
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
 * roadmap-tree.module.css). Each node is a button that opens a right-side sheet
 * with its details. Scrolls horizontally when wider than the viewport.
 */
export function RoadmapTree({ root }: { root: RNode }) {
  const [selected, setSelected] = useState<RNode | null>(null);

  return (
    <>
      <div className="overflow-x-auto pb-4">
        <ul className={styles.tree}>
          <TreeNode node={root} root onSelect={setSelected} />
        </ul>
      </div>

      <Sheet
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
          {selected && <NodeDetails node={selected} />}
        </SheetContent>
      </Sheet>
    </>
  );
}
