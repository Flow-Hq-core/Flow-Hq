import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { APP_NAME } from "@flow-hq/shared";
import { Button } from "@/components/ui/button";
import { AccountMenu } from "@/components/account-menu";
import { AppNav } from "@/components/app-nav";
import { MobileNav } from "@/components/mobile-nav";

export function AppShell({
  children,
  title,
  description,
  fullWidth = false
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
          <Link href="/explore" className="shrink-0 text-lg font-bold tracking-tight">
            {APP_NAME.split("-")[0]}
            <span className="text-primary">-{APP_NAME.split("-")[1]}</span>
          </Link>

          <AppNav />

          {/* Search takes the slack between nav and actions, so it shrinks
              first on narrow viewports instead of pushing the nav off. */}
          <div className="ml-auto flex min-w-0 items-center gap-2">
            <div className="relative hidden w-full min-w-0 max-w-xs sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search roadmaps, projects, playlists…"
                className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>

            <AccountMenu />
          </div>
        </div>
      </header>

      <main
        className={
          fullWidth
            ? "pb-20 md:pb-0"
            : "mx-auto w-full max-w-7xl px-4 py-8 pb-20 sm:px-6 md:pb-8"
        }
      >
        {(title || description) && (
          <div className="mb-8">
            {title && <h1 className="text-3xl font-semibold">{title}</h1>}
            {description && (
              <p className="mt-2 max-w-3xl text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </main>

      <MobileNav />
    </div>
  );
}
