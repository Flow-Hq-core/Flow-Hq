import Link from "next/link";
import { Bell, Download, Share2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { FlowRoadmapMap } from "@/components/roadmap/FlowRoadmapMap";
import { Button } from "@/components/ui/button";

export default function BusinessOperatingFlowPage() {
  return (
    <AppShell>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/roadmaps" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <span className="text-lg leading-none">←</span>
          <span>All Roadmaps</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Weekly Newsletter</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="outline" size="icon" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Flow execution view</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Business Operating Roadmap</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Read top to bottom: topics connect in sequence down a single spine, with each category marking a new stage of the journey. Subtopics branch off to the side as the details that belong to each topic.
        </p>
      </div>

      <FlowRoadmapMap />
    </AppShell>
  );
}
