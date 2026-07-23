import Link from "next/link";
import { Play } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptBox } from "@/components/ai/prompt-box";
import { cn } from "@/lib/utils";

const PHRASES = [
  "Learn React",
  "Learn Marketing",
  "Learn Python",
  "Learn SEO",
  "Learn Figma",
  "Learn public speaking"
];

const EXAMPLES = [
  "Learn React from scratch",
  "Master SEO for a new site",
  "Learn financial modeling"
];

type Category = "Business" | "Technology" | "Career" | "Skills";

const COVERS: Record<Category, string> = {
  Business: "from-sky-400/30 to-blue-500/10",
  Technology: "from-violet-400/30 to-purple-500/10",
  Career: "from-amber-300/30 to-orange-400/10",
  Skills: "from-emerald-300/30 to-teal-500/10"
};

/**
 * How many thumbnails to stack per cover. Cycled so the mosaic keeps varied
 * heights (the Pinterest look) now that height comes from the stack, not a
 * fixed cover.
 */
const PREVIEW_COUNTS = [3, 2, 4, 3, 2, 4];

/** Placeholder until playlists come from @flow-hq/database. */
const PLAYLISTS: { id: string; title: string; lessons: number; category: Category }[] = [
  { id: "react-from-scratch", title: "React from Scratch", lessons: 18, category: "Technology" },
  { id: "positioning-mastery", title: "Positioning Mastery", lessons: 7, category: "Business" },
  { id: "figma-ui-design", title: "Figma & UI Design", lessons: 14, category: "Skills" },
  { id: "public-speaking", title: "Public Speaking", lessons: 9, category: "Career" },
  { id: "python-mastery", title: "Python Mastery", lessons: 24, category: "Technology" },
  { id: "unit-economics", title: "Unit Economics", lessons: 9, category: "Business" },
  { id: "copywriting", title: "Copywriting", lessons: 11, category: "Skills" },
  { id: "sql-and-databases", title: "SQL & Databases", lessons: 16, category: "Technology" },
  { id: "pricing-strategy", title: "Pricing Strategy", lessons: 8, category: "Business" },
  { id: "negotiation", title: "Negotiation", lessons: 6, category: "Career" },
  { id: "system-design", title: "System Design", lessons: 20, category: "Technology" },
  { id: "personal-branding", title: "Personal Branding", lessons: 10, category: "Career" }
];

const continueLearning = [
  {
    id: "positioning-mastery",
    title: "Positioning Mastery",
    meta: "Next: Messaging frameworks",
    progress: 43
  },
  {
    id: "react-from-scratch",
    title: "React from Scratch",
    meta: "Next: State and effects",
    progress: 35
  }
];

export default function PlaylistsPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-2xl pt-16 text-center sm:pt-28">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What do you want to <span className="text-primary">learn?</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Tell Flow what you want to learn and it builds a curated playlist — the best path,
          in the order that actually builds the skill.
        </p>
        <div className="mt-8">
          <PromptBox
            phrases={PHRASES}
            examples={EXAMPLES}
            ariaLabel="Create a learning playlist"
            fallbackPlaceholder="What do you want to learn?"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-4 text-lg font-semibold">Explore playlists</h2>
        {/* Pinterest-style masonry: tiles of varied height flow into columns. */}
        <div className="gap-4 [column-fill:balance] columns-2 sm:columns-3 lg:columns-4">
          {PLAYLISTS.map((playlist, i) => (
            <Link
              key={playlist.id}
              href={`/playlists/${playlist.id}`}
              className="group mb-4 block break-inside-avoid rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-flow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* Stack of thumbnails cascading downward, overlapping a little. */}
              <div className="relative">
                {Array.from({ length: PREVIEW_COUNTS[i % PREVIEW_COUNTS.length] }).map((_, t) => (
                  <div
                    key={t}
                    style={{ zIndex: 10 - t }}
                    className={cn(
                      "relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br shadow-sm ring-1 ring-black/5",
                      COVERS[playlist.category],
                      t > 0 && "-mt-4"
                    )}
                  >
                    {t === 0 && (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/70 text-primary backdrop-blur transition-transform group-hover:scale-110">
                        <Play className="h-3.5 w-3.5 fill-current" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-1 pt-3">
                <h3 className="text-sm font-semibold leading-snug text-foreground">
                  {playlist.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {playlist.lessons} lessons · {playlist.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold">Continue learning</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {continueLearning.map((playlist) => (
            <Link key={playlist.id} href={`/playlists/${playlist.id}`}>
              <Card className="h-full p-5 transition-shadow hover:shadow-flow-md">
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{playlist.title}</CardTitle>
                  <CardDescription>{playlist.meta}</CardDescription>
                </CardHeader>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${playlist.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{playlist.progress}%</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
