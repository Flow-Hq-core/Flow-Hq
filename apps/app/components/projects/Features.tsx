import { Sparkles, BookOpen, ListChecks, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    eyebrow: "AI Roadmap Generator",
    title: "Complete project plans, instantly.",
    body: "Describe your idea and get a complete, phase-by-phase plan with milestones, dependencies, and timelines.",
    mock: <RoadmapMock />,
  },
  {
    icon: BookOpen,
    eyebrow: "Curated Learning Resources",
    title: "Tutorials, docs, and tools — handpicked.",
    body: "Every phase comes with the best documentation, courses, and tools recommended by builders who've shipped.",
    mock: <ResourcesMock />,
  },
  {
    icon: ListChecks,
    eyebrow: "Project Tracking",
    title: "Track milestones from spark to ship.",
    body: "Check off tasks, log progress, and visualize where you are in the build — no spreadsheets required.",
    mock: <TrackingMock />,
  },
  {
    icon: Users,
    eyebrow: "Community Roadmaps",
    title: "Learn from roadmaps others actually built.",
    body: "Explore real roadmaps from founders, engineers, and creators. Remix and adapt them to your own project.",
    mock: <CommunityMock />,
  },
];

function RoadmapMock() {
  return (
    <div className="space-y-2">
      {["Discovery", "Architecture", "MVP", "Beta", "Launch"].map((s, i) => (
        <div key={s} className="flex items-center gap-3 rounded-lg border hairline bg-background px-3 py-2">
          <div className="grid h-6 w-6 place-items-center rounded-md border-[1.5px] border-foreground bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</div>
          <span className="flex-1 text-sm font-medium">{s}</span>
          <div className="h-1 w-16 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary" style={{ width: `${20 + i * 18}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
function ResourcesMock() {
  const items = [
    { t: "React Docs", k: "Docs" },
    { t: "PCB Design 101", k: "Course" },
    { t: "Figma for Hardware", k: "Tool" },
    { t: "Y Combinator Library", k: "Reading" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((i) => (
        <div key={i.t} className="rounded-lg border hairline bg-background p-3">
          <div className="text-[10px] font-mono uppercase text-primary">{i.k}</div>
          <div className="mt-1 text-sm font-medium">{i.t}</div>
        </div>
      ))}
    </div>
  );
}
function TrackingMock() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Progress</span><span className="font-mono">64%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full border hairline bg-muted"><div className="h-full w-[64%] bg-primary" /></div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i} className={`aspect-square rounded-sm border hairline ${i % 3 === 0 ? "bg-primary" : i % 5 === 0 ? "bg-primary/50" : "bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}
function CommunityMock() {
  const people = ["AM", "RK", "JL", "ND"];
  return (
    <div className="space-y-2">
      {[
        "Solo founder built a CRM in 6 weeks",
        "Engineer shipped a custom smartwatch",
        "Student launched an AI study tool",
      ].map((t, i) => (
        <div key={t} className="flex items-center gap-3 rounded-lg border hairline bg-background p-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-full border-[1.5px] border-foreground bg-primary text-[10px] font-bold text-primary-foreground">{people[i]}</div>
          <span className="text-sm">{t}</span>
        </div>
      ))}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="border-b hairline">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Features</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">Everything you need to ship.</h2>
        </div>

        <div className="space-y-16">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="inline-flex items-center gap-2 rounded-full border hairline bg-background px-3 py-1 text-xs">
                  <f.icon className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-muted-foreground">{f.eyebrow}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">{f.title}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{f.body}</p>
              </div>
              <div className={`brutal-card p-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="mb-3 flex items-center gap-2 border-b hairline pb-3 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  preview
                </div>
                {f.mock}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
