import { Activity, FileText, LayoutGrid, ListChecks, Megaphone, Tag } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConsultantPrompt } from "@/components/business-ai/consultant-prompt";

/**
 * What Business AI can do — grounded in docs/Product.md. It's a consultant
 * that generates, not a fixed set of report types, so this shows the breadth
 * rather than five categories.
 */
const capabilities = [
  { icon: Activity, title: "Diagnose", desc: "Find what's actually holding the business back." },
  { icon: ListChecks, title: "SOPs & workflows", desc: "Turn how you work into repeatable systems." },
  { icon: LayoutGrid, title: "Business canvases", desc: "Model the whole business on one page." },
  { icon: Tag, title: "Pricing & offers", desc: "Sharpen what you sell and what you charge." },
  { icon: Megaphone, title: "Marketing", desc: "Positioning, messaging, and channels." },
  { icon: FileText, title: "Documents", desc: "Checklists, templates, and docs — generated." }
];

/** Placeholder until conversations come from @flow-hq/database. */
const recent = [
  { title: "Coffee shop retention", meta: "12 messages · 2 days ago" },
  { title: "Pricing for design agency", meta: "6 messages · last week" }
];

export default function BusinessAIPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-2xl pt-16 text-center sm:pt-28">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What can I help you <span className="text-primary">solve?</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Flow Business AI is your consultant. Describe a problem and it diagnoses the business,
          plans the fix, and generates the documents to get it done.
        </p>
        <div className="mt-8">
          <ConsultantPrompt />
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
        <h2 className="mb-4 text-lg font-semibold">Recent conversations</h2>
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
