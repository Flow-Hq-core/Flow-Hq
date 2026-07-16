const COLS = [
  { label: "Product", links: ["Generate", "Explore", "Pricing", "Changelog"] },
  { label: "Resources", links: ["Docs", "Guides", "API", "Templates"] },
  { label: "Community", links: ["Discord", "Twitter", "YouTube", "Showcase"] },
  { label: "Company", links: ["About", "Blog", "Careers", "Contact"] },
];

export function ProjectsFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 border-b hairline pb-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg border-[1.5px] border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--ink)]">
                <span className="font-display text-lg leading-none">F</span>
              </div>
              <span className="font-display text-xl tracking-tight">Flow Project</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Roadmaps for software, hardware, AI, and startup builders. From spark to ship.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.label}>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</h4>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-foreground hover:text-primary">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Flow Project. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
