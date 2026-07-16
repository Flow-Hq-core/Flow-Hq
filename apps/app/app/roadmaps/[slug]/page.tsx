import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import roadmaps from "@/data/roadmapData";
import { AppShell } from "@/components/app-shell";

function BranchCard({ branch }: { branch: (typeof roadmaps)[keyof typeof roadmaps]["branches"][number] }) {
  return (
    <div className={`min-w-[200px] rounded-2xl border ${branch.color} p-5`}>
      <h3 className="mb-3 text-sm font-bold text-foreground">{branch.label}</h3>
      <div className="space-y-1.5">
        {branch.nodes.map((node, i) => (
          <div key={i} className="rounded-lg border border-border/50 bg-background/60 px-3 py-1.5 text-sm text-foreground/80">
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function RoadmapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = roadmaps[slug];

  if (!data) {
    return (
      <AppShell title="Roadmap not found">
        <p className="text-muted-foreground">This roadmap does not exist.</p>
        <Link href="/roadmaps" className="mt-4 inline-flex text-primary underline">
          Back to Roadmaps
        </Link>
      </AppShell>
    );
  }

  const leftBranches = data.branches.filter((b) => b.side === "left");
  const rightBranches = data.branches.filter((b) => b.side === "right");
  const maxLen = Math.max(leftBranches.length, rightBranches.length);

  return (
    <AppShell>
      <div className="mb-12">
        <Link href="/roadmaps" className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          All Roadmaps
        </Link>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{data.title}</h1>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-border md:block" />
        <div className="mb-12 flex justify-center">
          <div className="relative z-10 rounded-2xl bg-primary px-8 py-3 text-lg font-bold text-primary-foreground shadow-flow-md">
            {data.title}
          </div>
        </div>

        <div className="space-y-8">
          {Array.from({ length: maxLen }).map((_, i) => (
            <div key={i} className="grid items-start gap-4 md:grid-cols-[1fr_40px_1fr]">
              <div className="flex justify-end">{leftBranches[i] && <BranchCard branch={leftBranches[i]} />}</div>
              <div className="hidden items-center justify-center pt-6 md:flex">
                <div className="h-3 w-3 rounded-full border-2 border-background bg-primary shadow-sm" />
              </div>
              <div className="flex justify-start">{rightBranches[i] && <BranchCard branch={rightBranches[i]} />}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
