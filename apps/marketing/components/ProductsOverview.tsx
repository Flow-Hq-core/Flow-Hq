import Link from "next/link";
import { ArrowRight, Brain, FolderKanban, GraduationCap, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { FLOW_PRODUCTS, type FlowProduct } from "@flow-hq/shared";
import {
  BusinessAIMotif,
  PlaylistsMotif,
  ProjectsMotif,
  RoadmapMotif
} from "@/components/products/ProductMotifs";

/**
 * Bento: alternating wide/narrow so the grid has rhythm, with each product's
 * motif bleeding off the card corner.
 */
const layout: Record<
  FlowProduct["id"],
  { span: string; icon: typeof Map; Motif: () => React.JSX.Element; motifClass: string }
> = {
  roadmaps: {
    span: "lg:col-span-7",
    icon: Map,
    Motif: RoadmapMotif,
    motifClass: "-bottom-10 -right-4 rotate-[-4deg]"
  },
  projects: {
    span: "lg:col-span-5",
    icon: FolderKanban,
    Motif: ProjectsMotif,
    motifClass: "-bottom-8 -right-10 rotate-[5deg]"
  },
  "business-ai": {
    span: "lg:col-span-5",
    icon: Brain,
    Motif: BusinessAIMotif,
    motifClass: "-bottom-8 -right-10 rotate-[-5deg]"
  },
  playlists: {
    span: "lg:col-span-7",
    icon: GraduationCap,
    Motif: PlaylistsMotif,
    motifClass: "-bottom-8 -right-4 rotate-[4deg]"
  }
};

const ProductsOverview = () => {
  return (
    <section id="products" className="scroll-mt-16 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Four products, one ecosystem
          </h2>
          <p className="text-muted-foreground">
            Use one on its own or all four together. They share your goals, your progress, and
            your context.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {FLOW_PRODUCTS.map((product) => {
            const { span, icon: Icon, Motif, motifClass } = layout[product.id];
            return (
              <Link
                key={product.id}
                href={product.marketingPath}
                className={cn(
                  "group relative min-h-[320px] overflow-hidden rounded-2xl bg-background p-8 transition-shadow hover:shadow-flow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  span
                )}
              >
                <div className="relative z-10 max-w-[15rem]">
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-semibold text-foreground">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Motif bleeds off the card corner */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute origin-bottom-right transition-transform duration-500 group-hover:scale-[1.03]",
                    motifClass
                  )}
                >
                  <Motif />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
