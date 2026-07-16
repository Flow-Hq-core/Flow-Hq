import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function PlaylistDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const title = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <AppShell title={title} description="Watch resources, complete lessons, and update roadmap progress.">
      <div className="mb-6 flex flex-wrap gap-2">
        <Button size="sm">Continue playlist</Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="/roadmaps">Update roadmap progress</Link>
        </Button>
      </div>

      <Card className="p-6">
        <CardHeader className="p-0">
          <CardTitle>Lesson playlist</CardTitle>
          <CardDescription>Lesson list, progress tracking, and resource links will live here.</CardDescription>
        </CardHeader>
      </Card>
    </AppShell>
  );
}
