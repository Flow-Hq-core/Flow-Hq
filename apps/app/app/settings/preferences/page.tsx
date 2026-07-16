import { SettingsShell, ModuleScaffold } from "@/components/module-scaffold";

export default function SettingsPreferencesPage() {
  return (
    <SettingsShell title="Preferences" description="Theme, language, and default module preferences.">
      <ModuleScaffold
        title="Preferences"
        description="Configure appearance, locale, and default starting modules."
      />
    </SettingsShell>
  );
}
