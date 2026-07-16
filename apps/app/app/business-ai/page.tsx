import { AppShell } from "@/components/app-shell";
import { ModuleScaffold } from "@/components/module-scaffold";

export default function BusinessAIPage() {
  return (
    <AppShell
      title="Business AI"
      description="AI business advisor — analyze ideas, operations, marketing, and competition."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ModuleScaffold
          title="Business idea analysis"
          description="Evaluate a new idea with problems, opportunities, and an action plan."
          primaryAction={{ label: "Start analysis", href: "/business-ai" }}
          secondaryAction={{ label: "Create project", href: "/projects/new" }}
        />
        <ModuleScaffold
          title="Existing business review"
          description="Diagnose operations, marketing, and growth bottlenecks."
          primaryAction={{ label: "Run diagnostic", href: "/business-ai" }}
          secondaryAction={{ label: "Start roadmap", href: "/roadmaps" }}
        />
      </div>
    </AppShell>
  );
}
