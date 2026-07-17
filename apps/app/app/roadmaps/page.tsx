import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ROADMAP_CATEGORIES, ROADMAP_LINKS, type RoadmapLink } from "@flow-hq/shared";

function RoadmapCard({ roadmap }: { roadmap: RoadmapLink }) {
  return (
    <Link href={roadmap.href}>
      <Card className="h-full p-5 transition-shadow hover:shadow-flow-md">
        <CardHeader className="p-0">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {roadmap.category}
            </span>
            <span className="text-xs text-muted-foreground">{roadmap.level}</span>
          </div>
          <CardTitle className="text-base">{roadmap.label}</CardTitle>
          <CardDescription className="leading-relaxed">{roadmap.description}</CardDescription>
        </CardHeader>

        {roadmap.progress !== undefined && (
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${roadmap.progress}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{roadmap.progress}%</span>
          </div>
        )}
      </Card>
    </Link>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function RoadmapsPage() {
  const featured = ROADMAP_LINKS.filter((r) => r.featured);
  const popular = ROADMAP_LINKS.filter((r) => r.popular);
  const mine = ROADMAP_LINKS.filter((r) => r.progress !== undefined);

  return (
    <AppShell
      title="Find your path."
      description="Structured routes from where you are to where you're going. Every milestone can become a project."
    >
      <Section title="Categories">
        <div className="flex flex-wrap gap-2">
          {ROADMAP_CATEGORIES.map((category) => {
            const count = ROADMAP_LINKS.filter((r) => r.category === category).length;
            return (
              <span
                key={category}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground"
              >
                {category}
                <span className="text-xs text-muted-foreground">{count > 0 ? count : "Soon"}</span>
              </span>
            );
          })}
        </div>
      </Section>

      <Section title="Featured roadmaps">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <RoadmapCard key={r.href} roadmap={r} />
          ))}
        </div>
      </Section>

      <Section title="Popular roadmaps">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((r) => (
            <RoadmapCard key={r.href} roadmap={r} />
          ))}
        </div>
      </Section>

      <Section title="My roadmaps">
        {mine.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mine.map((r) => (
              <RoadmapCard key={r.href} roadmap={r} />
            ))}
          </div>
        ) : (
          <Card className="border-dashed p-6">
            <CardHeader className="p-0">
              <CardTitle className="text-base text-muted-foreground">
                No roadmaps started yet
              </CardTitle>
              <CardDescription>
                Start one and it&rsquo;ll show up here with your progress.
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </Section>

      <div className="flex flex-wrap gap-3 border-t border-border pt-6">
        <Button asChild>
          <Link href="/roadmaps/business-101">Start a roadmap</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/explore">Browse everything</Link>
        </Button>
      </div>
    </AppShell>
  );
}
