"use client";

import Link from "next/link";

export function ProjectsNav() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/projects" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg border-[1.5px] border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--ink)]">
            <span className="font-display text-lg leading-none">F</span>
          </div>
          <span className="font-display text-xl tracking-tight">Flow Project</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#explore" className="hover:text-foreground">
            Explore
          </a>
          <a href="#how" className="hover:text-foreground">
            How it works
          </a>
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#community" className="hover:text-foreground">
            Community
          </a>
          <Link href="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">
            Back to app
          </Link>
          <button className="rounded-xl border-[1.5px] border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background shadow-[3px_3px_0_0_var(--primary)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_0_var(--primary)]">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
