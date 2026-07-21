"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, FolderKanban, GraduationCap, Map } from "lucide-react";
import { ExploreCover } from "@/components/explore/explore-cover";
import { cn } from "@/lib/utils";

type ProductId = "roadmaps" | "projects" | "business-ai" | "playlists";

type Media = { video?: string; image?: string };

export type GalleryCard = Media & {
  title: string;
  description: string;
  href: string;
  meta?: string;
  badge?: string;
};

export type GalleryRow = {
  id: ProductId;
  title: string;
  subtitle: string;
  href: string;
  cards: GalleryCard[];
};

export type FeaturedTile = Media & {
  id: ProductId;
  name: string;
  tagline: string;
  href: string;
};

const ICONS: Record<ProductId, typeof Map> = {
  roadmaps: Map,
  projects: FolderKanban,
  "business-ai": Brain,
  playlists: GraduationCap
};

function MediaLayer({
  rowId,
  index,
  video,
  image
}: {
  rowId: ProductId;
  index: number;
  video?: string;
  image?: string;
}) {
  if (video) {
    return (
      <video
        src={video}
        poster={image}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    );
  }
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element -- static asset, no optimization pipeline wired
    return <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />;
  }
  return <ExploreCover id={rowId} index={index} />;
}

function ItemTile({
  card,
  rowId,
  index
}: {
  card: GalleryCard;
  rowId: ProductId;
  index: number;
}) {
  return (
    <Link
      href={card.href}
      className="group relative aspect-[16/10] w-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-flow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-80"
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
        <MediaLayer rowId={rowId} index={index} video={card.video} image={card.image} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        {card.meta && <p className="text-xs font-medium text-white/70">{card.meta}</p>}
        <h3 className="mt-0.5 text-base font-semibold leading-snug text-white">{card.title}</h3>
      </div>
    </Link>
  );
}

function FeaturedCard({ tile, index }: { tile: FeaturedTile; index: number }) {
  const Icon = ICONS[tile.id];
  return (
    <Link
      href={tile.href}
      className="group relative aspect-[16/9] w-80 shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-flow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-[26rem]"
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
        <MediaLayer rowId={tile.id} index={index} video={tile.video} image={tile.image} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur">
          <Icon className="h-4 w-4 text-white" />
        </span>
        <h3 className="text-lg font-semibold text-white">{tile.name}</h3>
        <p className="mt-1 text-sm text-white/70">{tile.tagline}</p>
        <span className="mt-3 inline-flex items-center text-sm font-semibold text-white">
          Open
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function Section({ row }: { row: GalleryRow }) {
  const Icon = ICONS[row.id];
  return (
    <section className="mt-14">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
            <Icon className="h-4 w-4 text-accent-foreground" />
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">{row.title}</h2>
            <p className="truncate text-sm text-muted-foreground">{row.subtitle}</p>
          </div>
        </div>
        <Link
          href={row.href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          See all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Horizontal scroll row of wide landscape cards. Negative margins bleed
          the cards to the content gutter so a partial card signals scroll. */}
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {row.cards.map((card, i) => (
          <ItemTile key={`${row.id}-${card.title}`} card={card} rowId={row.id} index={i} />
        ))}
      </div>
    </section>
  );
}

export function ExploreGallery({
  featured,
  rows
}: {
  featured: FeaturedTile[];
  rows: GalleryRow[];
}) {
  const [filter, setFilter] = useState<"all" | ProductId>("all");
  const shown = filter === "all" ? rows : rows.filter((r) => r.id === filter);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Explore Flow
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Everything across the four products in one place. Open a tile, or filter to the
          product you&rsquo;re here for.
        </p>
      </header>

      {/* Featured products — the "what each product is" row, wide cards. */}
      {filter === "all" && (
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((tile, i) => (
            <FeaturedCard key={tile.id} tile={tile} index={i} />
          ))}
        </div>
      )}

      {/* Filter bar */}
      <div className="sticky top-14 z-20 -mx-4 mt-10 flex gap-2 overflow-x-auto bg-background/80 px-4 py-3 backdrop-blur [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden">
        <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterPill>
        {rows.map((r) => (
          <FilterPill key={r.id} active={filter === r.id} onClick={() => setFilter(r.id)}>
            {r.title}
          </FilterPill>
        ))}
      </div>

      {shown.map((row) => (
        <Section key={row.id} row={row} />
      ))}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
