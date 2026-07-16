import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPLORE_CARDS } from "@flow-hq/shared";

export default function ExplorePage() {
  return (
    <AppShell
      title="Explore"
      description="The central hub for Flow modules. This page will connect Roadmaps, Business AI, Projects, Playlists, Templates, Industries, Popular content, and Recent activity."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {EXPLORE_CARDS.map((card) => (
          <Link key={card.title} href={card.href}>
            <Card className="p-5 transition-shadow hover:shadow-flow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{card.title}</CardTitle>
                <CardDescription className="leading-relaxed">{card.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
