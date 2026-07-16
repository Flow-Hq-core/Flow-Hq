"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SETTINGS_NAV } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

export function SettingsNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {SETTINGS_NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
