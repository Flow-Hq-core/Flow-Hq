"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MOBILE_NAV } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {MOBILE_NAV.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-medium",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
