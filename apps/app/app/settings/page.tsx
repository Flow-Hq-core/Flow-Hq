import { AppShell } from "@/components/app-shell";

export default function SettingsPage() {
  return (
    <AppShell title="Settings" description="Shared settings area for the Flow-HQ platform.">
      <div className="rounded-xl border border-border bg-card p-10">
        <p className="text-lg text-muted-foreground">Settings scaffold ready for account and workspace configuration.</p>
      </div>
    </AppShell>
  );
}
