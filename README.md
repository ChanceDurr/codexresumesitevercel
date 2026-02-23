# Chance Dare Portfolio Website

This project is now website-only (no Electron runtime):
- React + TypeScript
- Vite

## Prerequisites

- Node.js 20+ (includes npm)

## Install

```powershell
npm install
```

## Run (development)

```powershell
npm run dev
```

This starts a web dev server (Vite) instead of a desktop app.

## Build

```powershell
npm run build
```

## Type Check

```powershell
npm run typecheck
```

## Optimize Photos

Generate responsive WebP variants for the photography gallery:

```powershell
npm run optimize:photos
```

## Content Maintenance

The UI is split into data/content modules and components so new sections and logs can be added without editing the
main app controller.

- Shared content data (tab metadata, highlights, featured items, embedded learning roadmap/log): `src/renderer/content/siteContent.ts`
- Shared types (including embedded learning log entry shape): `src/renderer/types.ts`
- Photo caption + responsive asset grouping logic: `src/renderer/lib/photoAssets.ts`
- UI sections/components: `src/renderer/components/`

### Embedded Learning Log Workflow

To track STM32 / embedded learning progress on the website:

1. Add a new entry to `embeddedLearningLog` in `src/renderer/content/siteContent.ts`
2. Add/update roadmap milestones in `embeddedRoadmap` as learning focus changes
3. Promote completed sessions into larger project writeups as needed (planned section is `embeddedProjectIdeas`)

Tip: the active section is synced to the URL hash, so `#embedded` opens the Embedded tab directly.
