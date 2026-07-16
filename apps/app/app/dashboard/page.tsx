import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { DASHBOARD_QUICK_LINKS } from "@flow-hq/shared";

export default function DashboardPage() {
  return (
    <AppShell
      title="Dashboard"
      description="The main platform is now structured as a multi-module SaaS app. Use the navigation to move between Roadmaps, Explore, Projects, Business AI, Playlists, Settings, and Billing."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {DASHBOARD_QUICK_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-flow-md"
          >
            <h2 className="text-lg font-semibold text-foreground">{item.label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Continue into this area of Flow-HQ.</p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
