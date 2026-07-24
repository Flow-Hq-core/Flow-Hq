"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Circle,
  CircleDot,
  Lock,
  Sparkles,
  Star,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { RNode, RStatus } from "@/data/businessRoadmap";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import styles from "./roadmap-tree.module.css";

/** A node's children — either real children or a flat `cluster` of leaves. */
function childrenOf(node: RNode): RNode[] {
  if (node.children?.length) return node.children;
  if (node.cluster?.length) return node.cluster.map((c) => ({ label: c.label, status: c.status }));
  return [];
}

/** Status marker shown inside a pill. `pending` is the unmarked baseline. */
const STATUS_META: Record<RStatus, { icon: LucideIcon | null; className: string }> = {
  done: { icon: Check, className: "text-emerald-600" },
  current: { icon: CircleDot, className: "text-primary" },
  recommended: { icon: Star, className: "text-amber-500" },
  "ai-suggested": { icon: Sparkles, className: "text-violet-500" },
  locked: { icon: Lock, className: "text-muted-foreground" },
  pending: { icon: null, className: "" }
};

/** Extra pill treatment for states that change the whole pill, not just the icon. */
const STATUS_PILL: Partial<Record<RStatus, string>> = {
  current: "ring-2 ring-primary/40",
  locked: "opacity-60"
};

/** Number of branch hue classes (h0..hN-1) defined in the CSS module. */
const BRANCH_COUNT = 10;

/** depth 0 = root, 1 = category (24/bold), 2 = topic (18/semibold), 3+ = node (14/medium). */
function depthStyle(depth: number): string {
  if (depth === 0) return styles.root;
  if (depth === 1) return styles.category;
  if (depth === 2) return styles.topic;
  return styles.node;
}
function iconSize(depth: number): string {
  if (depth <= 1) return "h-4 w-4";
  if (depth === 2) return "h-3.5 w-3.5";
  return "h-3 w-3";
}

function TreeNode({
  node,
  depth,
  branchIndex,
  onSelect
}: {
  node: RNode;
  depth: number;
  branchIndex: number;
  onSelect: (node: RNode) => void;
}) {
  const kids = childrenOf(node);
  const meta = STATUS_META[node.status];
  const Icon = meta.icon;
  // A depth-1 node starts a branch: tag it with a hue class whose --rm-h every
  // descendant pill inherits (a lighter shade the deeper it goes).
  const hueClass = depth === 1 ? styles[`h${branchIndex % BRANCH_COUNT}`] : undefined;

  return (
    <li data-status={node.status} className={hueClass}>
      <button
        type="button"
        onClick={() => onSelect(node)}
        className={cn(styles.lbl, depthStyle(depth), STATUS_PILL[node.status])}
      >
        {Icon && <Icon className={cn("shrink-0", iconSize(depth), meta.className)} />}
        {node.label}
      </button>
      {kids.length > 0 && (
        <ul>
          {kids.map((child, i) => (
            <TreeNode
              key={child.label}
              node={child}
              depth={depth + 1}
              branchIndex={depth === 0 ? i : branchIndex}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/** The status key under the tree — makes the state vocabulary legible. */
const LEGEND: { status: RStatus; label: string }[] = [
  { status: "done", label: "Completed" },
  { status: "current", label: "Current" },
  { status: "recommended", label: "Recommended" },
  { status: "ai-suggested", label: "AI Suggested" },
  { status: "locked", label: "Locked" }
];

function Legend() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      {LEGEND.map(({ status, label }) => {
        const { icon: Icon, className } = STATUS_META[status];
        return (
          <span
            key={status}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            {Icon && <Icon className={cn("h-3.5 w-3.5", className)} />}
            {label}
          </span>
        );
      })}
    </div>
  );
}

/** roadmap.sh-style status control inside the panel. Local-only for now (no
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
 *  drawer: title, a status control, a description, then a breakdown of the
 *  node's sub-topics. Shows `summary` prose when the data provides it. */
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
                <span className={cn(k.status !== "done" && "text-muted-foreground")}>{k.label}</span>
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
 * the viewport. Nodes are sized by depth, tinted by branch, and marked by
 * status; each opens a right-side sheet with its details.
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
            <TreeNode node={root} depth={0} branchIndex={0} onSelect={setSelected} />
          </ul>
        </div>
      </div>

      <Legend />

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
