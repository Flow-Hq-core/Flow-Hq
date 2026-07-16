import { MessageSquare, Wand2, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Describe Your Idea",
    body: "Type any project idea — a startup, a circuit board, an AI agent, a YouTube channel. One sentence is enough.",
  },
  {
    icon: Wand2,
    title: "AI Creates the Roadmap",
    body: "Flow generates phases, milestones, tools, and curated learning resources tailored to your domain.",
  },
  {
    icon: Rocket,
    title: "Build With Confidence",
    body: "Track progress, check off milestones, and follow the path from idea to launched product.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-b hairline bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">How It Works</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">Three steps. Zero guesswork.</h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* connector */}
          <div className="pointer-events-none absolute left-0 right-0 top-[88px] hidden h-px bg-foreground/20 md:block" />

          {STEPS.map((s, i) => (
            <div key={s.title} className="relative brutal-card p-7">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border-[1.5px] border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--ink)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
