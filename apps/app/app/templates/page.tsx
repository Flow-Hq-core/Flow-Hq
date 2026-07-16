import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const templateCategories = [
  { title: "Business templates", href: "/templates?category=business" },
  { title: "Project templates", href: "/templates?category=projects" },
  { title: "Roadmap templates", href: "/templates?category=roadmaps" },
  { title: "AI prompts", href: "/templates?category=ai-prompts" }
] as const;

export default function TemplatesPage() {
  return (
    <AppShell
      title="Templates"
      description="Reusable business, project, roadmap, and AI prompt templates."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {templateCategories.map((category) => (
          <Link key={category.title} href={category.href}>
            <Card className="p-6 transition-shadow hover:shadow-flow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>Preview templates, then use them to create a project or roadmap.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
