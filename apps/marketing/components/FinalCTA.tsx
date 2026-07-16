import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { APP_URL } from "@flow-hq/shared";

const FinalCTA = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
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
