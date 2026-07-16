import { AppShell } from "@/components/app-shell";
import { ModuleScaffold } from "@/components/module-scaffold";

export default function NewProjectPage() {
  return (
    <AppShell
      title="New Project"
      description="Choose how you want to start — blank, from roadmap, from template, or AI generated."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ModuleScaffold
          title="Blank project"
          description="Start from scratch with goals, requirements, and timeline."
          primaryAction={{ label: "Create blank project", href: "/projects/sample-project" }}
        />
        <ModuleScaffold
          title="From roadmap"
          description="Turn a roadmap milestone into an executable project."
          primaryAction={{ label: "Browse roadmaps", href: "/roadmaps" }}
        />
        <ModuleScaffold
          title="From template"
          description="Use a proven project template as your starting point."
          primaryAction={{ label: "Browse templates", href: "/templates" }}
        />
        <ModuleScaffold
          title="AI generated"
          description="Describe your idea and let Flow generate tasks, milestones, and risks."
          primaryAction={{ label: "Generate with AI", href: "/business-ai" }}
        />
      </div>
    </AppShell>
  );
}
