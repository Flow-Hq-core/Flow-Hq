import Link from "next/link";
import { Bell } from "lucide-react";
import { APP_NAME } from "@flow-hq/shared";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AccountMenu } from "@/components/account-menu";
import { AppNav } from "@/components/app-nav";
import { MobileNav } from "@/components/mobile-nav";

export function AppShell({
  children,
  title,
  description,
  fullWidth = false,
  dark = false
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  fullWidth?: boolean;
  /** Flip the whole shell (header + body) to the dark ground. */
  dark?: boolean;
}) {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", dark && "dark")}>
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
          <Link href="/explore" className="shrink-0 text-lg font-bold tracking-tight">
            {APP_NAME.split("-")[0]}
            <span className="text-primary">-{APP_NAME.split("-")[1]}</span>
          </Link>

          <AppNav />

          <div className="ml-auto flex items-center gap-2">
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
