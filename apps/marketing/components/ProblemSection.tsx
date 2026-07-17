import { Activity, Compass, Lightbulb, Waves } from "lucide-react";

/**
 * Four problems, one per product.
 *
 * Three come straight from Fullmap.md section 2 ("ideas but no execution",
 * "goals but no roadmap", "information but no direction"). The fourth —
 * can't see what's broken — is the gap that doc left, and it's the one
 * Business AI answers.
 *
 * Each stands alone. There's no order here: you arrive with one of these,
 * not all four.
 */
const problems = [
  {
    icon: Compass,
    title: "Goals, but no roadmap",
    description:
      "You can name the destination but not the path. So you guess at the order, skip what matters, and stall halfway.",
    answer: "Flow Roadmaps"
  },
  {
    icon: Lightbulb,
    title: "Ideas, but no execution",
    description:
      "You know what you want to build. It stays a note in your phone because nothing turns it into work someone owns.",
    answer: "Flow Projects"
  },
  {
    icon: Activity,
    title: "Built it, but can't see what's broken",
    description:
      "Something isn't working and every guess costs weeks. You need a read on what's actually weak — with the evidence.",
    answer: "Flow Business AI"
  },
  {
    icon: Waves,
    title: "Information, but no direction",
    description:
      "Endless courses, threads, and videos. Plenty of input, no sequence — you're collecting pieces without a picture.",
    answer: "Flow Playlists"
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

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-flow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <p className="mt-5 border-t border-border pt-4 text-sm font-semibold text-primary">
                {p.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-foreground">
            Four problems, four answers.{" "}
            <span className="font-semibold text-primary">Start wherever it hurts.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
