"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACCOUNT_MENU } from "@flow-hq/shared";
import { cn } from "@/lib/utils";

/**
 * Avatar dropdown. Dependency-free for the same reason the marketing MegaMenu
 * is — the app has no dropdown primitive, and this needs click-outside plus
 * Escape, which is a few lines rather than a new Radix package.
 */
export function AccountMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Navigating away should never leave the menu hanging open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          open && "bg-accent"
        )}
      >
        {/* Placeholder until there's a real session to read a name from. */}
        <span aria-hidden>F</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-flow-md"
        >
          {ACCOUNT_MENU.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:bg-muted",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
