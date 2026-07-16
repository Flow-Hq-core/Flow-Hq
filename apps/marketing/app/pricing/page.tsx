import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import MarketingShell from "@/components/MarketingShell";

export default function PricingPage() {
  return (
    <MarketingShell>
      <div className="pt-24">
        <PricingSection />
        <FinalCTA />
      </div>
    </MarketingShell>
  );
}
