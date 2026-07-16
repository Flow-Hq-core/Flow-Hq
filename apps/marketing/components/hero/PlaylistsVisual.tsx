import { Check, Play } from "lucide-react";
import ProductFrame from "./ProductFrame";

/**
 * Playlists is a placeholder in the app today. This shows the connection
 * docs/Cluade/08-playlists-module.md calls out: finishing lessons feeds
 * roadmap progress.
 */
const lessons = [
  { title: "Positioning fundamentals", state: "done", meta: "12 min" },
  { title: "Writing a category story", state: "done", meta: "9 min" },
  { title: "Messaging frameworks", state: "active", meta: "15 min" },
  { title: "Testing your positioning", state: "todo", meta: "11 min" }
];

const PlaylistsVisual = () => {
  return (
    <ProductFrame label="Flow Playlists — Positioning Mastery">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-1/2 rounded-full bg-primary" />
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">2 of 4</span>
        </div>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-primary">
          Updates roadmap
        </span>
      </div>

      <div className="space-y-1.5">
        {lessons.map((l) => (
          <div
            key={l.title}
            className={
              l.state === "active"
                ? "flex items-center gap-2.5 rounded-md border border-primary/30 bg-accent p-2.5"
                : "flex items-center gap-2.5 rounded-md border border-border bg-background p-2.5"
            }
          >
            <span
              className={
                l.state === "done"
                  ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"
                  : l.state === "active"
                    ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary bg-background"
                    : "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background"
              }
            >
              {l.state === "done" ? (
                <Check className="h-3 w-3 text-primary-foreground" />
              ) : l.state === "active" ? (
                <Play className="h-2.5 w-2.5 fill-primary text-primary" />
              ) : null}
            </span>
            <p
              className={
                l.state === "done"
                  ? "flex-1 text-[11px] font-medium leading-tight text-muted-foreground line-through"
                  : "flex-1 text-[11px] font-medium leading-tight text-foreground"
              }
            >
              {l.title}
            </p>
            <span className="text-[9px] text-muted-foreground">{l.meta}</span>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
};

export default PlaylistsVisual;
