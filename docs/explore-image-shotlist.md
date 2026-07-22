# Explore image shot list

Generate these in a claude.ai chat with the Higgsfield connector (it isn't
available to Claude Code, only to chat). One image per Explore card. Once they
exist, drop them in `apps/app/public/explore/` with the exact filenames below
and I'll wire them into `EXPLORE_ROWS` and rebuild the layout around them.

## Art direction — prepend this to every prompt

> Abstract, premium editorial illustration for a modern software product.
> Minimalist and sophisticated with generous negative space, soft studio
> lighting, subtle film grain. Deep near-black background (#0A0A0B). One accent
> colour only, as specified. 3D-render / matte-illustration feel — not a stock
> photo. Cinematic shallow depth of field. **No text, no words, no logos, no
> readable UI, no human faces.**

Why those hard "no"s:
- **No baked-in text.** Higgsfield's tiles have words *in* the image because
  they're posters. Ours must not — titles stay as UI so they're editable,
  translatable, and honest. Text in the image would fight the real title.
- **No real people / logos / brands.** Avoids impersonation and fabrication;
  keeps it usable as product art.

## Global settings

- **Aspect ratio:** 4:3 landscape, generate at **1600×1200** (retina 2×).
- **Format on save:** `.webp` (or `.jpg`), keep each under ~300 KB.
- **Folder:** `apps/app/public/explore/`
- Keep the style identical across all 15 so the grid reads as one set, not a
  collage. Same lighting, same grain, same render feel — only subject and
  accent change.

## Accent per product

| Product      | Accent            |
| ------------ | ----------------- |
| Roadmaps     | cool blue / cyan  |
| Business AI  | violet / purple   |
| Projects     | amber / warm gold |
| Playlists    | emerald / green   |

## Tiles

### Roadmaps — blue
| Filename | Subject |
| --- | --- |
| `business-101.webp` | A glowing path of connected nodes winding from the foreground into the distance, the first node brightest — a journey starting from zero. |
| `business-operating.webp` | Interlocking gears and orbital rings caught mid-motion — a steady running machine. |
| `business-operating-flow.webp` | A layered topographic landscape, contour lines glowing — a full operating map seen from above. |
| `data-engineering-flow.webp` | Streams of luminous particles flowing through branching pipelines into a clean structured lattice. |

### Business AI — violet
Business AI is the consultant (diagnose + generate), so the tiles reflect what
it produces, not fixed analysis subjects. See docs/Product.md.
| Filename | Subject |
| --- | --- |
| `diagnose.webp` | An exploded, x-ray-style view of a machine revealing its inner workings — diagnosis. |
| `sop.webp` | Clean interlocking steps flowing into a single repeating loop — a documented system. |
| `canvas.webp` | A single sheet divided into glowing panels, a whole model on one page. |
| `pricing.webp` | A balanced scale of glowing geometric weights tilting to the right value. |
| `marketing.webp` | Concentric ripples radiating outward from one bright point across a dark field — reach and signal. |

### Projects — amber
Projects is the AI product manager (software/product), so tiles reflect what it
plans, not business templates. See docs/Product.md.
| Filename | Subject |
| --- | --- |
| `prd.webp` | A structured document unfolding into ordered sections — a written spec taking shape. |
| `user-flows.webp` | Connected screens linked by directional arrows — a path through a product. |
| `architecture.webp` | Modular blocks and connectors assembling into a clean system diagram. |

### Playlists — emerald
| Filename | Subject |
| --- | --- |
| `positioning-mastery.webp` | A radial compass form aligning toward one bright vector — finding the wedge. |
| `python-mastery.webp` | Ribbons of code-like light (no readable characters) weaving into one coherent braid. |
| `unit-economics.webp` | A balanced scale of glowing geometric weights — does the math actually work. |

## Looping video tiles

Higgsfield's grid mixes autoplaying loops in with the stills. The tile
component already supports this: a card with a `video` that exists renders a
muted, looping `<video>` (with the still as its poster), otherwise it uses the
image, otherwise the motif.

**Decide first what these videos ARE — the two options are different products:**

- **Abstract motion loops (Higgsfield-generated).** Animated versions of the
  cover art — on-vibe, drop-in now, but decorative. They match the reference's
  *look*, not its function; they don't show the product working.
- **Real product-demo loops (screen recording).** Short muted captures of the
  actual Flow UI doing the thing — these genuinely explain the product, but
  they're recorded from the app, not generated, and need the feature to exist
  on screen first. Not a Higgsfield job.

Start with **one loop per product** (four total), used as a featured tile:

| Filename | Shows |
| --- | --- |
| `roadmaps.mp4` | A roadmap assembling node by node into a full path. |
| `business-ai.mp4` | An analysis resolving into findings / a verdict. |
| `projects.mp4` | A plan expanding into tasks and a timeline. |
| `playlists.mp4` | Lessons stacking into an ordered sequence. |

Settings: **MP4 (H.264)**, ~4–6 s seamless loop, **no audio**, 4:3 to match the
tiles (or 16:9 if used as a wide banner), generate at ~1600×1200, keep each
under ~2 MB. Provide the matching still (`roadmaps.webp`, …) as the poster.

Note: autoplaying loops ignore `prefers-reduced-motion` today — a reduced-motion
guard (show the poster instead) is a small follow-up before shipping these.

## Optional — product banners (only if we add promo bands)
16:9, generate at 2400×1350. One per product, same subject family as its tiles
but wider and emptier, room for a headline to overlay.
`banner-roadmaps.webp`, `banner-business-ai.webp`, `banner-projects.webp`,
`banner-playlists.webp`.
