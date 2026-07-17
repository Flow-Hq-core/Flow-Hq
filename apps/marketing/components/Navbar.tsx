"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MegaMenu, { getMenuData } from "@/components/nav/MegaMenu";
import { APP_NAME, APP_URL, MARKETING_NAV, type MarketingMenuId } from "@flow-hq/shared";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MarketingMenuId | null>(null);
  const [activeRail, setActiveRail] = useState("featured");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // Restored scroll position on load should be respected.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mega menu; click-outside dismisses it.
  useEffect(() => {
    if (!openMenu) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const open = (menu: MarketingMenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Each menu reopens on its first rail group.
    if (menu !== openMenu) setActiveRail("featured");
    setOpenMenu(menu);
  };

  // Grace period so crossing the gap into the panel doesn't close it.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  // A menu needs a solid surface to attach to, so opening one re-docks the bar.
  const expanded = Boolean(openMenu) || mobileOpen;
  const floating = scrolled && !expanded;

  return (
    <nav ref={navRef} className="fixed inset-x-0 top-0 z-50" onMouseLeave={scheduleClose}>
      <div
        className={cn(
          "transition-all duration-300 ease-out",
          floating
            ? "mx-3 mt-3 rounded-2xl border border-border/60 bg-background/70 shadow-flow-md backdrop-blur-xl"
            : expanded
              ? "border-b border-border bg-background"
              : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
            {APP_NAME.split("-")[0]}
            <span className="text-primary">-{APP_NAME.split("-")[1]}</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {MARKETING_NAV.map((item) =>
              item.kind === "menu" ? (
                <button
                  key={item.label}
                  aria-expanded={openMenu === item.menu}
                  aria-haspopup="true"
                  onMouseEnter={() => open(item.menu)}
                  onClick={() => (openMenu === item.menu ? setOpenMenu(null) : open(item.menu))}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    openMenu === item.menu
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openMenu === item.menu && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  onMouseEnter={scheduleClose}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium text-muted-foreground"
            asChild
          >
            <a href={`${APP_URL}/explore`}>Login</a>
          </Button>
          <Button size="sm" className="shadow-flow-blue" asChild>
            <a href={`${APP_URL}/explore`}>Get Started</a>
          </Button>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mega menu */}
      {openMenu && (
        <div
          className="hidden border-t border-border bg-muted/50 lg:block"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
        >
          <MegaMenu
            menu={openMenu}
            activeRail={activeRail}
            onRailChange={setActiveRail}
            onNavigate={() => setOpenMenu(null)}
          />
        </div>
      )}

      {/* Mobile */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] space-y-5 overflow-y-auto border-t border-border bg-background px-6 py-5 lg:hidden">
          {MARKETING_NAV.map((item) =>
            item.kind === "menu" ? (
              <div key={item.label}>
                <Link
                  href={item.hubPath}
                  onClick={() => setMobileOpen(false)}
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {item.label}
                </Link>
                <div className="space-y-1">
                  {getMenuData(item.menu).rail[0].entries.map((entry) => (
                    <Link
                      key={entry.key}
                      href={entry.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm font-medium text-foreground"
                    >
                      {entry.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null
          )}

          <div className="space-y-3 border-t border-border pt-4">
            {MARKETING_NAV.map((item) =>
              item.kind === "link" ? (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : null
            )}
          </div>

          <div className="flex flex-col gap-2 border-t border-border pt-4">
            <Button variant="ghost" size="sm" asChild>
              <a href={`${APP_URL}/explore`}>Login</a>
            </Button>
            <Button size="sm" asChild>
              <a href={`${APP_URL}/explore`}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
