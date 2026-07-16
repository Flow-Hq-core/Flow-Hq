import Link from "next/link";
import { APP_NAME, PLATFORM_NAV } from "@flow-hq/shared";

export function AppShell({
  children,
  title,
  description
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/dashboard" className="text-lg font-bold tracking-tight">
            {APP_NAME.split("-")[0]}
            <span className="text-primary">-{APP_NAME.split("-")[1]}</span>
          </Link>
          <nav className="hidden flex-wrap items-center gap-4 text-sm text-muted-foreground md:flex">
            {PLATFORM_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        {(title || description) && (
          <div className="mb-8">
            {title && <h1 className="text-3xl font-semibold">{title}</h1>}
            {description && <p className="mt-2 max-w-3xl text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
