import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { ROADMAP_CATEGORIES, ROADMAP_LINKS } from "@flow-hq/shared";

export default function RoadmapsPage() {
  return (
    <AppShell
      title="Roadmaps"
      description="Browse paths from beginner to advanced. Every milestone can become a project."
    >
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {ROADMAP_CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/roadmaps/business-101">Start Roadmap</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects/new">Create Project</Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        {ROADMAP_LINKS.map((roadmap) => (
          <Link
            key={roadmap.href}
            href={roadmap.href}
            className={
              roadmap.variant === "primary"
                ? "inline-flex h-11 items-center justify-center rounded-md border border-primary/30 bg-primary px-6 text-sm font-medium text-primary-foreground shadow-flow-blue transition-colors hover:bg-flow-600"
                : "inline-flex h-11 items-center justify-center rounded-md border border-slate-800 bg-slate-950 px-6 text-sm font-medium text-slate-50 shadow-md transition-colors hover:border-slate-700 hover:bg-slate-900"
            }
          >
            {roadmap.label}
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
