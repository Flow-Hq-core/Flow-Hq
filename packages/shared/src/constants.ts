export const APP_NAME = "Flow-HQ";
export const MARKETING_URL = process.env.NEXT_PUBLIC_MARKETING_URL ?? "http://localhost:3000";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

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

export const MARKETING_NAV_LINKS = [
  { label: "Product", path: "/product" },
  { label: "Roadmap", path: "/roadmaps", appPath: true },
  { label: "Pricing", path: "/pricing" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" }
] as const;

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

export const EXPLORE_CARDS = [
  { title: "Business Roadmaps", href: "/roadmaps", description: "Explore Flow roadmap modules and execution views." },
  { title: "Business AI", href: "/business-ai", description: "Future module prepared for AI workflows." },
  { title: "Projects", href: "/projects", description: "AI-generated project roadmaps for software, hardware, and startups." },
  { title: "Playlists", href: "/playlists", description: "Prepared placeholder for curated learning paths." },
  { title: "Templates", href: "#", description: "Future reusable operating templates." },
  { title: "Industries", href: "#", description: "Industry-specific roadmap collections." },
  { title: "Popular", href: "#", description: "Frequently used modules and resources." },
  { title: "Recent", href: "#", description: "Recently viewed platform areas." }
] as const;
