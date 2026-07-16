# Development Guide

## Prerequisites

- Node.js 20+
- pnpm 9+

## Setup

```bash
pnpm install
pnpm approve-builds --all   # if prompted for native deps like sharp
```

## Development

Run both apps in parallel:

```bash
pnpm dev
```

| App | URL |
|-----|-----|
| Marketing | http://localhost:3000 |
| SaaS | http://localhost:3001 |

Run a single app:

```bash
pnpm --filter marketing dev
pnpm --filter @flow-hq/app dev
```

## Build

```bash
pnpm build
```

## Lint & Typecheck

```bash
pnpm lint
pnpm typecheck
```

## Environment Variables

### Marketing (`apps/marketing`)

- `NEXT_PUBLIC_APP_URL` — link to SaaS app (default: `http://localhost:3001`)

### Database (`packages/database`)

- `DATABASE_URL` — PostgreSQL connection string for Prisma

## Adding a New Package

1. Create `packages/<name>/package.json` with `@flow-hq/<name>` scope
2. Add to `pnpm-workspace.yaml` (already covers `packages/*`)
3. Reference from apps via `"@flow-hq/<name>": "workspace:*"`

## Migration Notes

Source repos were cloned to `temp/` during migration. Remove `temp/` once all code has been verified:

```bash
rm -rf temp/
```
