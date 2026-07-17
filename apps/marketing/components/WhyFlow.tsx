import { Sparkles, Route, Workflow, GraduationCap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-powered planning",
    description: "Describe a goal in a sentence and get a structured plan you can actually start."
  },
  {
    icon: Route,
    title: "Structured growth paths",
    description: "Sequenced roadmaps that show the order things go in — and what you can skip."
  },
  {
    icon: Workflow,
    title: "Execution workflows",
    description: "Plans become projects with tasks, timelines, and owners. Nothing stays theoretical."
  },
  {
    icon: GraduationCap,
    title: "Learning system",
    description: "Curated playlists tied to the gaps in your roadmap, not a generic catalog."
  },
  {
    icon: BarChart3,
    title: "Business intelligence",
    description: "AI analysis of what you're building, with reports and concrete next actions."
  }
];

const WhyFlow = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Flow
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Built to close the loop</h2>
          <p className="text-muted-foreground">
            Most tools cover one slice of the work. Flow covers the whole path and keeps the
            pieces talking to each other.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-flow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlow;
