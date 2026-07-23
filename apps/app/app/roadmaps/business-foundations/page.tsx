import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { RoadmapTree } from "@/components/roadmap/RoadmapTree";
import { businessRoadmap, type RNode } from "@/data/businessRoadmap";

/**
 * Business Foundations roadmap — uses the full business-operating-flow content
 * (businessRoadmap.ts, all 10 stages), rendered as a connector tree rather
 * than the central-spine FlowRoadmapMap. The 10 sequential stages become the
 * root's children, in order.
 */
const root: RNode = { label: "Business Operating", status: "done", children: businessRoadmap };

export default function BusinessFoundationsPage() {
  return (
    <AppShell>
      <Link
        href="/roadmaps"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All Roadmaps
      </Link>

      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Business</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {root.label}
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          The full roadmap at a glance — read left to right, each stage opening into its layers and
          the topics they contain.
        </p>
      </div>

      <RoadmapTree root={root} />
    </AppShell>
  );
}
