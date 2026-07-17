import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingShell from "@/components/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import { FLOW_USE_CASES } from "@flow-hq/shared";

export const metadata: Metadata = {
  title: "Use Cases — Flow-HQ",
  description:
    "Starting a business, learning a skill, launching a product, growing a company, or managing projects — the same system either way."
};

export default function UseCasesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Use cases"
        headline="A career path is a roadmap too."
        description="Flow doesn't care whether you're building a company or building yourself. Same system either way — only the path changes."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {FLOW_USE_CASES.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-flow-md"
              >
                <h2 className="mb-2 text-xl font-semibold text-foreground">{useCase.title}</h2>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {useCase.tagline}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  See the path
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
