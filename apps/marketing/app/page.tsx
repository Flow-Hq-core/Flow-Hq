import HeroCarousel from "@/components/hero/HeroCarousel";
import AudienceMarquee from "@/components/AudienceMarquee";
import ProblemSection from "@/components/ProblemSection";
import HowFlowWorks from "@/components/HowFlowWorks";
import ProductsOverview from "@/components/ProductsOverview";
import WhyFlow from "@/components/WhyFlow";
import UseCases from "@/components/UseCases";
import WhoItsFor from "@/components/WhoItsFor";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import MarketingShell from "@/components/MarketingShell";

export default function HomePage() {
  return (
    <MarketingShell>
      <HeroCarousel />
      <AudienceMarquee />
      <ProblemSection />
      <HowFlowWorks />
      <ProductsOverview />
      <WhyFlow />
      <UseCases />
      <WhoItsFor />
      <PricingSection />
      <FinalCTA />
    </MarketingShell>
  );
}
