import { SettingsShell, ModuleScaffold } from "@/components/module-scaffold";

export default function SettingsProfilePage() {
  return (
    <SettingsShell title="Profile" description="Manage your public profile and display preferences.">
      <ModuleScaffold
        title="Profile settings"
        description="Name, avatar, bio, and workspace visibility will be configured here."
      />
    </SettingsShell>
  );
}
