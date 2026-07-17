import Link from "next/link";
import { Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/** Placeholder until projects come from @flow-hq/database. */
const activeProjects = [
  {
    id: "marketing-campaign-q2",
    title: "Marketing Campaign Q2",
    source: "From Business Operating roadmap",
    progress: 42
  },
  {
    id: "pricing-revamp",
    title: "Pricing revamp",
    source: "From Business AI finding",
    progress: 18
  }
];

const templates = [
  { title: "Product launch", description: "Spec to launch checklist." },
  { title: "Market research", description: "ICP, competitors, demand signals." },
  { title: "Hiring plan", description: "Roles, sequence, and onboarding." }
];

const recentProjects = [
  { title: "Competitor teardown", meta: "Completed · 2 days ago" },
  { title: "Positioning draft", meta: "Completed · last week" }
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <AppShell
      title="Turn ideas into execution."
      description="Take any step of a roadmap and make it real work — tasks, timeline, and risks, generated rather than hand-built."
    >
      <div className="mb-8">
        <Button asChild>
          <Link href="/projects/new">Create Project</Link>
        </Button>
      </div>

      <Section title="Active projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {activeProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="h-full p-6 transition-shadow hover:shadow-flow-md">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.source}</CardDescription>
                </CardHeader>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{project.progress}%</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="AI project generator">
        <Card className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                <Sparkles className="h-5 w-5 text-primary" />
              </span>
              <div>
                <CardTitle className="text-base">Describe it, get a plan</CardTitle>
                <CardDescription className="mt-1">
                  Goals, requirements, tasks, and a timeline — drafted before you start.
                </CardDescription>
              </div>
            </div>
            <Button asChild>
              <Link href="/projects/new">Generate project</Link>
            </Button>
          </div>
        </Card>
      </Section>

      <Section title="Templates">
        <div className="grid gap-4 sm:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.title} className="p-5 transition-shadow hover:shadow-flow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Recent projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {recentProjects.map((project) => (
            <Card key={project.title} className="p-5">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription>{project.meta}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
