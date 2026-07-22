export const APP_NAME = "Flow-HQ";
export const MARKETING_URL = process.env.NEXT_PUBLIC_MARKETING_URL ?? "http://localhost:3000";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

export type FlowFeature = {
  title: string;
  description: string;
};

export type FlowProduct = {
  /** Matches the module's route segment in apps/app. */
  id: "roadmaps" | "projects" | "business-ai" | "playlists";
  name: string;
  tagline: string;
  cta: string;
  /** Deep link into the SaaS app, appended to APP_URL. */
  appPath: string;
  /** Marketing deep-dive page. */
  marketingPath: string;
  /** Headline for the product's marketing page. */
  headline: string;
  description: string;
  features: readonly FlowFeature[];
};

/**
 * The four Flow products, in journey order: discover a path, execute it,
 * get intelligence on it, learn what you're missing.
 *
 * Single source for the marketing Products dropdown, the homepage products
 * overview, and the /products hub.
 */
export const FLOW_PRODUCTS: readonly FlowProduct[] = [
  {
    id: "roadmaps",
    name: "Flow Roadmaps",
    tagline: "Find the path from beginner to expert.",
    cta: "Explore Roadmaps",
    appPath: "/roadmaps",
    marketingPath: "/products/roadmaps",
    headline: "Find the path.",
    description:
      "Structured routes from where you are to where you're going. Every node is a real step, in the order it actually goes in — so you stop guessing what comes next.",
    features: [
      {
        title: "Visual maps, not checklists",
        description: "See the whole path at once, with every milestone and how they connect."
      },
      {
        title: "Ordered, not listed",
        description: "Steps are sequenced, so you know what has to come first and what can wait."
      },
      {
        title: "Progress that carries",
        description: "Finish work elsewhere in Flow and your roadmap moves with you."
      }
    ]
  },
  {
    id: "projects",
    name: "Flow Projects",
    tagline: "Turn plans into execution.",
    cta: "Create Project",
    appPath: "/projects",
    marketingPath: "/products/projects",
    headline: "Turn plans into execution.",
    description:
      "Take any step of your roadmap and make it real work — tasks, timeline, and risks, generated rather than hand-built.",
    features: [
      {
        title: "Straight from a roadmap step",
        description: "Turn any milestone into a project without restating the context."
      },
      {
        title: "Generated, not blank",
        description: "Goals, requirements, tasks, and a timeline come pre-drafted."
      },
      {
        title: "Risks surfaced early",
        description: "Know what's likely to derail the work before it does."
      }
    ]
  },
  {
    id: "business-ai",
    name: "Flow Business AI",
    tagline: "Analyze ideas and businesses.",
    cta: "Try Business AI",
    appPath: "/business-ai",
    marketingPath: "/products/business-ai",
    headline: "Know what to fix next.",
    description:
      "Analyze an idea or a running business. Get findings, recommendations, and an action plan you can turn straight into a project.",
    features: [
      {
        title: "Findings, not vibes",
        description: "Specific weaknesses and leaks, each with the evidence behind it."
      },
      {
        title: "An actual plan",
        description: "Recommendations arrive as ordered actions, not a wall of advice."
      },
      {
        title: "One click to execution",
        description: "Any finding becomes a project or a roadmap without retyping it."
      }
    ]
  },
  {
    id: "playlists",
    name: "Flow Playlists",
    tagline: "Learn faster with curated paths.",
    cta: "Explore Learning",
    appPath: "/playlists",
    marketingPath: "/products/playlists",
    headline: "Learn faster. Learn in order.",
    description:
      "Curated paths tied to the gaps in your roadmap — not a catalog you have to sort through yourself.",
    features: [
      {
        title: "Sequenced, not searchable",
        description: "Lessons come in the order that actually builds the skill."
      },
      {
        title: "Tied to your gaps",
        description: "Playlists follow what your roadmap and projects say you're missing."
      },
      {
        title: "Finishing counts",
        description: "Completing a playlist updates your roadmap progress automatically."
      }
    ]
  }
] as const;

