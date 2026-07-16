"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

const PROMPTS = [
  "Build a portable POS system for Tanzania",
  "Create a SaaS for student management",
  "Build a drone from scratch",
  "Create a YouTube automation business",
  "Build a smart LED matrix controller",
];

function useTypewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const full = PROMPTS[index];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), 35);
      } else {
        t = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("deleting"), 600);
    } else if (text.length > 0) {
      t = setTimeout(() => setText(full.slice(0, text.length - 1)), 18);
    } else {
      setPhase("typing");
      setIndex((i) => (i + 1) % PROMPTS.length);
    }

    return () => clearTimeout(t);
  }, [text, phase, index]);

  return text;
}

function FloatingNodes() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="projects-lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g stroke="url(#projects-lg)" strokeWidth="1" fill="none">
        <path d="M120 120 L260 200 L200 360 L380 420" />
        <path d="M900 100 L1040 220 L960 360 L1080 460" />
        <path d="M520 80 L600 180" />
      </g>
      {[
        [120, 120],
        [260, 200],
        [200, 360],
        [380, 420],
        [900, 100],
        [1040, 220],
        [960, 360],
        [1080, 460],
        [520, 80],
        [600, 180],
      ].map(([x, y], i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${x}px ${y}px` }}>
          <circle cx={x} cy={y} r="6" fill="hsl(var(--background))" stroke="var(--ink)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="2.5" fill="hsl(var(--primary))" />
        </g>
      ))}
    </svg>
  );
}

export function ProjectsHero() {
  const typed = useTypewriter();

  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-glow" />
      <FloatingNodes />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 text-center md:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Project roadmaps for builders, founders, and engineers
        </div>

        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Turn Ideas Into <span className="italic text-primary">Clear Roadmaps</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          Generate detailed project roadmaps for software, electronics, startups, AI products, and more. Know exactly what to build next.
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-2xl border-[1.5px] border-foreground bg-card p-3 shadow-[6px_6px_0_0_var(--ink)]">
            <div className="flex items-center gap-2 border-b hairline px-2 pb-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              flow.new / new-project
            </div>
            <div className="flex items-start gap-3 px-2 pt-3 text-left">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="min-h-[56px] flex-1 font-mono text-sm md:text-base">
                {typed}
                <span className="ml-0.5 inline-block h-4 w-[2px] -translate-y-[1px] bg-foreground align-middle animate-blink" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t hairline px-2 pt-3">
              <div className="flex gap-1.5">
                {["Software", "Hardware", "AI", "Startup"].map((t) => (
                  <span key={t} className="rounded-md border hairline bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_0_var(--ink)]">
                Generate <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[4px_4px_0_0_var(--primary)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_var(--primary)]">
            <Sparkles className="h-4 w-4" /> Generate Roadmap
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-foreground bg-background px-5 py-3 text-sm font-medium text-foreground shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_var(--ink)]">
            <Compass className="h-4 w-4" /> Explore Projects
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>10,000+ roadmaps generated</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>Trusted by makers worldwide</span>
        </div>
      </div>
    </section>
  );
}
