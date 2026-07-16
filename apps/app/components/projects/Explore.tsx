"use client";

import { useMemo, useState } from "react";
import { Code2, Cpu, Briefcase, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";

type RoadmapItem = {
  title: string;
  progress: number;
  steps: number;
  tags: string[];
};

type Group = {
  label: string;
  icon: React.ElementType;
  items: RoadmapItem[];
};

const ALL_ITEMS: Group[] = [
  {
    label: "Software",
    icon: Code2,
    items: [
      { title: "SaaS Platform", progress: 72, steps: 8, tags: ["web", "backend"] },
      { title: "Mobile App", progress: 54, steps: 6, tags: ["ios", "android"] },
      { title: "AI Agent", progress: 88, steps: 9, tags: ["ai", "automation"] },
      { title: "CRM System", progress: 40, steps: 7, tags: ["business", "web"] },
      { title: "E-commerce API", progress: 65, steps: 10, tags: ["backend", "payments"] },
      { title: "Social Network", progress: 35, steps: 12, tags: ["web", "realtime"] },
      { title: "DevOps Pipeline", progress: 92, steps: 5, tags: ["infrastructure", "ci-cd"] },
      { title: "Chrome Extension", progress: 78, steps: 6, tags: ["browser", "javascript"] },
    ],
  },
  {
    label: "Electronics",
    icon: Cpu,
    items: [
      { title: "Smartwatch", progress: 60, steps: 10, tags: ["wearable", "bluetooth"] },
      { title: "Drone", progress: 35, steps: 12, tags: ["aerial", "robotics"] },
      { title: "IoT Device", progress: 78, steps: 8, tags: ["sensors", "wireless"] },
      { title: "LED Controller", progress: 92, steps: 6, tags: ["lighting", "embedded"] },
      { title: "Retro Console", progress: 45, steps: 9, tags: ["gaming", "fpga"] },
      { title: "Smart Thermostat", progress: 82, steps: 7, tags: ["home", "automation"] },
      { title: "Portable DAC", progress: 55, steps: 6, tags: ["audio", "hifi"] },
      { title: "Robot Arm", progress: 30, steps: 14, tags: ["robotics", "automation"] },
    ],
  },
  {
    label: "Business",
    icon: Briefcase,
    items: [
      { title: "Agency", progress: 50, steps: 7, tags: ["service", "marketing"] },
      { title: "YouTube Channel", progress: 66, steps: 6, tags: ["content", "media"] },
      { title: "Ecommerce Brand", progress: 45, steps: 9, tags: ["retail", "dropshipping"] },
      { title: "Startup", progress: 80, steps: 11, tags: ["venture", "pitch"] },
      { title: "Freelance Studio", progress: 58, steps: 5, tags: ["design", "clients"] },
      { title: "Tech Newsletter", progress: 73, steps: 4, tags: ["content", "saas"] },
      { title: "AI Consultancy", progress: 40, steps: 8, tags: ["consulting", "ai"] },
      { title: "Micro-SaaS", progress: 85, steps: 6, tags: ["saas", "indie"] },
    ],
  },
];

const CATEGORIES = ["All", "Software", "Electronics", "Business"] as const;

type Category = (typeof CATEGORIES)[number];

function MiniRoadmap({ steps }: { steps: number }) {
  return (
    <div className="mt-4 flex items-center gap-1">
      {Array.from({ length: steps }).map((_, i) => (
        <div key={i} className="flex flex-1 items-center">
          <div
            className={`h-2 w-2 rounded-full border-[1.5px] border-foreground ${
              i < Math.ceil(steps / 2) ? "bg-primary" : "bg-background"
            }`}
          />
          {i < steps - 1 && <div className="h-px flex-1 bg-foreground/30" />}
        </div>
      ))}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] px-4 py-2 text-sm font-medium transition-all duration-200
        ${
          active
            ? "border-primary bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--ink)]"
            : "border-foreground bg-background text-foreground shadow-[2px_2px_0_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_0_var(--ink)]"
        }
      `}
    >
      <span>{label}</span>
      <span
        className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono leading-none ${
          active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function RoadmapCard({ item }: { item: RoadmapItem }) {
  return (
    <article className="group brutal-card brutal-card-hover cursor-pointer p-5">
      <div className="flex items-start justify-between">
        <h4 className="font-display text-xl tracking-tight">{item.title}</h4>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border hairline bg-muted px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="font-mono">{item.steps} phases</span>
        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
        <span>{item.progress}% built</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full border hairline bg-muted">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${item.progress}%` }} />
      </div>
      <MiniRoadmap steps={item.steps} />
    </article>
  );
}

export function Explore() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_ITEMS.map((group) => {
      if (category !== "All" && group.label !== category) return null;
      const items = group.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
      return items.length > 0 ? { ...group, items } : null;
    }).filter(Boolean) as Group[];
  }, [query, category]);

  const totalResults = filteredGroups.reduce((sum, g) => sum + g.items.length, 0);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: 0 };
    for (const group of ALL_ITEMS) {
      counts[group.label] = group.items.length;
      counts.All += group.items.length;
    }
    return counts;
  }, []);

  return (
    <section id="explore" className="border-b hairline">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Explore Roadmaps</p>
            <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">Pick a path, start building.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Hundreds of community-built and AI-curated roadmaps across every discipline.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-10 flex flex-col gap-4 rounded-2xl border-[1.5px] border-foreground bg-surface p-5 shadow-[4px_4px_0_0_var(--ink)] sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roadmaps, tags…"
              className="w-full rounded-xl border-[1.5px] border-foreground bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={category === cat}
                onClick={() => setCategory(cat)}
                count={categoryCounts[cat] ?? 0}
              />
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {totalResults} result{totalResults !== 1 ? "s" : ""}
          </span>
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="text-xs text-primary underline-offset-2 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {totalResults === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border-[1.5px] border-dashed border-foreground bg-surface py-20 text-center shadow-[4px_4px_0_0_var(--ink)]">
            <Search className="h-8 w-8 text-muted-foreground" />
            <p className="mt-4 font-display text-lg">No roadmaps found</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different search or category.</p>
          </div>
        ) : (
          <div className="space-y-14">
            {filteredGroups.map(({ label, icon: Icon, items }) => (
              <div key={label} className="transition-all duration-300">
                <div className="mb-5 flex items-center gap-3 border-b hairline pb-4">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border-[1.5px] border-foreground bg-background shadow-[3px_3px_0_0_var(--ink)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-2xl">{label}</h3>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">{items.length} roadmaps</span>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((item) => (
                    <div key={item.title} className="transition-all duration-300 ease-out">
                      <RoadmapCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
