import { Compass, Map, FolderKanban, Brain, GraduationCap } from "lucide-react";

/**
 * Fullmap.md pairs each stage of the journey with the module that serves it.
 * The pairing is the point — it shows the products are one path, not a menu.
 */
const stages = [
  {
    stage: "Discover",
    module: "Explore",
    icon: Compass,
    description: "Start with the goal, not the tool. Explore is where you choose what to build."
  },
  {
    stage: "Plan",
    module: "Roadmaps",
    icon: Map,
    description: "Get a structured path from where you are to where you want to be."
  },
  {
    stage: "Build",
    module: "Projects",
    icon: FolderKanban,
    description: "Turn any step of that path into a real project with tasks and a timeline."
  },
  {
    stage: "Improve",
    module: "Business AI",
    icon: Brain,
    description: "Analyze what you've built, find what's weak, and get a plan to fix it."
  },
  {
    stage: "Grow",
    module: "Playlists",
    icon: GraduationCap,
    description: "Close the skill gaps the work exposed, then feed progress back to your roadmap."
  }
];

const HowFlowWorks = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How Flow works
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">One path, five moves</h2>
          <p className="text-muted-foreground">
            Each stage hands off to the next. Finish a playlist and your roadmap moves —
            that&rsquo;s the whole idea.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-5">
          {stages.map((s, i) => (
            <li key={s.stage} className="relative flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                {/* Rail between stages, desktop only */}
                {i < stages.length - 1 && (
                  <span aria-hidden className="hidden h-px flex-1 bg-border md:block" />
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{s.stage}</p>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">{s.module}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowFlowWorks;
