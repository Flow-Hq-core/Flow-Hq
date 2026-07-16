"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Cpu, ArrowDown } from "lucide-react";

const STEPS = [
  "Research",
  "Hardware Design",
  "PCB Development",
  "Software Development",
  "Prototype Testing",
  "Manufacturing",
  "Launch",
];

export function LiveDemo() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= STEPS.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 450);
    return () => clearTimeout(t);
  }, [visible]);

  // restart loop
  useEffect(() => {
    if (visible === STEPS.length) {
      const t = setTimeout(() => setVisible(0), 4000);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <section className="border-b hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Live Demonstration</p>
            <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">From prompt to plan in seconds.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Watch Flow turn a single sentence into a complete, structured build roadmap.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: prompt */}
          <div className="rounded-2xl border-[1.5px] border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--ink)]">
            <div className="flex items-center justify-between border-b hairline pb-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                prompt.txt
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">user</span>
            </div>
            <div className="py-8 text-center">
              <Cpu className="mx-auto h-7 w-7 text-primary" />
              <p className="mt-4 font-display text-3xl leading-snug md:text-4xl">
                "Build a Portable <br/>POS Device"
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Domain: Electronics + Software</p>
            </div>
            <div className="mt-2 flex items-center gap-2 border-t hairline pt-3 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              Submitted just now
            </div>
          </div>

          {/* Right: roadmap */}
          <div className="relative rounded-2xl border-[1.5px] border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--primary)]">
            <div className="mb-4 flex items-center justify-between border-b hairline pb-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                roadmap.json
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border hairline bg-background px-2 py-0.5 font-mono text-[11px] text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Generated in 12s
              </span>
            </div>

            <ol className="space-y-2">
              {STEPS.map((step, i) => {
                const shown = i < visible;
                return (
                  <li
                    key={step}
                    className={`flex items-center gap-3 rounded-xl border hairline bg-background px-3 py-2.5 transition-all ${
                      shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="grid h-7 w-7 place-items-center rounded-lg border-[1.5px] border-foreground bg-primary text-[11px] font-semibold text-primary-foreground">
                      {i + 1}
                    </div>
                    <span className="flex-1 text-sm font-medium">{step}</span>
                    {shown && <CheckCircle2 className="h-4 w-4 text-primary" />}
                  </li>
                );
              })}
            </ol>
            <div className="mt-3 flex items-center justify-center text-muted-foreground">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
