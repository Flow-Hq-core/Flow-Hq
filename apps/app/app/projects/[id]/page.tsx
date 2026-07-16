import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workspaceSections = [
  "Goals",
  "Requirements",
  "Timeline",
  "Tasks",
  "Documents",
  "Risks",
  "AI Assistant",
  "Reports"
] as const;

export default async function ProjectWorkspacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const title = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <AppShell
      title={title}
      description="Project workspace — overview, tasks, documents, and AI assistance."
      fullWidth
    >
      <div className="mb-6 flex flex-wrap gap-2">
        <Button size="sm">Execute Project</Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="/business-ai">Improve With AI</Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="/roadmaps">Related Roadmap</Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="/playlists">Learning Playlist</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {workspaceSections.map((section) => (
          <Card key={section} className="p-5">
            <CardHeader className="p-0">
              <CardTitle className="text-base">{section}</CardTitle>
              <CardDescription>Scaffold ready for {section.toLowerCase()} workspace data.</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
