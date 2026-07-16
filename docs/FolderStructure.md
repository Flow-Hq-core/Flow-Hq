# Folder Structure

```
Flow-Hq/
├── apps/
│   ├── marketing/          # Marketing website (Next.js)
│   │   ├── app/            # Routes: /, /pricing, /about, /resources, /product
│   │   └── components/     # Landing page components
│   └── app/                # SaaS platform (Next.js)
│       ├── app/            # App Router pages
│       │   ├── dashboard/
│       │   ├── explore/
│       │   ├── roadmaps/
│       │   ├── projects/   # Flow Project module
│       │   ├── business-ai/
│       │   ├── playlists/
│       │   ├── settings/
│       │   └── billing/
│       ├── components/
│       │   ├── app-shell.tsx
│       │   ├── projects/   # Flow Project landing components
│       │   ├── roadmap/    # Roadmap visualizations
│       │   └── ui/
│       └── data/           # Roadmap data files
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── shared/             # Types, constants, utilities
│   ├── ai/                 # AI layer (stubs)
│   ├── auth/               # Auth layer (stubs)
│   ├── database/           # Prisma schema + client
│   └── config/             # Shared tooling configs
├── docs/                   # Developer documentation
├── temp/                   # Temporary clones (remove after migration)
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
```

## Conventions

- App-specific code stays in `apps/*`
- Cross-app reusable code goes in `packages/*`
- Route folders under `apps/app/app/` map 1:1 to platform URLs
- Module landing pages (like `/projects`) can use their own scoped styles and layout
