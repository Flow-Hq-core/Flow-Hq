"use client";

import { useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

/**
 * Replit-style prompt hero for the business consultant. Business AI is
 * conversational (per docs/Product.md — "help me solve this business
 * problem"), so the page leads with an input, not a grid of fixed report
 * types. Chips and examples prefill the box.
 *
 * There's no AI backend yet, so submit is a no-op — the value here is the
 * consultant framing and the entry point, consistent with the rest of the
 * scaffolded app.
 */
const CHIPS = [
  { label: "Diagnose my business", prompt: "Diagnose what's holding my business back: " },
  { label: "Write an SOP", prompt: "Write an SOP for " },
  { label: "Improve pricing", prompt: "Improve the pricing for " },
  { label: "Fix my marketing", prompt: "Improve the marketing for " },
  { label: "Business model canvas", prompt: "Build a business model canvas for " },
  { label: "Brainstorm ideas", prompt: "Brainstorm ideas for " }
];

const EXAMPLES = [
  "Why is my coffee shop losing repeat customers?",
  "Write an SOP for onboarding a new hire",
  "Improve pricing for my design agency"
];

export function ConsultantPrompt() {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const fill = (text: string) => {
    setValue(text);
    ref.current?.focus();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative rounded-2xl border border-input bg-background shadow-flow-sm transition-shadow focus-within:ring-2 focus-within:ring-ring"
      >
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={2}
          placeholder="Describe your business problem…"
          className="w-full resize-none rounded-2xl bg-transparent px-4 py-3.5 pr-14 text-base outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          aria-label="Ask Flow Business AI"
          disabled={!value.trim()}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </form>

      {/* Capability chips — prefill a starter prompt. */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {CHIPS.map((chip) => (
          <button
            key={chip.label}
            onClick={() => fill(chip.prompt)}
            className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-muted-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Example prompts */}
      <div className="mt-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Try an example
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {EXAMPLES.map((example) => (
            <button
              key={example}
              onClick={() => fill(example)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
