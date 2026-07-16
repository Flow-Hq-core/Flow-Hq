import { Compass, Lightbulb, Waves } from "lucide-react";

const problems = [
  {
    icon: Lightbulb,
    title: "Ideas, but no execution",
    description:
      "You know what you want to build. It stays a note in your phone because nothing turns it into actual work with actual steps."
  },
  {
    icon: Compass,
    title: "Goals, but no roadmap",
    description:
      "You can name the destination but not the path. So you guess at the order, skip what matters, and stall halfway."
  },
  {
    icon: Waves,
    title: "Information, but no direction",
    description:
      "Endless courses, threads, and videos. Plenty of input, no sequence — you're collecting pieces without a picture."
  }
];

const ProblemSection = () => {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            The gap isn&rsquo;t effort. <span className="text-primary">It&rsquo;s structure.</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-flow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-foreground">
            Flow closes it by connecting{" "}
            <span className="font-semibold text-primary">every step to the next one</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
