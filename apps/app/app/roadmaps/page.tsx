import Link from "next/link";
import {
  AppWindow,
  BarChart3,
  Bot,
  BrainCircuit,
  Briefcase,
  Building,
  Building2,
  Cloud,
  Code2,
  Cog,
  Contact,
  Cpu,
  Database,
  Factory,
  Globe,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Infinity,
  Landmark,
  LayoutDashboard,
  Megaphone,
  Milestone,
  Network,
  PenTool,
  Scale,
  Server,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sprout,
  Stethoscope,
  Target,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Users,
  type LucideIcon
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { cn } from "@/lib/utils";

/**
 * The roadmap catalog, from docs/RoadmapList.md. Roadmaps is a browse-only
 * knowledge library (docs/Product.md — it does NOT generate), so this is a
 * directory of structured roadmaps grouped by category.
 */
type Group = {
  category: string;
  icon: LucideIcon;
  /** Full class strings so Tailwind keeps them (no dynamic interpolation). */
  chip: string;
  ring: string;
  roadmaps: string[];
};

const CATALOG: Group[] = [
  {
    category: "Business",
    icon: Briefcase,
    chip: "text-sky-600",
    ring: "hover:border-sky-500/40",
    roadmaps: [
      "Business Foundations",
      "Strategy",
      "Finance",
      "Marketing",
      "Sales",
      "Operations",
      "Human Resources",
      "Customer Success",
      "Legal & Compliance",
      "Technology"
    ]
  },
  {
    category: "Industries",
    icon: Factory,
    chip: "text-amber-600",
    ring: "hover:border-amber-500/40",
    roadmaps: [
      "Transport Company",
      "Restaurant",
      "Healthcare",
      "Retail",
      "Manufacturing",
      "Construction",
      "Agriculture",
      "Education",
      "Real Estate",
      "SaaS"
    ]
  },
  {
    category: "Software & Digital",
    icon: Code2,
    chip: "text-violet-600",
    ring: "hover:border-violet-500/40",
    roadmaps: ["Website", "Mobile App", "CRM", "ERP", "E-commerce", "Analytics", "AI Systems"]
  },
  {
    category: "Technology",
    icon: Cpu,
    chip: "text-emerald-600",
    ring: "hover:border-emerald-500/40",
    roadmaps: [
      "Frontend",
      "Backend",
      "Data Engineering",
      "DevOps",
      "Cloud",
      "Cybersecurity",
      "AI Engineering",
      "UI/UX"
    ]
  }
];

const ICONS: Record<string, LucideIcon> = {
  "Business Foundations": Building2,
  Strategy: Target,
  Finance: Landmark,
  Marketing: Megaphone,
  Sales: TrendingUp,
  Operations: Cog,
  "Human Resources": Users,
  "Customer Success": HeartHandshake,
  "Legal & Compliance": Scale,
  Technology: Cpu,
  "Transport Company": Truck,
  Restaurant: UtensilsCrossed,
  Healthcare: Stethoscope,
  Retail: ShoppingBag,
  Manufacturing: Factory,
  Construction: HardHat,
  Agriculture: Sprout,
  Education: GraduationCap,
  "Real Estate": Building,
  SaaS: AppWindow,
  Website: Globe,
  "Mobile App": Smartphone,
  CRM: Contact,
  ERP: Network,
  "E-commerce": ShoppingCart,
  Analytics: BarChart3,
  "AI Systems": Bot,
  Frontend: LayoutDashboard,
  Backend: Server,
  "Data Engineering": Database,
  DevOps: Infinity,
  Cloud: Cloud,
  Cybersecurity: ShieldCheck,
  "AI Engineering": BrainCircuit,
  "UI/UX": PenTool
};

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function RoadmapTile({ name, chip, ring }: { name: string; chip: string; ring: string }) {
  const Icon = ICONS[name] ?? Milestone;
  return (
    <Link
      href={`/roadmaps/${toSlug(name)}`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-flow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        ring
      )}
    >
      <Icon className={cn("h-4 w-4 shrink-0", chip)} />
      <span className="truncate">{name}</span>
    </Link>
  );
}

export default function RoadmapsPage() {
  const total = CATALOG.reduce((n, g) => n + g.roadmaps.length, 0);

  return (
    <AppShell>
      <section className="mx-auto max-w-2xl pt-10 text-center sm:pt-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Flow <span className="text-primary">Roadmaps</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          The business knowledge library — {total} structured roadmaps across {CATALOG.length}{" "}
          categories. Browse and pick your path.
        </p>
      </section>

      {CATALOG.map((group) => {
        const HeaderIcon = group.icon;
        return (
          <section key={group.category} className="mt-14">
            <div className="mb-6 flex items-center justify-center gap-2.5">
              <HeaderIcon className={cn("h-5 w-5", group.chip)} />
              <h2 className="text-lg font-bold tracking-tight text-foreground">{group.category}</h2>
              <span className="text-sm font-medium text-muted-foreground">
                {group.roadmaps.length}
              </span>
            </div>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
              {group.roadmaps.map((name) => (
                <RoadmapTile key={name} name={name} chip={group.chip} ring={group.ring} />
              ))}
            </div>
          </section>
        );
      })}
    </AppShell>
  );
}
