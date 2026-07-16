import { Map, FileText, BarChart3, Brain, Target, GitBranch } from "lucide-react";

const cards = [
  {
    step: "Step 1",
    icon: Map,
    title: "Generate your roadmap",
    description: "Describe your business and get a full **11-layer strategic roadmap** instantly.",
    accent: "bg-primary/10 text-primary",
  },
  {
    step: "Step 2",
    icon: FileText,
    title: "Build SOPs & workflows",
    description: "Every node includes **templates**, processes, and standard operating procedures.",
    accent: "bg-primary/10 text-primary",
  },
  {
    step: "Step 3",
    icon: Brain,
    title: "Run AI diagnostics",
    description: "Flow scans your business and highlights **gaps**, leaks, and opportunities.",
    accent: "bg-primary/10 text-primary",
  },
  {
    step: "Step 4",
    icon: BarChart3,
    title: "Forecast revenue",
    description: "Model scenarios based on your **pricing**, traffic, and conversion data.",
    accent: "bg-primary/10 text-primary",
  },
  {
    step: "Step 5",
    icon: Target,
    title: "Optimize funnels",
    description: "Design acquisition-to-retention **funnels** tailored to your model.",
    accent: "bg-primary/10 text-primary",
  },
  {
    step: "Step 6",
    icon: GitBranch,
    title: "Scale operations",
    description: "Automate and systematize every layer as you **grow**.",
    accent: "bg-primary/10 text-primary",
  },
];

const renderDesc = (text: string) => {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-semibold text-foreground">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const CardItem = ({ card }: { card: typeof cards[0] }) => (
  <div className="flex-shrink-0 w-72 rounded-2xl border border-border bg-background p-6 shadow-flow-sm hover:shadow-flow-md transition-shadow">
    <div className={`w-10 h-10 rounded-xl ${card.accent} flex items-center justify-center mb-4`}>
      <card.icon className="w-5 h-5" />
    </div>
    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">{card.step}</p>
    <h3 className="text-base font-semibold text-foreground mb-2">{card.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{renderDesc(card.description)}</p>
  </div>
);

const HeroCards = () => {
  return (
    <div className="relative w-full overflow-hidden mt-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background/80 to-transparent" />

      <div className="flex gap-6 animate-marquee">
        {[...cards, ...cards].map((card, i) => (
          <CardItem key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
