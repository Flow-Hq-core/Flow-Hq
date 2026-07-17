import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import MarketingShell from "@/components/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { APP_URL, FLOW_SOLUTIONS } from "@flow-hq/shared";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FLOW_SOLUTIONS.map((s) => ({ slug: s.slug }));
}

function getSolution(slug: string) {
  return FLOW_SOLUTIONS.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: `${solution.title} — Flow-HQ`,
    description: solution.description
  };
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <MarketingShell>
      <PageHero
        eyebrow={solution.title}
        headline={solution.headline}
        description={solution.description}
        primary={{ label: "Get Started", href: `${APP_URL}/explore` }}
        secondary={{ label: "All solutions", href: "/solutions" }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ul className="space-y-4">
            {solution.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-lg leading-relaxed text-foreground">{highlight}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-border bg-muted/40 p-6">
            <p className="text-sm text-muted-foreground">
              Most {solution.title.replace("For ", "")} start on the{" "}
              <span className="font-semibold text-foreground">{solution.plan}</span> plan.{" "}
              <Link href="/pricing" className="font-semibold text-primary hover:underline">
                Compare plans
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </MarketingShell>
  );
}