export type FlowUseCase = {
  slug: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  /** How the products chain together for this job. */
  path: readonly { product: string; action: string }[];
};

/**
 * The five jobs from Fullmap.md section 6. Deliberately spans business,
 * career, and skills — Flow-HQ is not founders-only.
 */
export const FLOW_USE_CASES: readonly FlowUseCase[] = [
  {
    slug: "starting-a-business",
    title: "Starting a business",
    tagline: "Go from idea to a validated first 90 days.",
    headline: "Start with a plan, not a blank page.",
    description:
      "Turn an idea into a structured path, pressure-test it before you build, and run the first 90 days as real work.",
    path: [
      { product: "Business AI", action: "Pressure-test the idea before you commit." },
      { product: "Roadmaps", action: "Get the path from idea to first customers." },
      { product: "Projects", action: "Run the first 90 days as tracked work." }
    ]
  },
  {
    slug: "learning-a-skill",
    title: "Learning a skill",
    tagline: "Follow a sequenced path instead of collecting tabs.",
    headline: "Stop collecting. Start finishing.",
    description:
      "Pick the skill, get the order it's actually learned in, and watch your progress move as you go.",
    path: [
      { product: "Roadmaps", action: "See the full path from beginner to competent." },
      { product: "Playlists", action: "Work the lessons in the order that builds the skill." },
      { product: "Projects", action: "Prove it by building something real." }
    ]
  },
  {
    slug: "launching-a-product",
    title: "Launching a product",
    tagline: "From spec to launch without losing the thread.",
    headline: "Launch without losing the thread.",
    description:
      "Keep scope, sequence, and risks in one place, from first spec through to the day you ship.",
    path: [
      { product: "Roadmaps", action: "Map everything the launch depends on." },
      { product: "Projects", action: "Turn the map into tasks, owners, and a timeline." },
      { product: "Business AI", action: "Find the gaps before your customers do." }
    ]
  },
  {
    slug: "growing-a-company",
    title: "Growing an existing company",
    tagline: "Find what's leaking, then fix it as tracked work.",
    headline: "Find the leak. Fix the leak.",
    description:
      "Get an honest read on what's holding growth back, and turn each finding into work someone actually owns.",
    path: [
      { product: "Business AI", action: "Analyze the business and surface what's weak." },
      { product: "Roadmaps", action: "See which layer the problem really sits in." },
      { product: "Projects", action: "Fix it as tracked, owned work." }
    ]
  },
  {
    slug: "managing-projects",
    title: "Managing projects",
    tagline: "Tasks, timeline, and risks — generated, not hand-built.",
    headline: "Less setup. More execution.",
    description:
      "Skip the blank board. Projects arrive with goals, tasks, and a timeline already drafted.",
    path: [
      { product: "Projects", action: "Start from a generated plan, not an empty board." },
      { product: "Business AI", action: "Get told what's likely to derail it." },
      { product: "Playlists", action: "Close the skill gaps the work exposes." }
    ]
  }
] as const;

export type FlowSolution = {
  slug: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  highlights: readonly string[];
  /** Pricing tier this audience typically lands on. */
  plan: string;
  /** Short label for the homepage audience tabs. */
  audience: string;
  /** What this audience actually does in Flow. Grounded in the four products. */
  capabilities: readonly FlowFeature[];
};

/**
 * Everyone Flow is for — a breadth statement for the homepage marquee, not
 * navigation. Deliberately wider than FLOW_SOLUTIONS: those four are the
 * segments with dedicated pages, these are simply who shows up.
 *
 * Kept long on purpose. A marquee implies abundance, so a short list loops
 * visibly and reads as padding.
 */
export const FLOW_AUDIENCES: readonly string[] = [
  "Founders",
  "Product managers",
  "Developers",
  "Designers",
  "Marketers",
  "Consultants",
  "Students",
  "Career changers",
  "Freelancers",
  "Operators",
  "Researchers",
  "Side-project builders",
  "Teams",
  "Writers"
] as const;

