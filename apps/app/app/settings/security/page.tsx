import { SettingsShell, ModuleScaffold } from "@/components/module-scaffold";

export default function SettingsSecurityPage() {
  return (
    <SettingsShell title="Security" description="Two-factor authentication, sessions, and security logs.">
      <ModuleScaffold
        title="Security settings"
        description="Manage 2FA, active sessions, and security alerts."
      />
    </SettingsShell>
  );
}
