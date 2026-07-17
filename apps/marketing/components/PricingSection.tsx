import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Explore the system",
    features: [
      "Browse every roadmap",
      "One active project",
      "Limited AI analysis",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For individuals going deep",
    features: [
      "Unlimited roadmaps & projects",
      "Full Business AI analysis",
      "Curated learning playlists",
      "Progress tracking across modules",
      "Export to PDF & Notion",
    ],
    cta: "Start Pro",
    featured: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "/month",
    description: "For teams scaling up",
    features: [
      "Everything in Pro",
      "Team access & collaboration",
      "Shared workspace roadmaps",
      "Industry-specific templates",
      "Priority support",
    ],
    cta: "Start Business",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 gradient-blue-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground">
            Start free. Scale when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.featured
                  ? "border-primary shadow-flow-blue bg-background relative"
                  : "border-border bg-background hover:shadow-flow-md"
              } transition-shadow`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-blue text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "default" : "outline"}
                className={`w-full ${plan.featured ? "shadow-flow-blue" : ""}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
