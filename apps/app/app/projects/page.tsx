import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PROJECT_TABS } from "@flow-hq/shared";

export default function ProjectsPage() {
  return (
    <AppShell
      title="Projects"
      description="Turn ideas and roadmap steps into execution. Manage active work, templates, and archived projects."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {PROJECT_TABS.map((tab) => (
            <Button key={tab.id} variant={tab.id === "active" ? "default" : "outline"} size="sm">
              {tab.label}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/projects/discover">Discover Flow Project</Link>
          </Button>
          <Button asChild>
            <Link href="/projects/new">New Project</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/projects/sample-project">
          <Card className="p-6 transition-shadow hover:shadow-flow-md">
            <CardHeader className="p-0">
              <CardTitle className="text-lg">Marketing Campaign Q2</CardTitle>
              <CardDescription>From Business Operating roadmap · 42% complete</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Card className="border-dashed p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-lg text-muted-foreground">No archived projects yet</CardTitle>
            <CardDescription>Completed and archived work will appear here.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </AppShell>
  );
}
