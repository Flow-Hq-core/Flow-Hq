import { businessRoadmap, type RNode } from "./businessRoadmap";

/**
 * One roadmap's full content. Every roadmap detail page renders through the
 * same connector-tree template (components/roadmap/RoadmapTemplate) — only the
 * content in this registry changes. To add a roadmap, add an entry keyed by its
 * catalog slug (the `toSlug` of its name in app/roadmaps/page.tsx).
 */
export interface RoadmapContent {
  /** Catalog category, shown as the eyebrow above the title (e.g. "Business"). */
  category: string;
  /** Tailwind text-color class for the eyebrow, matching the catalog chip. */
  categoryColor?: string;
  title: string;
  description: string;
  /** Tree root; its children render as the first row of stages. */
  root: RNode;
}

export const ROADMAPS: Record<string, RoadmapContent> = {
  "business-foundations": {
    category: "Business",
    categoryColor: "text-sky-600",
    title: "Business Operating",
    description:
      "The full roadmap at a glance — read left to right, each stage opening into its layers and the topics they contain.",
    root: { label: "Business Operating", status: "done", children: businessRoadmap }
  }
};

export function getRoadmap(slug: string): RoadmapContent | undefined {
  return ROADMAPS[slug];
}
