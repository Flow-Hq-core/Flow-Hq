import { existsSync } from "node:fs";
import { join } from "node:path";
import { AppShell } from "@/components/app-shell";
import {
  ExploreGallery,
  type FeaturedTile,
  type GalleryRow
} from "@/components/explore/explore-gallery";
import { EXPLORE_ROWS, FLOW_PRODUCTS } from "@flow-hq/shared";

/**
 * Media presence is resolved here, on the server, because the check hits the
 * filesystem (this page is statically rendered). The client gallery then just
 * receives plain paths — present files win, missing ones fall back to the
 * drawn motif. Priority: video → image → motif.
 */
function present(path?: string): string | undefined {
  return path && existsSync(join(process.cwd(), "public", path)) ? path : undefined;
}

export default function ExplorePage() {
  // One large tile per product, by convention /explore/<id>.{mp4,webp}.
  const featured: FeaturedTile[] = FLOW_PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    href: p.appPath,
    video: present(`/explore/${p.id}.mp4`),
    image: present(`/explore/${p.id}.webp`)
  }));

  const rows: GalleryRow[] = EXPLORE_ROWS.map((row) => ({
    id: row.id,
    title: row.title,
    subtitle: row.subtitle,
    href: row.href,
    cards: row.cards.map((c) => ({
      title: c.title,
      description: c.description,
      href: c.href,
      meta: c.meta,
      badge: c.badge,
      video: present(c.video),
      image: present(c.image)
    }))
  }));

  return (
    <AppShell fullWidth>
      <ExploreGallery featured={featured} rows={rows} />
    </AppShell>
  );
}
