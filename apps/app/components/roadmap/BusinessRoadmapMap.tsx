"use client";

import { useMemo } from "react";
import { Check } from "lucide-react";
import { businessRoadmap, type RStatus } from "@/data/businessRoadmap";
import { buildRoadmapLayout, type PlacedNode } from "./roadmapLayout";
import { cn } from "@/lib/utils";

function StatusDot({ status, className, onDark = false }: { status: RStatus; className?: string; onDark?: boolean }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border-2",
        status === "done" ? "border-primary bg-primary" : onDark ? "border-white/60 bg-white/20" : "border-flow-gray-400 bg-white",
        className
      )}
    >
      {status === "done" && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />}
    </span>
  );
}

const nodeBase =
  "absolute flex items-center justify-center gap-2 rounded-md border-2 border-flow-gray-900 px-3 text-center text-sm leading-tight transition-colors hover:brightness-[0.97]";

function MainNode({ node }: { node: PlacedNode }) {
  return (
    <div className={cn(nodeBase, "bg-primary font-semibold text-primary-foreground")} style={{ left: node.cx - node.w / 2, top: node.cy - node.h / 2, width: node.w, height: node.h }}>
      <StatusDot status={node.status} onDark className="absolute top-1/2 h-4 w-4 -translate-y-1/2 -left-2" />
      <span>{node.label}</span>
    </div>
  );
}

function ClusterNode({ node }: { node: PlacedNode }) {
  return (
    <div className="absolute rounded-md border-2 border-flow-gray-900 bg-card px-2 py-2" style={{ left: node.cx - node.w / 2, top: node.cy - node.h / 2, width: node.w }}>
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-flow-gray-600">{node.label}</p>
      <div className="grid grid-cols-2 gap-1.5">
        {node.cluster!.map((chip) => (
          <div key={chip.label} className="relative flex items-center justify-center rounded-md border-2 border-flow-gray-900 bg-flow-100 px-2 py-1.5 text-center text-xs font-medium text-flow-gray-900">
            <StatusDot status={chip.status} className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2" />
            <span className="leading-none">{chip.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopicNode({ node }: { node: PlacedNode }) {
  const isSubtopic = node.level >= 2;
  return (
    <div
      className={cn(nodeBase, isSubtopic ? "bg-flow-50 font-medium text-flow-gray-900" : "bg-flow-100 font-semibold text-flow-gray-900")}
      style={{ left: node.cx - node.w / 2, top: node.cy - node.h / 2, width: node.w, height: node.h }}
    >
      <StatusDot status={node.status} className={cn("absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2", node.side === 1 ? "-left-1.5" : "-right-1.5")} />
      <span>{node.label}</span>
    </div>
  );
}

export function BusinessRoadmapMap() {
  const layout = useMemo(() => buildRoadmapLayout(businessRoadmap), []);

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-flow-gray-50">
      <div className="mx-auto" style={{ width: layout.width, minWidth: layout.width }}>
        <div className="relative" style={{ width: layout.width, height: layout.height }}>
          <svg className="absolute inset-0" width={layout.width} height={layout.height} style={{ pointerEvents: "none" }}>
            <path d={layout.spinePath} fill="none" stroke="hsl(221 83% 53%)" strokeWidth={3.5} strokeLinecap="round" strokeDasharray="3 7" />
            {layout.branchEdges.map((edge) => (
              <path key={edge.id} d={edge.d} fill="none" stroke="hsl(221 83% 53%)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            ))}
          </svg>

          {layout.nodes.map((node) => {
            if (node.isMain) return <MainNode key={node.id} node={node} />;
            if (node.cluster) return <ClusterNode key={node.id} node={node} />;
            return <TopicNode key={node.id} node={node} />;
          })}
        </div>
      </div>
    </div>
  );
}
