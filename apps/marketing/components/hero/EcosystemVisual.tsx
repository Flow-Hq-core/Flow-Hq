import { Map, FolderKanban, Brain, GraduationCap } from "lucide-react";
import ProductFrame from "./ProductFrame";

/**
 * The overview slide's thesis: four products, one loop. Laid out 2x2 so the
 * connection reads as a cycle rather than a dead-ending line.
 */
const nodes = [
  { icon: Map, label: "Roadmaps", caption: "Find the path" },
  { icon: FolderKanban, label: "Projects", caption: "Execute it" },
  { icon: GraduationCap, label: "Playlists", caption: "Learn it" },
  { icon: Brain, label: "Business AI", caption: "Improve it" }
];

const EcosystemVisual = () => {
  return (
    <ProductFrame label="Flow-HQ — One connected system">
      <div className="relative">
        {/* Connection cross behind the grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[2px] w-2/3 bg-border" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-2/3 w-[2px] bg-border" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-primary" />
        </div>

        <div className="relative grid grid-cols-2 gap-3">
          {nodes.map((n) => (
            <div
              key={n.label}
              className="rounded-lg border border-border bg-background p-3 shadow-flow-sm"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <n.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-[12px] font-semibold leading-tight text-foreground">{n.label}</p>
              <p className="text-[10px] text-muted-foreground">{n.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Progress in one moves the others.
      </p>
    </ProductFrame>
  );
};

export default EcosystemVisual;
