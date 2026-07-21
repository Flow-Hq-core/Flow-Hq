import type { ExploreRow } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

/**
 * Landscape cover for an Explore card. Flow has no thumbnails to show, so
 * instead of faking screenshots each product gets an abstract motif in its
 * own tint — the same move as the marketing hero visuals.
 *
 * `index` shifts which element is highlighted so a row of cards reads as a
 * set rather than four identical tiles.
 */

type ProductId = ExploreRow["id"];

const PALETTE: Record<ProductId, { gradient: string; stroke: string }> = {
  roadmaps: { gradient: "from-sky-400/25 to-blue-500/5", stroke: "text-sky-500/70" },
  "business-ai": { gradient: "from-violet-400/25 to-purple-500/5", stroke: "text-violet-500/70" },
  projects: { gradient: "from-amber-300/30 to-orange-400/5", stroke: "text-amber-500/70" },
  playlists: { gradient: "from-emerald-300/25 to-teal-500/5", stroke: "text-emerald-500/70" }
};

function Motif({ id, active }: { id: ProductId; active: number }) {
  // Five evenly-spaced slots across the 320-wide viewBox.
  const xs = [48, 116, 184, 252, 300];

  if (id === "roadmaps") {
    const nodes = [
      { x: 48, y: 118 },
      { x: 116, y: 74 },
      { x: 184, y: 104 },
      { x: 252, y: 62 },
      { x: 300, y: 96 }
    ];
    const on = active % nodes.length;
    return (
      <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <polyline
          points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="2 7"
          className="text-current"
        />
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === on ? 11 : 7}
            fill={i === on ? "currentColor" : "hsl(var(--background))"}
            stroke="currentColor"
            strokeWidth={2}
          />
        ))}
      </svg>
    );
  }

  if (id === "business-ai") {
    const heights = [40, 66, 52, 92, 74];
    const on = active % heights.length;
    return (
      <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {heights.map((h, i) => (
          <rect
            key={i}
            x={xs[i] - 14}
            y={150 - h}
            width={28}
            height={h}
            rx={6}
            fill={i === on ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            opacity={i === on ? 1 : 0.7}
          />
        ))}
      </svg>
    );
  }

  if (id === "projects") {
    // Three kanban columns, cards stacked; the active column is "worked".
    const cols = [56, 160, 264];
    const counts = [3, 2, 3];
    const on = active % cols.length;
    return (
      <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {cols.map((cx, c) => (
          <g key={c}>
            {Array.from({ length: counts[c] }).map((_, r) => (
              <rect
                key={r}
                x={cx - 34}
                y={40 + r * 34}
                width={68}
                height={24}
                rx={5}
                fill={c === on && r === 0 ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={2}
                opacity={c === on ? 1 : 0.65}
              />
            ))}
          </g>
        ))}
      </svg>
    );
  }

  // playlists — stacked lesson rows, each with a play glyph; one is "playing".
  const rows = [44, 82, 120];
  const on = active % rows.length;
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      {rows.map((y, i) => (
        <g key={i} opacity={i === on ? 1 : 0.65}>
          <circle
            cx={48}
            cy={y}
            r={13}
            fill={i === on ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
          />
          <path
            d={`M44 ${y - 6} L44 ${y + 6} L54 ${y} Z`}
            fill={i === on ? "hsl(var(--background))" : "currentColor"}
          />
          <line
            x1={76}
            y1={y}
            x2={i === on ? 288 : 224}
            y2={y}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}

export function ExploreCover({ id, index }: { id: ProductId; index: number }) {
  const palette = PALETTE[id];
  // Fills its parent — the card sets the aspect ratio and clips.
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", palette.gradient)}>
      <div className={cn("absolute inset-0 p-5", palette.stroke)}>
        <Motif id={id} active={index} />
      </div>
    </div>
  );
}
