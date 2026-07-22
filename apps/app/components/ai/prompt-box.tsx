"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

/**
 * Prompt-first hero input shared by the AI surfaces (Business AI, Projects).
 * Both are generative per docs/Product.md, so both lead with an input rather
 * than a grid of fixed options.
 *
 * `phrases` cycle through the box as a typewriter placeholder; `examples`
 * prefill it on click. There's no AI backend yet, so submit is a no-op — the
 * value is the framing and the entry point.
 */
function useTypewriter(phrases: string[], paused: boolean, fallback: string) {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) {
      setText(fallback);
      return;
    }

    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = phrases[phrase];
      char += deleting ? -1 : 1;
      setText(full.slice(0, char));

      if (!deleting && char === full.length) {
        deleting = true;
        timer = setTimeout(tick, 1500);
      } else if (deleting && char === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        timer = setTimeout(tick, 350);
      } else {
        timer = setTimeout(tick, deleting ? 30 : 60);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [phrases, paused, fallback]);

  return text;
}

export function PromptBox({
  phrases,
  examples,
  ariaLabel,
  fallbackPlaceholder
}: {
  phrases: string[];
  examples: string[];
  ariaLabel: string;
  fallbackPlaceholder: string;
}) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);
  const placeholder = useTypewriter(phrases, value.length > 0, fallbackPlaceholder);

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
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl bg-transparent px-4 py-3.5 pr-14 text-base outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          aria-label={ariaLabel}
          disabled={!value.trim()}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Try an example
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {examples.map((example) => (
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
