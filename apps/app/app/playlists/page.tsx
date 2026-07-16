import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModuleScaffold } from "@/components/module-scaffold";

export default function PlaylistsPage() {
  return (
    <AppShell title="Playlists" description="Curated learning paths tied to your roadmaps and projects.">
      <div className="mb-6">
        <Button asChild>
          <Link href="/playlists/getting-started">Generate learning path</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/playlists/getting-started">
          <Card className="p-6 transition-shadow hover:shadow-flow-md">
            <CardHeader className="p-0">
              <CardTitle className="text-lg">Getting Started with Flow</CardTitle>
              <CardDescription>Foundation skills · 12 lessons · 35% complete</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <ModuleScaffold
          title="More playlists coming soon"
          description="Learning paths will connect playlist completion to roadmap skill progress."
          primaryAction={{ label: "Browse roadmaps", href: "/roadmaps" }}
        />
      </div>
    </AppShell>
  );
}
