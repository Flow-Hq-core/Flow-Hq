"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { businessRoadmap } from "@/data/businessRoadmap";
import { buildFlowGraph } from "./flowRoadmapGraph";
import { buildFlowRoadmapLayout, type FlowBranchEdge, type FlowPlacedNode } from "./flowRoadmapLayout";
import { getNodeByLayoutId, nodeProgress, normalizeRoadmapForFlow, type FlowNodeLevel, type SelectedFlowNode } from "./flowRoadmapUtils";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

function nodeLevel(node: FlowPlacedNode): FlowNodeLevel {
  return node.type;
}

function FlowNodeButton({ node, selected, dimmed, onSelect }: { node: FlowPlacedNode; selected: boolean; dimmed: boolean; onSelect: () => void }) {
  const level = nodeLevel(node);
  const style = { left: node.cx - node.w / 2, top: node.cy - node.h / 2, width: node.w, height: node.h };

  if (level === "subcategory") {
    return (
      <button
        type="button"
        onClick={onSelect}
        style={style}
        className={cn(
          "absolute z-10 flex items-center justify-center rounded-md border-2 border-flow-gray-900 bg-amber-300 px-3 text-center text-sm font-semibold leading-tight text-flow-gray-900 transition-all hover:brightness-[0.97]",
          selected && "ring-2 ring-primary ring-offset-2",
          dimmed && "opacity-45"
        )}
      >
        {node.label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      style={style}
      className={cn(
        "absolute z-10 flex items-center justify-center rounded-md border-2 border-flow-gray-900 bg-[#f5e6c8] px-3 text-center text-xs font-medium leading-tight text-flow-gray-900 transition-all hover:brightness-[0.98]",
        selected && "ring-2 ring-primary/60 ring-offset-1",
        dimmed && "opacity-40"
      )}
    >
      {node.label}
    </button>
  );
}

const FLOW_BLUE = "hsl(221 83% 53%)";

function isDirectionalEdge(edge: FlowBranchEdge): boolean {
  return edge.kind === "spine" || edge.kind === "sequence" || edge.style === "solid";
}

function FlowCategoryLabel({ node, dimmed }: { node: FlowPlacedNode; dimmed: boolean }) {
  return (
    <div
      style={{ left: node.cx - node.w / 2, top: node.cy - node.h / 2, width: node.w, height: node.h }}
      className={cn("absolute z-10 flex items-center justify-end pr-1 text-right text-xs font-bold uppercase tracking-wider leading-tight text-flow-gray-900", dimmed && "opacity-40")}
    >
      {node.label}
    </div>
  );
}

function edgeStrokeProps(edge: FlowBranchEdge, active: boolean, muted: boolean) {
  const directional = isDirectionalEdge(edge);
  const dotted = !directional && (edge.style === "dotted-curve" || edge.style === "dotted-straight");

  return {
    stroke: FLOW_BLUE,
    strokeOpacity: directional ? (active ? 0.95 : muted ? 0.22 : 0.85) : active ? 0.9 : muted ? 0.15 : 0.6,
    strokeWidth: directional ? (active ? 3 : 2.6) : active ? 2.5 : 2,
    strokeDasharray: dotted ? "5 5" : undefined
  };
}

export function FlowRoadmapMap({ data = businessRoadmap }: { data?: typeof businessRoadmap }) {
  const [selected, setSelected] = useState<SelectedFlowNode | null>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const normalized = useMemo(() => normalizeRoadmapForFlow(data), [data]);
  const graph = useMemo(() => buildFlowGraph(data), [data]);
  const layout = useMemo(() => buildFlowRoadmapLayout(graph, containerWidth, isMobile), [graph, containerWidth, isMobile]);
  const nodeMap = useMemo(() => new Map(layout.nodes.map((n) => [n.id, n])), [layout.nodes]);

  const relatedIds = useMemo(() => {
    if (!selected) return null;
    const ids = new Set<string>([selected.id]);
    const placed = nodeMap.get(selected.id);
    if (placed?.parentId) ids.add(placed.parentId);
    layout.nodes.forEach((n) => {
      if (n.parentId === selected.id) ids.add(n.id);
    });
    let cur = placed;
    while (cur?.parentId) {
      ids.add(cur.parentId);
      cur = nodeMap.get(cur.parentId);
    }
    return ids;
  }, [selected, nodeMap, layout.nodes]);

  const measureContainer = useCallback(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
  }, []);

  useEffect(() => {
    measureContainer();
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => measureContainer());
    observer.observe(el);
    return () => observer.disconnect();
  }, [measureContainer]);

  const openNode = (placed: FlowPlacedNode) => {
    const source = getNodeByLayoutId(normalized, placed.id);
    const breadcrumb: string[] = [];
    let current: FlowPlacedNode | undefined = placed;

    while (current) {
      breadcrumb.unshift(current.label);
      current = current.parentId ? nodeMap.get(current.parentId) : undefined;
    }

    const level = nodeLevel(placed);
    const progress = source && (level === "category" || level === "subcategory") ? nodeProgress(source) : placed.status === "done" ? 100 : 0;

    setSelected({ id: placed.id, label: placed.label, level, status: placed.status, progress, breadcrumb });
  };

  return (
    <>
      <div ref={containerRef} className="relative w-full overflow-x-auto rounded-2xl border border-border/60 bg-[#f4f4f5]">
        <div className="relative mx-auto" style={{ width: layout.width, minWidth: "100%", height: layout.height }}>
          <svg className="absolute inset-0" width={layout.width} height={layout.height} aria-hidden style={{ pointerEvents: "none" }}>
            <defs>
              <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={FLOW_BLUE} />
              </marker>
            </defs>

            <path d={layout.spinePath} fill="none" stroke={FLOW_BLUE} strokeOpacity={0.9} strokeWidth={3.25} strokeLinecap="round" />

            {layout.branchEdges.map((edge) => {
              const active = !!relatedIds && relatedIds.has(edge.source) && relatedIds.has(edge.target);
              const muted = Boolean(relatedIds && !active);
              const props = edgeStrokeProps(edge, active, muted);
              const directional = isDirectionalEdge(edge);

              return (
                <path
                  key={edge.id}
                  d={edge.d}
                  fill="none"
                  stroke={props.stroke}
                  strokeOpacity={props.strokeOpacity}
                  strokeWidth={props.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={props.strokeDasharray}
                  markerEnd={directional && !muted ? "url(#flow-arrow)" : undefined}
                />
              );
            })}
          </svg>

          {layout.nodes.map((node) => {
            if (node.hidden) return null;
            const dimmed = Boolean(relatedIds && !relatedIds.has(node.id));
            if (node.isLabel) return <FlowCategoryLabel key={node.id} node={node} dimmed={dimmed} />;
            return <FlowNodeButton key={node.id} node={node} selected={selected?.id === node.id} dimmed={dimmed} onSelect={() => openNode(node)} />;
          })}
        </div>
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-md">
          {selected && (
            <>
              <SheetHeader>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {selected.level === "category" ? "Milestone" : selected.level === "subcategory" ? "Topic" : "Subtopic"}
                </p>
                <SheetTitle className="text-left">{selected.label}</SheetTitle>
                <SheetDescription className="text-left">{selected.breadcrumb.join(" → ")}</SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                <div className="rounded-xl border border-border bg-flow-50 p-4">
                  <p className="text-sm font-semibold text-foreground">What to do next</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {selected.status === "done"
                      ? "This step is complete. Follow the highlighted connectors to the next node along the journey."
                      : "Execute this milestone — define the owner, deadline, and deliverable before marking done."}
                  </p>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
