"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {APP_NAV.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.label}
            {/* Underline rather than a pill: the header is dense, and a filled
                background at this size reads as a button, not a location. */}
            {active && (
              <span
                aria-hidden
                className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-primary"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
