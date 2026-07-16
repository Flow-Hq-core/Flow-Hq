import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop executing fragments.{" "}
          <span className="text-primary">Build the whole system.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Flow-HQ gives you the structure, tools, and intelligence to build a business that actually works.
        </p>
        <Button size="lg" className="shadow-flow-blue text-base px-8">
          Start Building with Flow
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
