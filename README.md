# Flow-HQ Monorepo

Turborepo-based monorepo for the Flow-HQ platform.

## What's Inside

- **`apps/marketing`** — Public marketing site (flowhq.com)
- **`apps/app`** — SaaS platform with Roadmaps, Projects, Explore, and future modules
- **`packages/*`** — Shared UI, AI, auth, database, config, and utilities
- **`docs/`** — Architecture and module documentation

## Quick Start

```bash
pnpm install
pnpm dev
```

- Marketing: http://localhost:3000
- App: http://localhost:3001

## Documentation

See [`docs/`](./docs/) for architecture, folder structure, and module guides.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint all workspaces |
| `pnpm typecheck` | Type-check all workspaces |
| `pnpm format` | Format with Prettier |

## Tech Stack

- Turborepo + pnpm workspaces
- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma (database package, prepared)
