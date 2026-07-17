import { Map, FolderKanban, Brain, GraduationCap, ArrowRight } from "lucide-react";
import ProductFrame from "./ProductFrame";

/**
 * The overview slide's thesis: four products, one loop. Laid out 2x2 so the
 * connection reads as a cycle rather than a dead-ending line.
 *
 * Sized to fill the hero backdrop and crop.
 */
const nodes = [
  {
    icon: Map,
    label: "Roadmaps",
    caption: "Find the path",
    detail: "Business Operating · 62%"
  },
  {
    icon: FolderKanban,
    label: "Projects",
    caption: "Execute it",
    detail: "Marketing Campaign Q2 · 42%"
  },
  {
    icon: GraduationCap,
    label: "Playlists",
    caption: "Learn it",
    detail: "Positioning Mastery · 3 of 7"
  },
  {
    icon: Brain,
    label: "Business AI",
    caption: "Improve it",
    detail: "4 findings · 1 action plan"
  }
];

const handoffs = [
  "Roadmap step → new project",
  "Playlist finished → roadmap moves",
  "AI finding → project created"
];

const EcosystemVisual = () => {
  return (
    <ProductFrame label="Flow-HQ — One connected system">
      <div className="relative">
        {/* Connection cross behind the grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[3px] w-3/4 bg-border" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-3/4 w-[3px] bg-border" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
        </div>

        <div className="relative grid grid-cols-2 gap-5">
          {nodes.map((n) => (
            <div
              key={n.label}
              className="rounded-xl border border-border bg-background p-5 shadow-flow-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                <n.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-[16px] font-semibold leading-tight text-foreground">{n.label}</p>
              <p className="mt-0.5 text-[13px] text-muted-foreground">{n.caption}</p>
              <p className="mt-3 border-t border-border pt-2.5 text-[12px] text-muted-foreground">
                {n.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-2 border-t border-border pt-5">
        {handoffs.map((h) => (
          <div key={h} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
            {h}
          </div>
        ))}
      </div>
    </ProductFrame>
  );
};

export default EcosystemVisual;
