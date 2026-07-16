import { Layers, Puzzle, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Puzzle,
    title: "Knowledge is fragmented",
    description: "YouTube, courses, and podcasts give pieces — but never the full picture. You're assembling a puzzle without the box.",
  },
  {
    icon: AlertTriangle,
    title: "Tactics without structure fail",
    description: "Running ads without positioning. Building funnels without offers. Executing without a system leads to wasted effort.",
  },
  {
    icon: Layers,
    title: "Businesses collapse at missing layers",
    description: "A gap in operations, retention, or finance can quietly erode what you've built. Most founders don't see it until it's too late.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Most founders execute tactics.{" "}
            <span className="text-primary">Few build systems.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((p, i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-6 gradient-card hover:shadow-flow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-foreground">
            Flow fixes this by{" "}
            <span className="text-primary font-semibold">enforcing completeness</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
