import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import RoadmapSection from "@/components/RoadmapSection";
import ExecutionEngine from "@/components/ExecutionEngine";
import IntelligenceLayer from "@/components/IntelligenceLayer";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import MarketingShell from "@/components/MarketingShell";

export default function HomePage() {
  return (
    <MarketingShell>
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <RoadmapSection />
      <ExecutionEngine />
      <IntelligenceLayer />
      <PricingSection />
      <FinalCTA />
    </MarketingShell>
  );
}
