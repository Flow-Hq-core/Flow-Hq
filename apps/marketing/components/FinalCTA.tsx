import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { APP_URL } from "@flow-hq/shared";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Halo so the closing CTA reads as an arrival, not another white band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_50%,hsl(214_95%_96%),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Your goals need a system.{" "}
          <span className="text-primary">Start building with Flow.</span>
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Find your path, turn it into work you can actually finish, and learn what you need
          along the way.
        </p>
        <Button size="lg" className="px-8 text-base shadow-flow-blue" asChild>
          <a href={`${APP_URL}/explore`}>
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
