import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingShell from "@/components/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import { FLOW_PRODUCTS } from "@flow-hq/shared";

export const metadata: Metadata = {
  title: "Products — Flow-HQ",
  description:
    "Flow Roadmaps, Projects, Business AI, and Playlists. Four products that share your goals, your progress, and your context."
};

export default function ProductsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Products"
        headline="Four products, one ecosystem."
        description="Use one on its own or all four together. They share your goals, your progress, and your context — so work in one moves the others."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {FLOW_PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={product.marketingPath}
                className="group flex flex-col rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-flow-md"
              >
                <h2 className="mb-2 text-xl font-semibold text-foreground">{product.name}</h2>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {product.tagline}
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
