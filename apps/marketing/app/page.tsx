import HeroCarousel from "@/components/hero/HeroCarousel";
import ProblemSection from "@/components/ProblemSection";
import HowFlowWorks from "@/components/HowFlowWorks";
import ProductsOverview from "@/components/ProductsOverview";
import WhyFlow from "@/components/WhyFlow";
import UseCases from "@/components/UseCases";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import MarketingShell from "@/components/MarketingShell";

export default function HomePage() {
  return (
    <MarketingShell>
      <HeroCarousel />
      <ProblemSection />
      <HowFlowWorks />
      <ProductsOverview />
      <WhyFlow />
      <UseCases />
      <PricingSection />
      <FinalCTA />
    </MarketingShell>
  );
}
