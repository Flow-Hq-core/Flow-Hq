import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SettingsNav } from "@/components/settings-nav";

export function SettingsShell({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <AppShell title={title} description={description}>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <SettingsNav />
        <div>{children}</div>
      </div>
    </AppShell>
  );
}

export function ModuleScaffold({
  title,
  description,
  primaryAction,
  secondaryAction
}: {
  title: string;
  description: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}) {
  return (
    <Card className="p-8">
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2 text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      {(primaryAction || secondaryAction) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {primaryAction && (
            <Button asChild>
              <Link href={primaryAction.href}>{primaryAction.label}</Link>
            </Button>
          )}
          {secondaryAction && (
            <Button variant="outline" asChild>
              <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
