"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FLOW_PRODUCTS,
  FLOW_SOLUTIONS,
  FLOW_USE_CASES,
  type MarketingMenuId
} from "@flow-hq/shared";

type Entry = {
  key: string;
  href: string;
  title: string;
  description: string;
};

type MenuData = {
  /** Left rail — Adobe filters a large catalog; ours groups a small one. */
  rail: { key: string; label: string; entries: readonly Entry[] }[];
  hubLabel: string;
  hubPath: string;
};

function productEntries(): Entry[] {
  return FLOW_PRODUCTS.map((p) => ({
    key: p.id,
    href: p.marketingPath,
    title: p.name,
    description: p.tagline
  }));
}

function useCaseEntries(): Entry[] {
  return FLOW_USE_CASES.map((u) => ({
    key: u.slug,
    href: `/use-cases/${u.slug}`,
    title: u.title,
    description: u.tagline
  }));
}

function solutionEntries(): Entry[] {
  return FLOW_SOLUTIONS.map((s) => ({
    key: s.slug,
    href: `/solutions/${s.slug}`,
    title: s.title,
    description: s.tagline
  }));
}

/**
 * Rails are grouped by what the data actually supports. Products splits along
 * the journey (plan/execute vs improve/learn) rather than inventing
 * categories; the others have a single meaningful group each.
 */
export function getMenuData(menu: MarketingMenuId): MenuData {
  if (menu === "products") {
    const all = productEntries();
    return {
      hubLabel: "All products",
      hubPath: "/products",
      rail: [
        { key: "featured", label: "Featured", entries: all },
        {
          key: "plan-execute",
          label: "Plan & execute",
          entries: all.filter((e) => e.key === "roadmaps" || e.key === "projects")
        },
        {
          key: "improve-learn",
          label: "Improve & learn",
          entries: all.filter((e) => e.key === "business-ai" || e.key === "playlists")
        }
      ]
    };
  }

  if (menu === "use-cases") {
    return {
      hubLabel: "All use cases",
      hubPath: "/use-cases",
      rail: [{ key: "featured", label: "Featured", entries: useCaseEntries() }]
    };
  }

  return {
    hubLabel: "All solutions",
    hubPath: "/solutions",
    rail: [{ key: "featured", label: "Featured", entries: solutionEntries() }]
  };
}

const MegaMenu = ({
  menu,
  activeRail,
  onRailChange,
  onNavigate
}: {
  menu: MarketingMenuId;
  activeRail: string;
  onRailChange: (key: string) => void;
  onNavigate: () => void;
}) => {
  const data = getMenuData(menu);
  const group = data.rail.find((r) => r.key === activeRail) ?? data.rail[0];
  const showRail = data.rail.length > 1;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className={cn("gap-10", showRail ? "lg:flex" : "")}>
        {showRail && (
          <div className="mb-6 shrink-0 lg:mb-0 lg:w-56">
            <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
              {data.rail.map((r) => (
                <button
                  key={r.key}
                  onMouseEnter={() => onRailChange(r.key)}
                  onFocus={() => onRailChange(r.key)}
                  onClick={() => onRailChange(r.key)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:w-full lg:text-left",
                    r.key === group.key
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-background/70"
                  )}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <Link
              href={data.hubPath}
              onClick={onNavigate}
              className="mt-5 inline-flex items-center px-5 text-sm font-semibold text-foreground hover:text-primary"
            >
              {data.hubLabel}
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.entries.map((entry) => (
              <Link
                key={entry.key}
                href={entry.href}
                onClick={onNavigate}
                className="rounded-xl bg-background p-6 transition-shadow hover:shadow-flow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="mb-1.5 font-semibold text-foreground">{entry.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </Link>
            ))}
          </div>

          {!showRail && (
            <Link
              href={data.hubPath}
              onClick={onNavigate}
              className="mt-6 inline-flex items-center text-sm font-semibold text-foreground hover:text-primary"
            >
              {data.hubLabel}
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
