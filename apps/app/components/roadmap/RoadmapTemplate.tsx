import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { RoadmapTree } from "@/components/roadmap/RoadmapTree";
import { cn } from "@/lib/utils";
import type { RoadmapContent } from "@/data/roadmaps";

/**
 * The one roadmap detail page style: a horizontal connector tree beneath a
 * category eyebrow and title. Every roadmap renders through this component; only
 * the RoadmapContent passed in changes (see data/roadmaps.ts). Keep visual
 * decisions here so all roadmaps stay in lockstep.
 */
export function RoadmapTemplate({
  category,
  categoryColor,
  title,
  description,
  root
}: RoadmapContent) {
  return (
    <AppShell>
      <Link
        href="/roadmaps"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All Roadmaps
      </Link>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-flow-sm sm:p-10">
        <div className="mb-10 text-center">
          <p
            className={cn(
              "mb-2 text-sm font-semibold uppercase tracking-wider",
              categoryColor ?? "text-primary"
            )}
          >
            {category}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>

        <RoadmapTree root={root} />
      </div>
    </AppShell>
  );
}
