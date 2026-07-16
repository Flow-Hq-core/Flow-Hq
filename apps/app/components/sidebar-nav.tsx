"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAME, SIDEBAR_FOOTER_NAV, SIDEBAR_NAV, type SidebarNavItem } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

function NavLink({ item, nested = false }: { item: SidebarNavItem; nested?: boolean }) {
  const pathname = usePathname();
  const active =
    pathname === item.href ||
    (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));

  return (
    <Link
      href={item.href}
      className={cn(
        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        nested ? "pl-6" : "",
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {item.label}
    </Link>
  );
}

export function SidebarNav() {
  return (
    <nav className="flex h-full flex-col gap-6 px-3 py-4">
      <Link href="/dashboard" className="px-3 text-lg font-bold tracking-tight">
        {APP_NAME.split("-")[0]}
        <span className="text-primary">-{APP_NAME.split("-")[1]}</span>
      </Link>

      <div className="space-y-6">
        {SIDEBAR_NAV.map((group) => (
          <div key={group.label ?? group.items[0]?.href}>
            {group.label && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
            )}
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink key={item.href} item={item} nested={!!group.label} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-1 border-t border-border pt-4">
        {SIDEBAR_FOOTER_NAV.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>
    </nav>
  );
}
