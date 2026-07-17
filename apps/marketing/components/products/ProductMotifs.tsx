import { Check } from "lucide-react";

/**
 * Compact decorative motifs for the products bento — not the full product UI.
 *
 * The hero visuals are tuned for an 840px backdrop and would overflow a card,
 * so these are deliberately separate: a fragment that suggests the product and
 * crops off the card edge, rather than a screenshot to be read.
 */

export const RoadmapMotif = () => (
  <div className="w-[300px]">
    <div className="relative">
      <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-primary/70" />
      <div className="relative space-y-3">
        {[
          { side: "left", label: "Foundation" },
          { side: "right", label: "Market" },
          { side: "left", label: "Strategy" },
          { side: "right", label: "Growth" }
        ].map((n) => (
          <div key={n.label} className="flex items-center">
            <div className={n.side === "left" ? "flex flex-1 justify-end" : "flex-1"}>
              {n.side === "left" && (
                <div className="rounded-md border-2 border-flow-gray-900 bg-amber-300 px-3 py-1.5 text-[11px] font-semibold text-flow-gray-900">
                  {n.label}
                </div>
              )}
            </div>
            <span aria-hidden className="h-[2px] w-5 bg-primary/60" />
            <div className={n.side === "right" ? "flex flex-1" : "flex-1"}>
              {n.side === "right" && (
                <div className="rounded-md border-2 border-flow-gray-900 bg-[#f5e6c8] px-3 py-1.5 text-[11px] font-medium text-flow-gray-900">
                  {n.label}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ProjectsMotif = () => (
  <div className="w-[280px] space-y-2.5">
    {[
      { title: "Define ICP", tag: "Foundation", done: true },
      { title: "Draft pricing tiers", tag: "Offer", done: false },
      { title: "Landing page copy", tag: "Growth", done: false }
    ].map((t) => (
      <div
        key={t.title}
        className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 shadow-flow-sm"
      >
        <span
          className={
            t.done
              ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"
              : "h-5 w-5 shrink-0 rounded-full border-2 border-border"
          }
        >
          {t.done && <Check className="h-3 w-3 text-primary-foreground" />}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12px] font-medium text-foreground">{t.title}</p>
          <p className="text-[10px] text-muted-foreground">{t.tag}</p>
        </div>
      </div>
    ))}
    <div className="flex items-center gap-2 pt-1">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-[42%] rounded-full bg-primary" />
      </div>
      <span className="text-[10px] text-muted-foreground">42%</span>
    </div>
  </div>
);

export const BusinessAIMotif = () => (
  <div className="w-[280px] space-y-2.5">
    {[
      { severity: "Weak", label: "Positioning is undifferentiated", tone: "warn" },
      { severity: "Leak", label: "No upsell after checkout", tone: "warn" },
      { severity: "Strong", label: "Retention above median", tone: "ok" }
    ].map((f) => (
      <div
        key={f.label}
        className="rounded-lg border border-border bg-background p-3 shadow-flow-sm"
      >
        <div className="flex items-center gap-2">
          <span
            className={
              f.tone === "ok"
                ? "h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                : "h-1.5 w-1.5 shrink-0 rounded-full bg-destructive"
            }
          />
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            {f.severity}
          </p>
        </div>
        <p className="mt-1 text-[12px] font-medium leading-tight text-foreground">{f.label}</p>
      </div>
    ))}
  </div>
);

export const PlaylistsMotif = () => (
  <div className="w-[280px] space-y-2">
    {[
      { title: "Positioning fundamentals", done: true },
      { title: "Writing a category story", done: true },
      { title: "Messaging frameworks", done: false },
      { title: "Testing your positioning", done: false }
    ].map((l) => (
      <div
        key={l.title}
        className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 shadow-flow-sm"
      >
        <span
          className={
            l.done
              ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"
              : "h-5 w-5 shrink-0 rounded-full border-2 border-border"
          }
        >
          {l.done && <Check className="h-3 w-3 text-primary-foreground" />}
        </span>
        <p
          className={
            l.done
              ? "truncate text-[12px] font-medium text-muted-foreground line-through"
              : "truncate text-[12px] font-medium text-foreground"
          }
        >
          {l.title}
        </p>
      </div>
    ))}
  </div>
);
