import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Shared hero for every marketing sub-page, so they read as one site. */
const PageHero = ({
  eyebrow,
  headline,
  description,
  primary,
  secondary
}: {
  eyebrow: string;
  headline: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) => {
  return (
    <section className="border-b border-border pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">{headline}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>

        {(primary || secondary) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primary && (
              <Button size="lg" className="shadow-flow-blue" asChild>
                <a href={primary.href}>
                  {primary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {secondary && (
              <Button variant="outline" size="lg" asChild>
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
