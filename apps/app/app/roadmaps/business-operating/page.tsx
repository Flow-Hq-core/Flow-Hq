import Link from "next/link";
import { Bell, Check, Download, Share2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { BusinessRoadmapMap } from "@/components/roadmap/BusinessRoadmapMap";
import { Button } from "@/components/ui/button";

export default function BusinessOperatingPage() {
  return (
    <AppShell>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link href="/roadmaps" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <span className="text-lg leading-none">←</span>
          <span>All Roadmaps</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Weekly Newsletter</span>
          </Button>
          <Button size="sm" className="gap-1 bg-yellow-400 text-black hover:bg-yellow-500">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="outline" size="icon" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-5">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Business Operating Roadmap</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          A visual knowledge map of the complete business operating system — major sections flow along a central spine, each branching into the topics and sub-topics you build out.
        </p>
      </div>

      <div className="mb-6 inline-flex flex-wrap items-center gap-4 rounded-lg border-2 border-flow-gray-900 bg-card px-4 py-2.5 text-xs text-flow-gray-700">
        <span className="flex items-center gap-1.5">
          <span className="h-4 w-8 rounded-md border-2 border-flow-gray-900 bg-primary" />
          Main section
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-4 w-8 rounded-md border-2 border-flow-gray-900 bg-flow-100" />
          Topic
        </span>
        <span className="flex items-center gap-1.5">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-primary">
            <Check className="h-2 w-2 text-white" strokeWidth={4} />
          </span>
          Done
        </span>
      </div>

      <BusinessRoadmapMap />
    </AppShell>
  );
}