export type FlowOutcome = {
  title: string;
  description: string;
};

/**
 * Outcomes rather than features — what a user leaves with, not what we ship.
 * Each maps to a product: clarity/direction from Roadmaps, momentum from
 * Projects, insight from Business AI.
 */
export const FLOW_OUTCOMES: readonly FlowOutcome[] = [
  { title: "Clarity", description: "See the whole path" },
  { title: "Direction", description: "Know what comes next" },
  { title: "Momentum", description: "Finish what you start" },
  { title: "Insight", description: "Know what to fix" }
] as const;

/**
 * Audience segmentation. Not specified in Fullmap.md or docs/Cluade — added
 * on request, mirroring the pricing tiers (Free/Pro = individuals,
 * Business = teams). Revisit if the go-to-market story firms up.
 */
export const FLOW_SOLUTIONS: readonly FlowSolution[] = [
  {
    slug: "founders",
    title: "For founders",
    audience: "Founders",
    tagline: "Build the company without missing a layer.",
    headline: "Every layer, in order.",
    description:
      "Most businesses don't fail at effort — they fail at a layer nobody looked at. Flow maps all of them and tells you which one is hurting.",
    highlights: [
      "Validate the idea before you build it",
      "See every layer, from foundation to innovation",
      "Turn findings into work you can actually ship"
    ],
    plan: "Pro",
    capabilities: [
      { title: "Idea validation", description: "Pressure-test it before you build" },
      { title: "Business roadmap", description: "Every layer, in the right order" },
      { title: "First 90 days", description: "Run the launch as tracked work" },
      { title: "Positioning check", description: "Find where you blend in" },
      { title: "Competitor research", description: "Know the field you're entering" },
      { title: "Skill gaps", description: "Learn what the build demands" }
    ]
  },
  {
    slug: "teams",
    title: "For teams",
    audience: "Teams",
    tagline: "One shared path instead of four private plans.",
    headline: "Everyone on the same map.",
    description:
      "Shared roadmaps and projects, so the plan lives in one place rather than in four heads and a spreadsheet.",
    highlights: [
      "Shared workspace roadmaps",
      "Projects with owners and timelines",
      "Progress visible without a status meeting"
    ],
    plan: "Business",
    capabilities: [
      { title: "Shared roadmaps", description: "One plan the whole team reads" },
      { title: "Owned projects", description: "Tasks with names against them" },
      { title: "Timelines", description: "See what lands when" },
      { title: "Templates", description: "Reuse what already worked" },
      { title: "Team progress", description: "Status without the meeting" },
      { title: "Clean handoffs", description: "Context travels with the work" }
    ]
  },
  {
    slug: "learners",
    title: "For learners",
    audience: "Learners",
    tagline: "A career path is a roadmap too.",
    headline: "The order nobody tells you.",
    description:
      "Courses give you pieces. Flow gives you the sequence — what to learn, in what order, and what to build to prove it.",
    highlights: [
      "Structured paths from beginner to competent",
      "Playlists tied to your actual gaps",
      "Build real projects, not toy exercises"
    ],
    plan: "Free",
    capabilities: [
      { title: "Career roadmaps", description: "Beginner to competent, sequenced" },
      { title: "Curated playlists", description: "In the order that builds the skill" },
      { title: "Portfolio projects", description: "Build something that proves it" },
      { title: "Gap analysis", description: "Find what you're actually missing" },
      { title: "Progress tracking", description: "Finishing a lesson moves the map" },
      { title: "No tab collecting", description: "One path instead of forty links" }
    ]
  },
  {
    slug: "consultants",
    title: "For consultants",
    audience: "Consultants",
    tagline: "Diagnose faster. Deliver with structure.",
    headline: "Diagnose in hours, not weeks.",
    description:
      "Run a structured analysis on a client business, then hand over a plan that's already scoped into real work.",
    highlights: [
      "Repeatable diagnostics across clients",
      "Findings that convert straight into projects",
      "Templates you reuse on the next engagement"
    ],
    plan: "Business",
    capabilities: [
      { title: "Client diagnostics", description: "Structured, not improvised" },
      { title: "Repeatable analysis", description: "Same rigour every engagement" },
      { title: "Findings to projects", description: "Deliver a plan, not a deck" },
      { title: "Deliverable templates", description: "Stop rebuilding the wrapper" },
      { title: "Multi-client view", description: "Track every engagement at once" },
      { title: "Evidence attached", description: "Every finding shows its working" }
    ]
  }
] as const;

