import ProductFrame from "./ProductFrame";

/**
 * Projects has no built UI yet — this is the execution workspace described in
 * docs/Cluade/06-projects-module.md (tasks, timeline), rendered as a target.
 *
 * Sized to fill the hero backdrop and crop.
 */
const columns = [
  {
    name: "To do",
    tasks: [
      { title: "Define ICP", tag: "Foundation" },
      { title: "Draft pricing tiers", tag: "Offer" },
      { title: "Map onboarding", tag: "Retention" },
      { title: "Set Q2 OKRs", tag: "Strategy" }
    ]
  },
  {
    name: "In progress",
    tasks: [
      { title: "Landing page copy", tag: "Growth" },
      { title: "Competitor teardown", tag: "Market" },
      { title: "Email sequence", tag: "Sales" }
    ]
  },
  {
    name: "Done",
    tasks: [
      { title: "Competitor scan", tag: "Market" },
      { title: "Positioning draft", tag: "Strategy" }
    ]
  }
];

const ProjectsVisual = () => {
  return (
    <ProductFrame label="Flow Projects — Marketing Campaign Q2">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[42%] rounded-full bg-primary" />
          </div>
          <span className="text-[13px] font-medium text-muted-foreground">42% complete</span>
        </div>
        <span className="whitespace-nowrap rounded-full bg-accent px-3 py-1 text-[12px] font-semibold text-primary">
          From Business Operating roadmap
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {columns.map((col) => (
          <div key={col.name} className="rounded-xl bg-muted/50 p-3">
            <p className="mb-3 px-1 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              {col.name}
            </p>
            <div className="space-y-2.5">
              {col.tasks.map((t) => (
                <div
                  key={t.title}
                  className="rounded-lg border border-border bg-background p-3 shadow-flow-sm"
                >
                  <p className="text-[14px] font-medium leading-tight text-foreground">{t.title}</p>
                  <p className="mt-1.5 text-[12px] text-muted-foreground">{t.tag}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
};

export default ProjectsVisual;
