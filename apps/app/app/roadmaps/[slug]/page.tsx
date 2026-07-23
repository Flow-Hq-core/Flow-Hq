import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { RoadmapTemplate } from "@/components/roadmap/RoadmapTemplate";
import { ROADMAPS, getRoadmap } from "@/data/roadmaps";

/**
 * The single roadmap detail route. It looks the roadmap's content up by slug and
 * hands it to RoadmapTemplate — the one page style shared by every roadmap.
 * Slugs without content yet fall through to the "coming soon" state.
 */
export function generateStaticParams() {
  return Object.keys(ROADMAPS).map((slug) => ({ slug }));
}

export default async function RoadmapDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getRoadmap(slug);

  if (!content) {
    return (
      <AppShell>
        <Link
          href="/roadmaps"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All Roadmaps
        </Link>
        <div className="py-16 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Coming soon</h1>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            This roadmap isn&apos;t mapped out yet. It&apos;ll appear here once its content is added.
          </p>
        </div>
      </AppShell>
    );
  }

  return <RoadmapTemplate {...content} />;
}
