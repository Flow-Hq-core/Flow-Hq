import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { EXPLORE_CARDS } from "@flow-hq/shared";

export default function ExplorePage() {
  return (
    <AppShell
      title="Explore"
      description="The central hub for Flow modules. This page will connect Roadmaps, Business AI, Projects, Playlists, Templates, Industries, Popular content, and Recent activity."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {EXPLORE_CARDS.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-flow-md"
          >
            <h2 className="text-base font-semibold text-foreground">{card.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