export const DASHBOARD_QUICK_LINKS = [
  { href: "/explore", label: "Explore modules" },
  { href: "/roadmaps", label: "Open roadmaps" },
  { href: "/projects", label: "Projects" },
  { href: "/business-ai", label: "Business AI" }
] as const;

/**
 * Browse categories, per Fullmap.md section 3.
 *
 * Note: these replaced a domain-level list (Data Engineering, Software
 * Development, Marketing, Finance, Transport). Those are roadmap *domains*
 * and now sit under Technology/Business; Career and Skills have no roadmaps
 * yet, which the UI states rather than hides.
 */
export const ROADMAP_CATEGORIES = ["Business", "Technology", "Career", "Skills"] as const;

export type RoadmapCategory = (typeof ROADMAP_CATEGORIES)[number];

export type RoadmapLink = {
  href: string;
  label: string;
  description: string;
  category: RoadmapCategory;
  level: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  popular?: boolean;
  /** Placeholder until progress comes from @flow-hq/database. */
  progress?: number;
};

export const ROADMAP_LINKS: readonly RoadmapLink[] = [
  {
    href: "/roadmaps/business-101",
    label: "Business 101",
    description: "The fundamentals, from business model to first customers.",
    category: "Business",
    level: "Beginner",
    featured: true,
    popular: true,
    progress: 45
  },
  {
    href: "/roadmaps/business-operating",
    label: "Business Operating",
    description: "Run the business: operations, retention, finance.",
    category: "Business",
    level: "Intermediate",
    popular: true
  },
  {
    href: "/roadmaps/business-operating-flow",
    label: "Business Operating · Flow",
    description: "The full operating map across every strategic layer.",
    category: "Business",
    level: "Advanced",
    featured: true,
    progress: 12
  },
  {
    href: "/roadmaps/data-engineering-flow",
    label: "Data Engineering · Flow",
    description: "From ingestion to pipelines to production systems.",
    category: "Technology",
    level: "Intermediate",
    featured: true,
    popular: true
  }
] as const;

/** Which dataset a mega menu renders. */
export type MarketingMenuId = "products" | "use-cases" | "solutions";

export type MarketingNavItem =
  | { label: string; kind: "menu"; menu: MarketingMenuId; hubPath: string }
  | { label: string; kind: "link"; path: string };

/**
 * Public site navigation.
 *
 * Products are reachable only through the Products menu — a product must
 * never sit at the top level, and the public nav must never link straight
 * into the authenticated app.
 *
 * Note: Fullmap.md specifies only Products/Resources/Pricing/About. Use Cases
 * and Solutions were added on request and are not in that spec or in
 * 01-information-architecture.md; reconcile the docs if they're staying.
 *
 * Resources stays a plain link until /resources/{blog,guides,templates}
 * exist — Fullmap.md specifies it as a menu, so it becomes one once they do.
 */
export const MARKETING_NAV: readonly MarketingNavItem[] = [
  { label: "Products", kind: "menu", menu: "products", hubPath: "/products" },
  { label: "Use Cases", kind: "menu", menu: "use-cases", hubPath: "/use-cases" },
  { label: "Solutions", kind: "menu", menu: "solutions", hubPath: "/solutions" },
  { label: "Resources", kind: "link", path: "/resources" },
  { label: "Pricing", kind: "link", path: "/pricing" },
  { label: "About", kind: "link", path: "/about" }
] as const;

