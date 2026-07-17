import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingShell from "@/components/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import RoadmapSection from "@/components/RoadmapSection";
import ExecutionEngine from "@/components/ExecutionEngine";
import IntelligenceLayer from "@/components/IntelligenceLayer";
import FinalCTA from "@/components/FinalCTA";
import { APP_URL, FLOW_PRODUCTS } from "@flow-hq/shared";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FLOW_PRODUCTS.map((p) => ({ slug: p.id }));
}

function getProduct(slug: string) {
  return FLOW_PRODUCTS.find((p) => p.id === slug);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Flow-HQ`,
    description: product.description
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <MarketingShell>
      <PageHero
        eyebrow={product.name}
        headline={product.headline}
        description={product.description}
        primary={{ label: product.cta, href: `${APP_URL}${product.appPath}` }}
        secondary={{ label: "All products", href: "/products" }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {product.features.map((feature) => (
              <div key={feature.title}>
                <h2 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep content, relocated here from the homepage where it was
          crowding out the other three products. */}
      {product.id === "roadmaps" && (
        <>
          <RoadmapSection />
          <ExecutionEngine />
        </>
      )}
      {product.id === "business-ai" && <IntelligenceLayer />}

      <FinalCTA />
    </MarketingShell>
  );
}
