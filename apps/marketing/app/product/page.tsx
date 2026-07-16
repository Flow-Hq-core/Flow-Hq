import MarketingShell from "@/components/MarketingShell";
import HowItWorks from "@/components/HowItWorks";
import ExecutionEngine from "@/components/ExecutionEngine";

export default function ProductPage() {
  return (
    <MarketingShell>
      <section className="pt-32 pb-12 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Product</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            A complete business operating system
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flow-HQ combines strategic roadmaps, execution tools, and AI diagnostics into one
            platform built for founders who want structure—not scattered tactics.
          </p>
        </div>
      </section>
      <HowItWorks />
      <ExecutionEngine />
    </MarketingShell>
  );
}
