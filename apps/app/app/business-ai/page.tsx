import Link from "next/link";
import { BarChart3, Building2, Lightbulb, Megaphone, Settings2, Swords } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/** Analysis types, per docs/Cluade/07-business-ai-module.md. */
const analyses = [
  {
    icon: Lightbulb,
    title: "Business idea",
    description: "Pressure-test an idea before you commit to building it."
  },
  {
    icon: Building2,
    title: "Existing business",
    description: "Diagnose what's holding a running business back."
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Positioning, messaging, and channel performance."
  },
  {
    icon: Settings2,
    title: "Operations",
    description: "Workflows, bottlenecks, and what to automate."
  },
  {
    icon: Swords,
    title: "Competition",
    description: "Where you sit in the field and where you blend in."
  }
];

/** Placeholder until reports come from @flow-hq/database. */
const recentReports = [
  { title: "Positioning analysis", meta: "4 findings · 2 days ago" },
  { title: "Q1 operations review", meta: "6 findings · last week" }
];

const recommendations = [
  {
    title: "Fix positioning",
    detail: "You read as one of four near-identical brands.",
    href: "/projects/new"
  },
  {
    title: "Add an upsell path",
    detail: "First-order customers never see a second offer.",
    href: "/projects/new"
  },
  {
    title: "Diversify acquisition",
    detail: "84% of new customers come from one paid source.",
    href: "/roadmaps"
  }
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function BusinessAIPage() {
  return (
    <AppShell
      title="Your AI business advisor."
      description="Analyze an idea or a running business. Get findings, recommendations, and an action plan you can turn straight into a project."
    >
      <Section title="Choose analysis">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {analyses.map((analysis) => (
            <Card key={analysis.title} className="p-5 transition-shadow hover:shadow-flow-md">
              <CardHeader className="p-0">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                  <analysis.icon className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base">{analysis.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {analysis.description}
                </CardDescription>
              </CardHeader>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/business-ai">Start analysis</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="AI recommendations">
        <div className="space-y-3">
          {recommendations.map((rec) => (
            <Card key={rec.title} className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <CardTitle className="text-base">{rec.title}</CardTitle>
                    <CardDescription className="mt-0.5">{rec.detail}</CardDescription>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={rec.href}>Create project</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Recent reports">
        <div className="grid gap-4 sm:grid-cols-2">
          {recentReports.map((report) => (
            <Card key={report.title} className="p-5">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{report.title}</CardTitle>
                <CardDescription>{report.meta}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
