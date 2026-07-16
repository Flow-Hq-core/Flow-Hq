"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, Pause, Play } from "lucide-react";
import { Map, FolderKanban, Brain, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_URL } from "@flow-hq/shared";
import EcosystemVisual from "./EcosystemVisual";
import RoadmapVisual from "./RoadmapVisual";
import ProjectsVisual from "./ProjectsVisual";
import BusinessAIVisual from "./BusinessAIVisual";
import PlaylistsVisual from "./PlaylistsVisual";

/** Must match the `progress` animation duration in the Tailwind preset. */
const HERO_SLIDE_MS = 7000;

const slides = [
  {
    id: "flow-hq",
    card: "Flow-HQ",
    icon: Sparkles,
    eyebrow: "Flow-HQ",
    headline: ["Build your path.", "Execute your ideas.", "Grow with AI."],
    accentLine: 2,
    body: "One system for finding your path, turning it into real work, and learning what you need along the way — whether you're starting a business or mastering a skill.",
    cta: { label: "Get Started", href: `${APP_URL}/explore` },
    Visual: EcosystemVisual
  },
  {
    id: "roadmaps",
    card: "Roadmaps",
    icon: Map,
    eyebrow: "Flow Roadmaps",
    headline: ["Find the path.", "Beginner to expert."],
    accentLine: 1,
    body: "Structured routes from where you are to where you're going. Every node is a real step, in the order it actually goes in.",
    cta: { label: "Explore Roadmaps", href: `${APP_URL}/roadmaps` },
    Visual: RoadmapVisual
  },
  {
    id: "projects",
    card: "Projects",
    icon: FolderKanban,
    eyebrow: "Flow Projects",
    headline: ["Turn plans", "into execution."],
    accentLine: 1,
    body: "Take any step of your roadmap and make it real work — tasks, timeline, and risks, generated rather than hand-built.",
    cta: { label: "Create Project", href: `${APP_URL}/projects` },
    Visual: ProjectsVisual
  },
  {
    id: "business-ai",
    card: "Business AI",
    icon: Brain,
    eyebrow: "Flow Business AI",
    headline: ["Know what", "to fix next."],
    accentLine: 1,
    body: "Analyze an idea or a running business. Get findings, recommendations, and an action plan you can turn straight into a project.",
    cta: { label: "Try Business AI", href: `${APP_URL}/business-ai` },
    Visual: BusinessAIVisual
  },
  {
    id: "playlists",
    card: "Playlists",
    icon: GraduationCap,
    eyebrow: "Flow Playlists",
    headline: ["Learn faster.", "Learn in order."],
    accentLine: 1,
    body: "Curated paths tied to the gaps in your roadmap. Finish a playlist and your roadmap progress moves with it.",
    cta: { label: "Explore Learning", href: `${APP_URL}/playlists` },
    Visual: PlaylistsVisual
  }
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  // Reduced motion means no autoplay at all — the cards still work as tabs.
  const autoplay = !reduced && !paused;

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % slides.length),
      HERO_SLIDE_MS
    );
    return () => clearTimeout(timer);
  }, [active, autoplay]);

  const select = useCallback((i: number) => {
    setActive(i);
  }, []);

  const slide = slides[active];
  const Visual = slide.Visual;

  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mb-4 text-sm font-semibold text-muted-foreground">{slide.eyebrow}</p>

                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {slide.headline.map((line, i) => (
                    <span key={line} className="block">
                      {i === slide.accentLine ? (
                        <span className="text-primary">{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  {slide.body}
                </p>

                <div className="mt-8">
                  <Button size="lg" className="px-6 text-base shadow-flow-blue" asChild>
                    <a href={slide.cta.href}>
                      {slide.cta.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product UI */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35 }}
              >
                <Visual />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Card nav */}
        <div className="mt-14 flex items-end gap-3">
          <div
            role="tablist"
            aria-label="Flow products"
            className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5"
          >
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => select(i)}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-foreground hover:bg-muted/60"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <s.icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        isActive ? "text-background" : "text-primary"
                      )}
                    />
                    <span className="flex-1 truncate text-sm font-semibold">{s.card}</span>
                    <ChevronRight
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5",
                        isActive ? "text-background/70" : "text-muted-foreground"
                      )}
                    />
                  </span>

                  {/* Autoplay timer */}
                  {isActive && !reduced && (
                    <span
                      key={active}
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-[3px] bg-primary animate-progress",
                        paused && "[animation-play-state:paused]"
                      )}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {!reduced && (
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play carousel" : "Pause carousel"}
              className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:flex"
            >
              {paused ? (
                <Play className="h-4 w-4 fill-current" />
              ) : (
                <Pause className="h-4 w-4 fill-current" />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
