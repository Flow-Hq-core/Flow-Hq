import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { ROADMAP_LINKS } from "@flow-hq/shared";

export default function RoadmapsPage() {
  return (
    <AppShell
      title="Roadmaps"
      description="Start with the fundamentals. New role-specific roadmaps will be added over time."
    >
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
