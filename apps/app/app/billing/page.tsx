import { AppShell } from "@/components/app-shell";

export default function BillingPage() {
  return (
    <AppShell title="Billing" description="Central billing surface for Flow-HQ plans and subscriptions.">
      <div className="rounded-xl border border-border bg-card p-10">
        <p className="text-lg text-muted-foreground">Billing scaffold ready for future plan and subscription integration.</p>
      </div>
    </AppShell>
  );
}
