import { Map, FolderKanban, Brain, GraduationCap } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL, FLOW_PRODUCTS, type FlowProduct } from "@flow-hq/shared";

const icons: Record<FlowProduct["id"], typeof Map> = {
  roadmaps: Map,
  projects: FolderKanban,
  "business-ai": Brain,
  playlists: GraduationCap
};

const ProductsOverview = () => {
  return (
    <section id="products" className="scroll-mt-16 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Products
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Four products, one ecosystem</h2>
          <p className="text-muted-foreground">
            Use one on its own or all four together. They share your goals, your progress, and
            your context.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {FLOW_PRODUCTS.map((product) => {
            const Icon = icons[product.id];
            return (
              <div
                key={product.id}
                className="flex flex-col rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-flow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {product.tagline}
                </p>
                <div>
                  <Button variant="outline" asChild>
                    <a href={`${APP_URL}${product.appPath}`}>
                      {product.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
