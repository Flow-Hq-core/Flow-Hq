import { Rocket, GraduationCap, Package, TrendingUp, FolderKanban } from "lucide-react";

/**
 * Deliberately spans career, skills, and business. Flow-HQ is for anyone
 * building a path, not founders only.
 */
const useCases = [
  {
    icon: Rocket,
    title: "Starting a business",
    example: "Validate the idea, map the first 90 days, and run it as a project."
  },
  {
    icon: GraduationCap,
    title: "Learning a skill",
    example: "Follow a Python playlist that updates your roadmap as you finish lessons."
  },
  {
    icon: Package,
    title: "Launching a product",
    example: "Go from spec to launch checklist without losing the thread."
  },
  {
    icon: TrendingUp,
    title: "Growing an existing company",
    example: "Find what's leaking with Business AI, then fix it as tracked work."
  },
  {
    icon: FolderKanban,
    title: "Managing projects",
    example: "Keep tasks, timeline, and risks in one place — generated, not hand-built."
  }
];

const UseCases = () => {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Use cases
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            A career path is a roadmap too
          </h2>
          <p className="text-muted-foreground">
            Flow doesn&rsquo;t care whether you&rsquo;re building a company or building
            yourself. Same system either way.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-flow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <u.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{u.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{u.example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
