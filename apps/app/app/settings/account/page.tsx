import { SettingsShell, ModuleScaffold } from "@/components/module-scaffold";

export default function SettingsAccountPage() {
  return (
    <SettingsShell title="Account" description="Email, password, and account management.">
      <ModuleScaffold
        title="Account settings"
        description="Update login credentials, connected accounts, and account deletion options."
      />
    </SettingsShell>
  );
}
