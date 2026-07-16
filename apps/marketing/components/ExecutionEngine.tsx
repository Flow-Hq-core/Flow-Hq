import { FileText, GitBranch, Target, TrendingUp, Brain } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "SOP Generator",
    description: "Auto-generate standard operating procedures for every business function.",
  },
  {
    icon: GitBranch,
    title: "Workflow Builder",
    description: "Map processes from trigger to outcome with clear ownership and dependencies.",
  },
  {
    icon: Target,
    title: "Funnel Architecture",
    description: "Design acquisition-to-retention funnels tailored to your business model.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Forecasting",
    description: "Model revenue scenarios based on your pricing, traffic, and conversion data.",
  },
  {
    icon: Brain,
    title: "Psychological Optimization",
    description: "Apply behavioral science to your copy, offers, and user experience.",
  },
];

const ExecutionEngine = () => {
  return (
    <section className="py-24 gradient-blue-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Execution Engine</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Every node is actionable
          </h2>
          <p className="text-muted-foreground">
            Each roadmap layer includes tools to move from understanding to execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background p-6 hover:shadow-flow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionEngine;
