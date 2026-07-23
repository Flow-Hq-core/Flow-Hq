"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Activity,
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  FileText,
  LayoutGrid,
  Paperclip,
  Plus,
  Search,
  Sparkles,
  Star,
  Tag
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Placeholder history until conversations come from @flow-hq/database. */
const SAVED = [
  { id: "positioning", label: "Positioning teardown", tint: "bg-sky-500" },
  { id: "pricing", label: "Pricing model", tint: "bg-violet-500" },
  { id: "sop", label: "Onboarding SOP", tint: "bg-amber-500" }
];

const TODAY = [
  "How can I improve customer retention?",
  "Best pricing for a design agency",
  "Draft an SOP for onboarding a barista"
];

const YESTERDAY = ["What's weak in my marketing?", "Competitor analysis for my café"];

const SUGGESTION_TASKS = [
  "Diagnose a drop in retention",
  "Run a competitor analysis",
  "Draft an onboarding SOP"
];

const QUICK = [
  { label: "Diagnose a business", prompt: "Diagnose what's holding my business back: ", icon: Activity },
  { label: "Write an SOP", prompt: "Write an SOP for ", icon: FileText },
  { label: "Improve pricing", prompt: "Improve the pricing for ", icon: Tag },
  { label: "Business model canvas", prompt: "Build a business model canvas for ", icon: LayoutGrid }
];

function ConvItem({ label }: { label: string }) {
  return (
    <button className="w-full truncate rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
      {label}
    </button>
  );
}

export function ChatConsole() {
  const params = useSearchParams();
  const [value, setValue] = useState(params.get("q") ?? "");

  return (
    <div className="flex h-[calc(100dvh-3.5rem)]">
      {/* Conversation sidebar */}
      <aside className="hidden w-72 shrink-0 flex-col border-r border-border bg-muted/20 md:flex">
        <div className="flex items-center justify-between px-4 pb-3 pt-4">
          <span className="text-sm font-semibold text-foreground">Business AI</span>
          <button aria-label="Search chats" className="text-muted-foreground hover:text-foreground">
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="px-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90">
            <Plus className="h-4 w-4" />
            New chat
          </button>
        </div>

        <div className="mt-5 flex-1 overflow-y-auto px-3 pb-4">
          <p className="mb-1 flex items-center gap-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Star className="h-3 w-3" />
            Saved
          </p>
          {SAVED.map((s) => (
            <button
              key={s.id}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted"
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white",
                  s.tint
                )}
              >
                {s.label[0]}
              </span>
              <span className="truncate">{s.label}</span>
            </button>
          ))}

          <p className="mb-1 mt-5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Today
          </p>
          {TODAY.map((c) => (
            <ConvItem key={c} label={c} />
          ))}

          <p className="mb-1 mt-5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Yesterday
          </p>
          {YESTERDAY.map((c) => (
            <ConvItem key={c} label={c} />
          ))}
        </div>

        <div className="border-t border-border p-3">
          <button className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Upgrade to Pro
          </button>
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <Link
            href="/business-ai"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Flow Business AI
          </Link>
          <button className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            New chat
          </button>
        </div>

        {/* Welcome state */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex min-h-full max-w-2xl flex-col justify-center px-5 py-10">
            <div className="text-center">
              <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-flow-blue" />
              <h1 className="text-2xl font-semibold text-foreground">Hi there 👋</h1>
              <p className="mt-1.5 text-muted-foreground">
                Tell me the business problem, and I&rsquo;ll work it through with you.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {/* Assistant card */}
              <div className="rounded-2xl bg-slate-950 p-4 text-white">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600" />
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[11px] font-medium">
                    Consultant
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  Diagnoses your business, plans the fix, and generates the documents.
                </p>
              </div>

              {/* Tasks card */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <ul className="space-y-2">
                  {SUGGESTION_TASKS.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-xs text-foreground">
                      <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-border pt-2 text-[11px] font-medium text-muted-foreground">
                  Tasks
                </p>
              </div>

              {/* Suggested prompt card */}
              <button
                onClick={() => setValue("What's holding my business back right now?")}
                className="rounded-2xl border border-border bg-card p-4 text-left transition-shadow hover:shadow-flow-md"
              >
                <p className="text-sm font-medium text-foreground">
                  What&rsquo;s holding my business back right now?
                </p>
                <p className="mt-6 text-[11px] font-medium text-muted-foreground">
                  Suggested prompt
                </p>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {QUICK.map((q) => (
                <button
                  key={q.label}
                  onClick={() => setValue(q.prompt)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <q.icon className="h-3.5 w-3.5 text-primary" />
                  {q.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border px-5 py-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto max-w-2xl rounded-2xl border border-input bg-background p-2.5 shadow-flow-sm focus-within:ring-2 focus-within:ring-ring"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ask me anything…"
              className="w-full bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-2 flex items-center justify-between">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Select source
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Attach"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Paperclip className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  disabled={!value.trim()}
                  className="flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  <ArrowUp className="h-4 w-4" />
                  Send
                </button>
              </div>
            </div>
          </form>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Flow Business AI can make mistakes — double-check important details.{" "}
            <Sparkles className="inline h-3 w-3 text-primary" />
          </p>
        </div>
      </div>
    </div>
  );
}
