import ProductFrame from "./ProductFrame";

/**
 * Projects has no built UI yet — this is the execution workspace described in
 * docs/Cluade/06-projects-module.md (tasks, timeline), rendered as a target.
 */
const columns = [
  {
    name: "To do",
    tasks: [{ title: "Define ICP", tag: "Foundation" }, { title: "Draft pricing", tag: "Offer" }]
  },
  {
    name: "In progress",
    tasks: [{ title: "Landing page copy", tag: "Growth" }]
  },
  {
    name: "Done",
    tasks: [{ title: "Competitor scan", tag: "Market" }]
  }
];

const ProjectsVisual = () => {
  return (
    <ProductFrame label="Flow Projects — Marketing Campaign Q2">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-28 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[42%] rounded-full bg-primary" />
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">42%</span>
        </div>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-primary">
          From roadmap
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {columns.map((col) => (
          <div key={col.name} className="rounded-lg bg-muted/50 p-2">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {col.name}
            </p>
            <div className="space-y-2">
              {col.tasks.map((t) => (
                <div
                  key={t.title}
                  className="rounded-md border border-border bg-background p-2 shadow-flow-sm"
                >
                  <p className="text-[11px] font-medium leading-tight text-foreground">{t.title}</p>
                  <p className="mt-1 text-[9px] text-muted-foreground">{t.tag}</p>
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
