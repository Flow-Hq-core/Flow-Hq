# Roadmaps Module

The Roadmaps module lives at `/roadmaps` inside `apps/app`.

## Source

Migrated from `flow-hq-build-scale` (Vite/React) into Next.js App Router.

## Routes

| Route | Description |
|-------|-------------|
| `/roadmaps` | Roadmap index with links to available maps |
| `/roadmaps/business-101` | Business fundamentals roadmap |
| `/roadmaps/business-operating` | Business operating roadmap |
| `/roadmaps/business-operating-flow` | Flow-style business operating map |
| `/roadmaps/data-engineering-flow` | Data engineering flow map |
| `/roadmaps/[slug]` | Dynamic slug route |

## Key Files

- `apps/app/data/` — roadmap data definitions
- `apps/app/components/roadmap/` — graph, layout, and visualization components

## Future Work

- Connect roadmap progress to `@flow-hq/database`
- Use `@flow-hq/ai` for dynamic roadmap generation
- Extract shared roadmap node components to `@flow-hq/ui`