export type AppNavItem = {
  href: string;
  label: string;
};

/**
 * The app's primary nav, rendered as a horizontal bar in the header.
 *
 * These are the places you go to *do* something, which is why the list is
 * flat: the sidebar's Build/Learn/Intelligence grouping was a way to fill
 * vertical space, and a horizontal bar has none to fill. Six destinations is
 * already the ceiling — anything more belongs behind Explore.
 *
 * Dashboard is deliberately absent. It's where you review your own state, not
 * a product surface, so it lives in the account menu with the rest of "your
 * stuff" — see ACCOUNT_MENU.
 */
export const APP_NAV: readonly AppNavItem[] = [
  { href: "/explore", label: "Explore" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/projects", label: "Projects" },
  { href: "/business-ai", label: "Business AI" },
  { href: "/playlists", label: "Playlists" },
  { href: "/templates", label: "Templates" }
] as const;

/**
 * The avatar dropdown: everything scoped to *you* rather than to the work.
 * Dashboard leads because it's the most-visited of these, not because it's a
 * settings screen.
 */
export const ACCOUNT_MENU: readonly AppNavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/billing", label: "Billing" }
] as const;

export const MOBILE_NAV: readonly AppNavItem[] = [
  { href: "/dashboard", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/projects/new", label: "Create" },
  { href: "/projects", label: "Projects" },
  { href: "/settings/profile", label: "Profile" }
] as const;

/** @deprecated Use APP_NAV for app navigation */
export const PLATFORM_NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/explore", label: "Explore" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/business-ai", label: "Business AI" },
  { href: "/projects", label: "Projects" },
  { href: "/playlists", label: "Playlists" },
  { href: "/settings", label: "Settings" },
  { href: "/billing", label: "Billing" }
] as const;

export const SETTINGS_NAV: readonly AppNavItem[] = [
  { href: "/settings/profile", label: "Profile" },
  { href: "/settings/account", label: "Account" },
  { href: "/settings/preferences", label: "Preferences" },
  { href: "/settings/notifications", label: "Notifications" },
  { href: "/settings/security", label: "Security" }
] as const;

/**
 * @deprecated The flat card grid was replaced by EXPLORE_ROWS — one row per
 * product, Higgsfield-style. Kept only until nothing imports it.
 */
export const EXPLORE_CARDS = [
  { title: "Business Roadmaps", href: "/roadmaps", description: "Explore Flow roadmap modules and execution views." },
  { title: "Business AI", href: "/business-ai", description: "AI business advisor for ideas, operations, and growth." },
  { title: "Projects", href: "/projects", description: "Turn ideas and roadmap steps into execution plans." },
  { title: "Playlists", href: "/playlists", description: "Curated learning paths tied to your roadmaps." },
  { title: "Templates", href: "/templates", description: "Reusable business, project, and roadmap templates." },
  { title: "Industries", href: "/explore?filter=industries", description: "Industry-specific roadmap collections." },
  { title: "Popular", href: "/explore?filter=popular", description: "Frequently used modules and resources." },
  { title: "Recent", href: "/explore?filter=recent", description: "Recently viewed platform areas." }
] as const;

export type ExploreCard = {
  title: string;
  description: string;
  href: string;
  /** Small line under the description, e.g. "7 lessons · Business". */
  meta?: string;
  /** Optional pill above the title, e.g. a level or "New". */
  badge?: string;
  /**
   * Public path to the tile image (in apps/app/public). The page renders it
   * only when the file actually exists and otherwise falls back to the drawn
   * motif, so these can point at files that aren't generated yet. Filenames
   * are specified in docs/explore-image-shotlist.md.
   */
  image?: string;
  /**
   * Public path to a looping video for the tile. Takes precedence over `image`
   * when the file exists; `image` (or the motif) is the poster/fallback while
   * it loads or under reduced-motion. Same build-time existence check.
   */
  video?: string;
};

