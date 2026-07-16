"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME, APP_URL, MARKETING_NAV_LINKS } from "@flow-hq/shared";
import { Menu, X } from "lucide-react";

function getMarketingNavHref(link: (typeof MARKETING_NAV_LINKS)[number]) {
  return "appPath" in link ? `${APP_URL}${link.path}` : link.path;
}

function isExternalLink(link: (typeof MARKETING_NAV_LINKS)[number]) {
  return "appPath" in link;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
            {APP_NAME.split("-")[0]}
            <span className="text-primary">-{APP_NAME.split("-")[1]}</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {MARKETING_NAV_LINKS.map((link) =>
              isExternalLink(link) ? (
                <a
                  key={link.label}
                  href={getMarketingNavHref(link)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={getMarketingNavHref(link)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm font-medium text-muted-foreground" asChild>
            <a href={`${APP_URL}/dashboard`}>Login</a>
          </Button>
          <Button size="sm" className="shadow-flow-blue" asChild>
            <a href={`${APP_URL}/dashboard`}>Get Started</a>
          </Button>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {MARKETING_NAV_LINKS.map((link) =>
            isExternalLink(link) ? (
              <a
                key={link.label}
                href={getMarketingNavHref(link)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={getMarketingNavHref(link)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 flex flex-col gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href={`${APP_URL}/dashboard`}>Login</a>
            </Button>
            <Button size="sm" asChild>
              <a href={`${APP_URL}/dashboard`}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
