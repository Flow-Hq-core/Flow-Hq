import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { SidebarNav } from "@/components/sidebar-nav";

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
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-border bg-background md:block">
          <SidebarNav />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-border bg-background/90 px-4 backdrop-blur sm:px-6">
            <div className="flex min-w-0 flex-1 items-center gap-3 md:max-w-md">
              <div className="relative hidden w-full sm:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search roadmaps, projects, playlists…"
                  className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Link href="/dashboard" className="text-lg font-bold tracking-tight md:hidden">
                Flow<span className="text-primary">-HQ</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/settings/profile">Profile</Link>
              </Button>
            </div>
          </header>

          <main className={fullWidth ? "flex-1 pb-20 md:pb-0" : "mx-auto w-full max-w-7xl flex-1 px-4 py-8 pb-20 sm:px-6 md:pb-8"}>
            {(title || description) && (
              <div className="mb-8">
                {title && <h1 className="text-3xl font-semibold">{title}</h1>}
                {description && <p className="mt-2 max-w-3xl text-muted-foreground">{description}</p>}
              </div>
            )}
            {children}
          </main>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
