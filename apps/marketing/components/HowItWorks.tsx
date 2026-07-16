import { MessageSquareText, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    step: "01",
    title: "Describe your business",
    description: "Tell Flow what you're building, your stage, and your goals. A few inputs unlock a full strategic output.",
  },
  {
    icon: Map,
    step: "02",
    title: "Flow generates a structured roadmap",
    description: "Your business is mapped across 11 strategic layers — from foundation to innovation — with actionable nodes at every level.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute with systems and AI diagnostics",
    description: "Each node includes SOPs, workflows, templates, and AI-powered diagnostics so you know exactly what to build and fix.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-blue-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            From idea to execution in three steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-blue flex items-center justify-center shadow-flow-blue">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Step {s.step}</p>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
