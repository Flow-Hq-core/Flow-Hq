import { Boxes, Database, FileText, Lightbulb, Route, Layers } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptBox } from "@/components/ai/prompt-box";

const PHRASES = [
  "Brainstorm my product",
  "Draft a PRD",
  "Design the user flows",
  "Plan the architecture",
  "Choose a tech stack",
  "Design the database",
  "Plan the API"
];

const EXAMPLES = [
  "Draft a PRD for a habit-tracking app",
  "Design the user flows for a checkout",
  "Plan the architecture for a group-chat app"
];

/**
 * What Projects can do — grounded in docs/Product.md. Projects is the AI
 * product manager for software/hardware/startup products (NOT businesses):
 * brainstorm, PRDs, user flows, architecture, tech stack, database, API.
 */
const capabilities = [
  { icon: Lightbulb, title: "Brainstorm", desc: "Shape the idea before you build it." },
  { icon: FileText, title: "PRDs & specs", desc: "Turn the idea into a written spec." },
  { icon: Route, title: "User flows", desc: "Map how people move through it." },
  { icon: Boxes, title: "Architecture", desc: "Plan how the pieces fit together." },
  { icon: Layers, title: "Tech stack", desc: "Pick the tools, and the reasons." },
  { icon: Database, title: "Database & API", desc: "Design the data and the endpoints." }
];

/** Placeholder until projects come from @flow-hq/database. */
const recent = [
  { title: "Habit tracker", meta: "PRD · 2 days ago" },
  { title: "Checkout redesign", meta: "User flows · last week" }
];

export default function ProjectsPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-2xl pt-16 text-center sm:pt-28">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What are you <span className="text-primary">building?</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Flow Projects is your AI product manager. Describe what you&rsquo;re building and it plans
          the PRD, user flows, architecture, and stack.
        </p>
        <div className="mt-8">
          <PromptBox
            phrases={PHRASES}
            examples={EXAMPLES}
            ariaLabel="Ask Flow Projects"
            fallbackPlaceholder="Describe what you're building…"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-4 text-lg font-semibold">What it can do</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="p-5">
              <CardHeader className="p-0">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                  <cap.icon className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base">{cap.title}</CardTitle>
                <CardDescription className="leading-relaxed">{cap.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold">Recent projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {recent.map((item) => (
            <Card key={item.title} className="p-5">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.meta}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
