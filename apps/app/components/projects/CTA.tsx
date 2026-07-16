import { ArrowRight, Sparkles, Compass } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="font-display text-5xl tracking-tight md:text-6xl">
          Start Building <span className="italic text-primary">Smarter</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Generate your first project roadmap in seconds.
        </p>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border-[1.5px] border-foreground bg-card p-3 text-left shadow-[6px_6px_0_0_var(--ink)]">
          <div className="flex items-center gap-3 px-2 py-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <input
              defaultValue="Build a solar-powered weather station"
              className="flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-[3px_3px_0_0_var(--ink)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_0_var(--ink)]">
              Generate <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[4px_4px_0_0_var(--primary)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_var(--primary)]">
            <Sparkles className="h-4 w-4" /> Generate Roadmap
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-foreground bg-background px-5 py-3 text-sm font-medium shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_var(--ink)]">
            <Compass className="h-4 w-4" /> Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
}
