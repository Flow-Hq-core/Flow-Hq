import { Clock, Gauge } from "lucide-react";

const PHASES = [
  { n: 1, title: "Research", time: "1 wk" },
  { n: 2, title: "Hardware Selection", time: "2 wks" },
  { n: 3, title: "PCB Design", time: "3 wks" },
  { n: 4, title: "Android TV Development", time: "6 wks" },
  { n: 5, title: "Testing", time: "2 wks" },
  { n: 6, title: "Manufacturing", time: "4 wks" },
];

export function RoadmapExample() {
  return (
    <section className="border-b hairline bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Example Roadmap</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">Build a Smart TV Streaming Device</h2>
        </div>

        <div className="rounded-2xl border-[1.5px] border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--ink)] md:p-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 border-b hairline pb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-foreground bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              <Gauge className="h-3.5 w-3.5" /> Intermediate
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-foreground bg-background px-3 py-1 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" /> ~18 weeks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-background px-3 py-1 text-xs text-muted-foreground">
              Hardware + Android
            </span>
          </div>

          <ol className="grid gap-4 md:grid-cols-3">
            {PHASES.map((p) => (
              <li key={p.n} className="group relative rounded-xl border hairline bg-background p-5 transition-all hover:border-foreground hover:shadow-[4px_4px_0_0_var(--ink)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Phase {p.n}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{p.time}</span>
                </div>
                <h3 className="mt-3 font-display text-xl tracking-tight">{p.title}</h3>
                <div className="mt-4 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i < p.n ? "bg-primary" : "bg-muted"}`} />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
