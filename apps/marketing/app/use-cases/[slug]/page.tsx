import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingShell from "@/components/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { APP_URL, FLOW_USE_CASES } from "@flow-hq/shared";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FLOW_USE_CASES.map((u) => ({ slug: u.slug }));
}

function getUseCase(slug: string) {
  return FLOW_USE_CASES.find((u) => u.slug === slug);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return {
    title: `${useCase.title} — Flow-HQ`,
    description: useCase.description
  };
}

export default async function UseCasePage({ params }: Params) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  return (
    <MarketingShell>
      <PageHero
        eyebrow={useCase.title}
        headline={useCase.headline}
        description={useCase.description}
        primary={{ label: "Get Started", href: `${APP_URL}/explore` }}
        secondary={{ label: "All use cases", href: "/use-cases" }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-2xl font-bold">How it fits together</h2>
          <p className="mb-10 text-muted-foreground">
            Each product hands off to the next. That handoff is the whole point.
          </p>

          <ol className="space-y-4">
            {useCase.path.map((step, i) => (
              <li
                key={step.product}
                className="flex gap-5 rounded-xl border border-border bg-background p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{step.product}</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{step.action}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </MarketingShell>
  );
}
