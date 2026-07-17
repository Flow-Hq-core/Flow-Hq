"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Brain, FolderKanban, GraduationCap, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_URL } from "@flow-hq/shared";

/**
 * Each product solves a different problem, so each gets a panel rather than a
 * line in a grid.
 *
 * Deliberately NOT a sequence. These are not numbered and nothing "feeds" the
 * next, because you don't have to use them in order — you arrive with one
 * problem and reach for the product that answers it. They do share progress
 * and context, but that's a payoff, not a prerequisite, and it's stated once
 * beneath the panel rather than baked into the structure.
 */
const steps = [
  {
    id: "roadmaps",
    solves: "Goals, but no roadmap",
    icon: Map,
    selectorTitle: "Find the path",
    selectorSub: "Flow Roadmaps",
    headline: ["Stop guessing", "what comes next."],
    body: "Describe where you want to get to. Flow maps the route — every milestone, in the order it actually goes in.",
    brings: "“I want to start a coffee brand”",
    gets: "A sequenced path across every layer",
    cta: { label: "Explore Roadmaps", href: `${APP_URL}/roadmaps` }
  },
  {
    id: "projects",
    solves: "Ideas, but no execution",
    icon: FolderKanban,
    selectorTitle: "Execute it",
    selectorSub: "Flow Projects",
    headline: ["Turn a step", "into real work."],
    body: "Plans stay theoretical until someone owns them. Take any milestone and get tasks, a timeline, and risks — already drafted.",
    brings: "A milestone from your roadmap",
    gets: "Tasks, timeline, and risks, pre-drafted",
    cta: { label: "Create Project", href: `${APP_URL}/projects` }
  },
  {
    id: "business-ai",
    solves: "Built it, but can't see what's broken",
    icon: Brain,
    selectorTitle: "Improve it",
    selectorSub: "Flow Business AI",
    headline: ["Know what", "to fix next."],
    body: "Once something exists, the question changes from what to build to what's broken. Get findings with evidence, not advice.",
    brings: "What you've built so far",
    gets: "Findings, evidence, and an action plan",
    cta: { label: "Try Business AI", href: `${APP_URL}/business-ai` }
  },
  {
    id: "playlists",
    solves: "Information, but no direction",
    icon: GraduationCap,
    selectorTitle: "Learn it",
    selectorSub: "Flow Playlists",
    headline: ["Close the gaps", "the work exposes."],
    body: "Execution shows you what you don't know. Playlists follow those gaps — and finishing one moves your roadmap.",
    brings: "A gap your roadmap or project exposed",
    gets: "A sequenced playlist, not a catalog",
    cta: { label: "Explore Learning", href: `${APP_URL}/playlists` }
  }
];

const HowFlowWorks = () => {
  const [active, setActive] = useState(steps[0].id);
  const step = steps.find((s) => s.id === active) ?? steps[0];
  const Icon = step.icon;

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What each product <span className="text-primary">actually solves</span>
          </h2>
          <p className="text-muted-foreground">
            Four products, four different problems. Reach for the one you need.
          </p>
        </div>

        {/* Step selector */}
        <div
          role="tablist"
          aria-label="How Flow works"
          className="mb-6 grid gap-2 rounded-2xl bg-muted/50 p-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => {
            const isActive = s.id === active;
            const StepIcon = s.icon;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(s.id)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-background shadow-flow-sm"
                    : "opacity-45 hover:opacity-80"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                    isActive ? "bg-accent" : "bg-background"
                  )}
                >
                  <StepIcon
                    className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {s.selectorTitle}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {s.selectorSub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="grid lg:grid-cols-2">
            {/* Handoff */}
            <div className="border-b border-border bg-muted/30 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <div className="mx-auto max-w-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  You bring
                </p>
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="text-sm font-medium text-foreground">{step.brings}</p>
                </div>

                <div className="flex justify-center py-3">
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="rounded-xl border border-border bg-background p-5 shadow-flow-sm">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">{step.selectorSub}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.gets}</p>
                </div>

              </div>
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center bg-background p-8 lg:p-12">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground">Solves</span>
                <span className="text-xs font-semibold text-foreground">{step.solves}</span>
              </div>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                <span className="text-primary">{step.headline[0]}</span>
                <br />
                {step.headline[1]}
              </h3>

              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{step.body}</p>

              <div className="mt-7">
                <Button asChild>
                  <a href={step.cta.href}>
                    {step.cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Connection stated once — a payoff, not a prerequisite. */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Each one works on its own. Use more than one and your progress, goals, and context
          carry between them.
        </p>
      </div>
    </section>
  );
};

export default HowFlowWorks;
