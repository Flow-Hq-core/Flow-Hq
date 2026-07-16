export const APP_NAME = "Flow-HQ";
export const MARKETING_URL = process.env.NEXT_PUBLIC_MARKETING_URL ?? "http://localhost:3000";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

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
    marketingPath: "/products/roadmaps"
  },
  {
    id: "projects",
    name: "Flow Projects",
    tagline: "Turn plans into execution.",
    cta: "Create Project",
    appPath: "/projects",
    marketingPath: "/products/projects"
  },
  {
    id: "business-ai",
    name: "Flow Business AI",
    tagline: "Analyze ideas and businesses.",
    cta: "Try Business AI",
    appPath: "/business-ai",
    marketingPath: "/products/business-ai"
  },
  {
    id: "playlists",
    name: "Flow Playlists",
    tagline: "Learn faster with curated paths.",
    cta: "Explore Learning",
    appPath: "/playlists",
    marketingPath: "/products/playlists"
  }
] as const;

export const DASHBOARD_QUICK_LINKS = [
  { href: "/explore", label: "Explore modules" },
  { href: "/roadmaps", label: "Open roadmaps" },
  { href: "/projects", label: "Projects" },
  { href: "/business-ai", label: "Business AI" }
] as const;

export const ROADMAP_LINKS = [
  { href: "/roadmaps/business-101", label: "Business 101", variant: "dark" },
  { href: "/roadmaps/business-operating", label: "Business Operating", variant: "dark" },
  { href: "/roadmaps/business-operating-flow", label: "Business Operating · Flow", variant: "primary" },
  { href: "/roadmaps/data-engineering-flow", label: "Data Engineering · Flow", variant: "primary" }
] as const;

export const ROADMAP_CATEGORIES = [
  "Business",
  "Data Engineering",
  "Software Development",
  "Marketing",
  "Finance",
  "Transport"
] as const;

export const MARKETING_NAV_LINKS = [
  { label: "Product", path: "/product" },
  { label: "Roadmap", path: "/roadmaps", appPath: true },
  { label: "Pricing", path: "/pricing" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" }
] as const;

export type SidebarNavItem = {
  href: string;
  label: string;
};

export type SidebarNavGroup = {
  label?: string;
  items: readonly SidebarNavItem[];
};

export const SIDEBAR_NAV: readonly SidebarNavGroup[] = [
  { items: [{ href: "/dashboard", label: "Dashboard" }, { href: "/explore", label: "Explore" }] },
  {
    label: "Build",
    items: [
      { href: "/roadmaps", label: "Roadmaps" },
      { href: "/projects", label: "Projects" }
    ]
  },
  {
    label: "Learn",
    items: [{ href: "/playlists", label: "Playlists" }]
  },
  {
    label: "Intelligence",
    items: [{ href: "/business-ai", label: "Business AI" }]
  },
  {
    label: "Resources",
    items: [{ href: "/templates", label: "Templates" }]
  }
] as const;

export const SIDEBAR_FOOTER_NAV: readonly SidebarNavItem[] = [
  { href: "/billing", label: "Billing" },
  { href: "/settings", label: "Settings" }
] as const;

export const MOBILE_NAV: readonly SidebarNavItem[] = [
  { href: "/dashboard", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/projects/new", label: "Create" },
  { href: "/projects", label: "Projects" },
  { href: "/settings/profile", label: "Profile" }
] as const;

/** @deprecated Use SIDEBAR_NAV for app navigation */
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

export const SETTINGS_NAV: readonly SidebarNavItem[] = [
  { href: "/settings/profile", label: "Profile" },
  { href: "/settings/account", label: "Account" },
  { href: "/settings/preferences", label: "Preferences" },
  { href: "/settings/notifications", label: "Notifications" },
  { href: "/settings/security", label: "Security" }
] as const;

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

export const PROJECT_TABS = [
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
  { id: "templates", label: "Templates" },
  { id: "archived", label: "Archived" }
] as const;
