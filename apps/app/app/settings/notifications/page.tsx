import { SettingsShell, ModuleScaffold } from "@/components/module-scaffold";

export default function SettingsNotificationsPage() {
  return (
    <SettingsShell title="Notifications" description="Control email and in-app notification preferences.">
      <ModuleScaffold
        title="Notification settings"
        description="Choose which roadmap, project, and AI updates you receive."
      />
    </SettingsShell>
  );
}
