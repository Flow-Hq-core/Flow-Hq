import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DASHBOARD_QUICK_LINKS } from "@flow-hq/shared";

const dashboardSections = [
  {
    title: "Current goals",
    description: "Your active objectives across roadmaps and projects.",
    href: "/roadmaps"
  },
  {
    title: "Active projects",
    description: "Continue execution on in-progress work.",
    href: "/projects"
  },
  {
    title: "Roadmap progress",
    description: "Track milestones from beginner to advanced.",
    href: "/roadmaps/business-101"
  },
  {
    title: "AI recommendations",
    description: "Suggested next steps from Business AI.",
    href: "/business-ai"
  },
  {
    title: "Recent activity",
    description: "Recently viewed modules and updates.",
    href: "/explore?filter=recent"
  },
  {
    title: "Learning progress",
    description: "Playlists and skills in progress.",
    href: "/playlists"
  }
] as const;

export default function DashboardPage() {
  return (
    <AppShell
      title="Dashboard"
      description="Your command center — continue roadmaps, projects, AI guidance, and learning in one place."
    >
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardSections.map((section) => (
          <Link key={section.title} href={section.href}>
            <Card className="h-full p-5 transition-shadow hover:shadow-flow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-border pt-6">
        <Button asChild>
          <Link href="/roadmaps">Continue roadmap</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">Open project</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/business-ai">Ask AI</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/playlists">Continue playlist</Link>
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold">Quick links</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {DASHBOARD_QUICK_LINKS.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="p-5 transition-shadow hover:shadow-flow-md">
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{item.label}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
