# Projects Module

The Flow Project module lives at `/projects` inside `apps/app`.

## Source

Migrated from `roadmaps-to-growth` (TanStack Start / Vite) into a Next.js route module.

## What It Is

A full landing experience for AI-generated project roadmaps — not a separate Next.js app. It includes:

- Hero with typewriter prompt demo
- Live demo animation
- Explore grid with search and category filters
- How it works, features, example roadmap
- Testimonials and CTA sections

## Key Files

- `apps/app/app/projects/page.tsx` — composes the landing page
- `apps/app/app/projects/layout.tsx` — scoped `.projects-theme` wrapper
- `apps/app/app/projects/projects.css` — brutalist theme styles
- `apps/app/components/projects/` — section components

## Navigation

The module has its own nav (`ProjectsNav`) with links back to `/dashboard` and in-page anchors. It does not use `AppShell` so the landing can have its own visual identity.

## Future Work

- Wire "Generate Roadmap" to `@flow-hq/ai`
- Persist user projects via `@flow-hq/database`
- Add authenticated project workspace routes under `/projects/[id]`
