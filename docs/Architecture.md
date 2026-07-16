# Flow-HQ Architecture

Flow-HQ is a Turborepo monorepo for the Flow platform. It separates marketing from the SaaS application while sharing packages for UI, auth, AI, database, and configuration.

## Applications

| App | Path | Purpose | Port |
|-----|------|---------|------|
| Marketing | `apps/marketing` | Public site (flowhq.com) | 3000 |
| SaaS | `apps/app` | Platform app (app.flowhq.com) | 3001 |

## Platform Modules (inside `apps/app`)

- **Dashboard** — entry point and quick links
- **Explore** — central hub connecting all modules
- **Roadmaps** — Flow Roadmaps (migrated from `flow-hq-build-scale`)
- **Projects** — Flow Project landing (migrated from `roadmaps-to-growth`)
- **Business AI** — placeholder for future AI workflows
- **Playlists** — placeholder for curated learning paths
- **Settings / Billing** — account management surfaces

## Shared Packages

| Package | Purpose |
|---------|---------|
| `@flow-hq/ui` | Reusable UI components (Button, future Card, Dialog, etc.) |
| `@flow-hq/shared` | Types, constants, hooks, utilities |
| `@flow-hq/ai` | Roadmap AI, Business AI, Playlist AI, workflow generation |
| `@flow-hq/auth` | Authentication architecture (session, sign-in/out) |
| `@flow-hq/database` | Prisma client and schema |
| `@flow-hq/config` | Shared ESLint, Prettier, Tailwind, TypeScript configs |

## Data Flow (future)

```
User → apps/app → @flow-hq/auth → session
                → @flow-hq/ai → generated roadmaps / workflows
                → @flow-hq/database → Prisma / Supabase
                → @flow-hq/ui → shared components
```

## Deployment Targets

- `apps/marketing` → `flowhq.com`
- `apps/app` → `app.flowhq.com`

Both apps share packages but deploy independently.
