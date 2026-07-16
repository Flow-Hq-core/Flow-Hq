import MarketingShell from "@/components/MarketingShell";

const resources = [
  {
    title: "Getting started with Flow-HQ",
    description: "Learn how to generate your first roadmap and navigate the 11 strategic layers.",
  },
  {
    title: "Building SOPs and workflows",
    description: "Turn roadmap nodes into repeatable processes your team can execute.",
  },
  {
    title: "Running AI diagnostics",
    description: "Identify monetization leaks, positioning gaps, and retention problems early.",
  },
  {
    title: "Scaling operations",
    description: "Systematize growth, finance, and operations as your business matures.",
  },
];

export default function ResourcesPage() {
  return (
    <MarketingShell>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Guides and playbooks</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Practical resources to help you move from roadmap to execution.
          </p>
          <div className="grid gap-4">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-xl border border-border bg-background p-6 hover:shadow-flow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
