import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingShell from "@/components/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import { FLOW_SOLUTIONS } from "@flow-hq/shared";

export const metadata: Metadata = {
  title: "Solutions — Flow-HQ",
  description:
    "Flow-HQ for founders, teams, learners, and consultants. One system, shaped to how you work."
};

export default function SolutionsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Solutions"
        headline="Shaped to how you work."
        description="The same connected system, whether you're building a company, running a team, learning a craft, or advising clients."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {FLOW_SOLUTIONS.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-flow-md"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-foreground">{solution.title}</h2>
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {solution.plan}
                  </span>
                </div>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {solution.tagline}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
