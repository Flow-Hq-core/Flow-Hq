const ITEMS = [
  {
    quote: "I went from a vague idea to a launched MVP in 6 weeks. The phases felt like a co-founder.",
    name: "Amani M.",
    role: "Startup Founder",
    initials: "AM",
  },
  {
    quote: "Finally a tool that respects hardware projects. The PCB and firmware phases were spot on.",
    name: "Reza K.",
    role: "Electrical Engineer",
    initials: "RK",
  },
  {
    quote: "Flow gave me the structure I always lacked. I ship side projects 3x faster now.",
    name: "Jamie L.",
    role: "Software Developer",
    initials: "JL",
  },
  {
    quote: "As a student, I had no idea where to start. Flow basically mentored me through my first build.",
    name: "Nadia D.",
    role: "Student Builder",
    initials: "ND",
  },
];

export function Testimonials() {
  return (
    <section id="community" className="border-b hairline">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Loved by builders</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">Real makers. Real roadmaps.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((t) => (
            <figure key={t.name} className="brutal-card brutal-card-hover flex h-full flex-col p-6">
              <blockquote className="font-display text-xl leading-snug">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t hairline pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-foreground bg-primary text-xs font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
