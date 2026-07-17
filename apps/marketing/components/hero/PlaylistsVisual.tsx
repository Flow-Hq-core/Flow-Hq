import { Check, Play } from "lucide-react";
import ProductFrame from "./ProductFrame";

/**
 * Playlists is a placeholder in the app today. This shows the connection
 * docs/Cluade/08-playlists-module.md calls out: finishing lessons feeds
 * roadmap progress.
 *
 * Sized to fill the hero backdrop and crop.
 */
const lessons = [
  { title: "Positioning fundamentals", state: "done", meta: "12 min" },
  { title: "Writing a category story", state: "done", meta: "9 min" },
  { title: "Finding your wedge", state: "done", meta: "14 min" },
  { title: "Messaging frameworks", state: "active", meta: "15 min" },
  { title: "Testing your positioning", state: "todo", meta: "11 min" },
  { title: "Positioning against incumbents", state: "todo", meta: "17 min" },
  { title: "Rolling it out internally", state: "todo", meta: "8 min" }
];

const PlaylistsVisual = () => {
  return (
    <ProductFrame label="Flow Playlists — Positioning Mastery">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-36 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[43%] rounded-full bg-primary" />
          </div>
          <span className="text-[13px] font-medium text-muted-foreground">3 of 7 lessons</span>
        </div>
        <span className="whitespace-nowrap rounded-full bg-accent px-3 py-1 text-[12px] font-semibold text-primary">
          Updates roadmap progress
        </span>
      </div>

      <div className="space-y-2.5">
        {lessons.map((l) => (
          <div
            key={l.title}
            className={
              l.state === "active"
                ? "flex items-center gap-3.5 rounded-lg border border-primary/30 bg-accent p-4"
                : "flex items-center gap-3.5 rounded-lg border border-border bg-background p-4"
            }
          >
            <span
              className={
                l.state === "done"
                  ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary"
                  : l.state === "active"
                    ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background"
                    : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background"
              }
            >
              {l.state === "done" ? (
                <Check className="h-4 w-4 text-primary-foreground" />
              ) : l.state === "active" ? (
                <Play className="h-3 w-3 fill-primary text-primary" />
              ) : null}
            </span>
            <p
              className={
                l.state === "done"
                  ? "flex-1 text-[15px] font-medium leading-tight text-muted-foreground line-through"
                  : "flex-1 text-[15px] font-medium leading-tight text-foreground"
              }
            >
              {l.title}
            </p>
            <span className="text-[12px] text-muted-foreground">{l.meta}</span>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
};

export default PlaylistsVisual;
