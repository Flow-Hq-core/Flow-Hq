import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, BarChart3, Users, RefreshCw } from "lucide-react";

const diagnostics = [
  { icon: BarChart3, label: "Monetization leaks", color: "text-primary" },
  { icon: AlertCircle, label: "Weak positioning", color: "text-primary" },
  { icon: Users, label: "Conversion gaps", color: "text-primary" },
  { icon: RefreshCw, label: "Retention problems", color: "text-primary" },
];

const IntelligenceLayer = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Intelligence Layer</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Know what to fix next.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Flow scans your business and highlights the areas holding you back — so
              you stop guessing and start making strategic moves.
            </p>
            <Button size="lg" className="shadow-flow-blue">
              Run a Diagnostic
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {diagnostics.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border border-border p-5 gradient-card hover:shadow-flow-md transition-shadow"
              >
                <d.icon className={`w-6 h-6 ${d.color} mb-3`} />
                <p className="text-sm font-semibold text-foreground">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceLayer;