export type ExploreRow = {
  /** Matches a FlowProduct id so the page can pick the product's icon. */
  id: FlowProduct["id"];
  title: string;
  subtitle: string;
  /** "See all" destination — the product's own surface. */
  href: string;
  cards: readonly ExploreCard[];
};

/**
 * Explore, one row per product (the Higgsfield pattern: each row is a single
 * product, its cards scrolling horizontally).
 *
 * The cards are not invented for this page — they're the same seed content
 * each product surface already shows: roadmaps come straight from
 * ROADMAP_LINKS; the other three mirror the starter sets on their own pages.
 * When those move to @flow-hq/database, this becomes a query, but the shape
 * stays the same.
 */
export const EXPLORE_ROWS: readonly ExploreRow[] = [
  {
    id: "roadmaps",
    title: "Roadmaps",
    subtitle: "Structured routes from beginner to expert.",
    href: "/roadmaps",
    cards: ROADMAP_LINKS.map((r) => ({
      title: r.label,
      description: r.description,
      href: r.href,
      badge: r.level,
      meta: r.category,
      image: `/explore/${r.href.split("/").pop()}.webp`
    }))
  },
  {
    id: "business-ai",
    title: "Business AI",
    subtitle: "Your business consultant — diagnose, plan, and generate.",
    href: "/business-ai",
    cards: [
      {
        title: "Diagnose a business",
        description: "Find what's holding it back, with the evidence.",
        href: "/business-ai",
        image: "/explore/diagnose.webp"
      },
      {
        title: "Generate an SOP",
        description: "Turn how you work into a repeatable system.",
        href: "/business-ai",
        image: "/explore/sop.webp"
      },
      {
        title: "Business model canvas",
        description: "Model the whole business on one page.",
        href: "/business-ai",
        image: "/explore/canvas.webp"
      },
      {
        title: "Improve pricing",
        description: "Sharpen what you charge and why.",
        href: "/business-ai",
        image: "/explore/pricing.webp"
      },
      {
        title: "Fix marketing",
        description: "Positioning, messaging, and channels.",
        href: "/business-ai",
        image: "/explore/marketing.webp"
      }
    ]
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "Turn a plan into work you can actually run.",
    href: "/projects",
    cards: [
      {
        title: "Product launch",
        description: "Spec to launch checklist.",
        href: "/projects/new",
        image: "/explore/product-launch.webp"
      },
      {
        title: "Market research",
        description: "ICP, competitors, demand signals.",
        href: "/projects/new",
        image: "/explore/market-research.webp"
      },
      {
        title: "Hiring plan",
        description: "Roles, sequence, and onboarding.",
        href: "/projects/new",
        image: "/explore/hiring-plan.webp"
      }
    ]
  },
  {
    id: "playlists",
    title: "Playlists",
    subtitle: "Learn in order, tied to the gaps in your work.",
    href: "/playlists",
    cards: [
      {
        title: "Positioning Mastery",
        description: "Find the wedge, tell the story, test it.",
        href: "/playlists/positioning-mastery",
        meta: "7 lessons · Business",
        image: "/explore/positioning-mastery.webp"
      },
      {
        title: "Python Mastery",
        description: "From syntax to shipping real tools.",
        href: "/playlists/python-mastery",
        meta: "24 lessons · Technology",
        image: "/explore/python-mastery.webp"
      },
      {
        title: "Unit Economics",
        description: "Know whether the business actually works.",
        href: "/playlists/unit-economics",
        meta: "9 lessons · Business",
        image: "/explore/unit-economics.webp"
      }
    ]
  }
] as const;

/**
 * @deprecated Unused since /projects moved to the Fullmap.md section 4 layout
 * (Active / Templates / AI Generator / Recent). Remove if no tabbed view
 * returns.
 */
export const PROJECT_TABS = [
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
  { id: "templates", label: "Templates" },
  { id: "archived", label: "Archived" }
] as const;
