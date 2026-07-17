import Link from "next/link";
import { Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["Business", "Technology", "Career", "Skills"];

/** Placeholder until playlists and progress come from @flow-hq/database. */
const recommended = [
  {
    id: "positioning-mastery",
    title: "Positioning Mastery",
    description: "Find the wedge, tell the story, test it.",
    meta: "7 lessons · Business",
    reason: "Business AI flagged weak positioning"
  },
  {
    id: "python-mastery",
    title: "Python Mastery",
    description: "From syntax to shipping real tools.",
    meta: "24 lessons · Technology",
    reason: "From your Data Engineering roadmap"
  },
  {
    id: "unit-economics",
    title: "Unit Economics",
    description: "Know whether the business actually works.",
    meta: "9 lessons · Business",
    reason: "Gap in your Business Operating roadmap"
  }
];

const continueLearning = [
  {
    id: "positioning-mastery",
    title: "Positioning Mastery",
    meta: "Next: Messaging frameworks",
    progress: 43
  },
  {
    id: "getting-started",
    title: "Getting Started with Flow",
    meta: "Next: Turning nodes into projects",
    progress: 35
  }
];

const completed = [{ title: "Business Model Basics", meta: "6 lessons · finished last month" }];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function PlaylistsPage() {
  return (
    <AppShell
      title="Learn anything through structured paths."
      description="Curated paths tied to the gaps in your roadmaps and projects — sequenced, not searchable."
    >
      <div className="mb-8">
        <Button asChild>
          <Link href="/playlists/getting-started">Generate learning path</Link>
        </Button>
      </div>

      <Section title="Categories">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground"
            >
              {category}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Continue learning">
        <div className="grid gap-4 sm:grid-cols-2">
          {continueLearning.map((playlist) => (
            <Link key={playlist.id} href={`/playlists/${playlist.id}`}>
              <Card className="h-full p-5 transition-shadow hover:shadow-flow-md">
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{playlist.title}</CardTitle>
                  <CardDescription>{playlist.meta}</CardDescription>
                </CardHeader>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${playlist.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{playlist.progress}%</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Recommended learning paths">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((playlist) => (
            <Link key={playlist.id} href={`/playlists/${playlist.id}`}>
              <Card className="h-full p-5 transition-shadow hover:shadow-flow-md">
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{playlist.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {playlist.description}
                  </CardDescription>
                </CardHeader>
                <p className="mt-3 text-xs text-muted-foreground">{playlist.meta}</p>
                <p className="mt-3 border-t border-border pt-3 text-xs font-medium text-primary">
                  {playlist.reason}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Completed">
        <div className="grid gap-4 sm:grid-cols-2">
          {completed.map((playlist) => (
            <Card key={playlist.title} className="p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </span>
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{playlist.title}</CardTitle>
                  <CardDescription>{playlist.meta}</CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
