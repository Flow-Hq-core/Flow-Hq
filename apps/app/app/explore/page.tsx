import Link from "next/link";
import { ArrowRight, Brain, FolderKanban, GraduationCap, Map } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { EXPLORE_ROWS, type ExploreCard, type ExploreRow } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

const ROW_ICONS = {
  roadmaps: Map,
  projects: FolderKanban,
  "business-ai": Brain,
  playlists: GraduationCap
} as const;

function Card({ card }: { card: ExploreCard }) {
  return (
    <Link
      href={card.href}
      className="group flex w-64 shrink-0 snap-start flex-col rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-flow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-72"
    >
      {card.badge && (
        <span className="mb-3 w-fit rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {card.badge}
        </span>
      )}
      <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
      {card.meta && (
        <p className="mt-4 text-xs font-medium text-muted-foreground">{card.meta}</p>
      )}
    </Link>
  );
}

function Row({ row }: { row: ExploreRow }) {
  const Icon = ROW_ICONS[row.id];
  return (
    <section className="mb-14">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
            <Icon className="h-4 w-4 text-primary" />
          </span>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-foreground">{row.title}</h2>
            <p className="truncate text-sm text-muted-foreground">{row.subtitle}</p>
          </div>
        </div>
        <Link
          href={row.href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          See all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Horizontal carousel. The negative margins let cards bleed to the
          viewport edge so the row reads as scrollable, and the padding keeps
          the first and last card clear of the content gutter. */}
      <div
        className={cn(
          "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {row.cards.map((card) => (
          <Card key={`${row.id}-${card.title}`} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function ExplorePage() {
  return (
    <AppShell
      title="Explore"
      description="Everything across Flow, one product per row. Browse a row, or open a product to see it all."
    >
      {EXPLORE_ROWS.map((row) => (
        <Row key={row.id} row={row} />
      ))}
    </AppShell>
  );
}
