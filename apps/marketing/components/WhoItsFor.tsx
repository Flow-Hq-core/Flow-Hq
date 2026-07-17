"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Gauge, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { FLOW_OUTCOMES, FLOW_SOLUTIONS } from "@flow-hq/shared";

const outcomeIcons = [Eye, Compass, Gauge, Lightbulb];

const WhoItsFor = () => {
  const [active, setActive] = useState(FLOW_SOLUTIONS[0].slug);
  const solution = FLOW_SOLUTIONS.find((s) => s.slug === active) ?? FLOW_SOLUTIONS[0];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">What you&rsquo;ll get</h2>
          <p className="text-muted-foreground">Real outcomes, not just features</p>
        </div>

        {/* Outcomes */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {FLOW_OUTCOMES.map((outcome, i) => {
            const Icon = outcomeIcons[i] ?? Eye;
            return (
              <div key={outcome.title} className="text-center">
                <Icon className="mx-auto mb-3 h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                <p className="font-semibold text-foreground">{outcome.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{outcome.description}</p>
              </div>
            );
          })}
        </div>

        {/* Audience panel */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border">
          <div className="grid md:grid-cols-[220px_1fr]">
            <div
              role="tablist"
              aria-label="Audiences"
              className="flex gap-2 overflow-x-auto border-b border-border p-4 md:flex-col md:overflow-visible md:border-b-0 md:border-r"
            >
              {FLOW_SOLUTIONS.map((s) => (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={s.slug === active}
                  onClick={() => setActive(s.slug)}
                  className={cn(
                    "shrink-0 rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-full",
                    s.slug === active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {s.audience}
                </button>
              ))}
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-foreground">Perfect for {solution.audience}</h3>
              <p className="mt-1.5 text-muted-foreground">{solution.tagline}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {solution.capabilities.map((c) => (
                  <div key={c.title} className="rounded-lg bg-muted/60 p-4">
                    <p className="text-sm font-semibold text-foreground">{c.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/solutions/${solution.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                More for {solution.audience.toLowerCase()}
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
