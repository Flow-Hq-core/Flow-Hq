# Explore tile images

Drop the generated tile images here using the exact filenames from
`docs/explore-image-shotlist.md` (e.g. `business-101.webp`).

The Explore page checks at build time whether each file exists: present ones
render as the card cover, missing ones fall back to the drawn motif in
`apps/app/components/explore/explore-cover.tsx`. So partial batches are fine —
add what you have and rebuild.
