# Kynetiq  Frontend

Next.js 14 (App Router) + TypeScript + Tailwind. This is the frontend only —
all data on every page is placeholder data living in `lib/data.ts`, ready to
be swapped for real API calls once the backend exists.

## Requirements

- Node.js 18.17 or newer (Node 20 LTS recommended)
- npm (comes with Node)

Check your version first:

```bash
node -v
```

## Setup

From the VS Code terminal, inside this folder:

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser. The landing page is at
`/`, and the app itself lives at `/dashboard`, `/workouts`, `/meals`,
`/progress`, `/goals`, `/settings`.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally (after `npm run build`)
npm run lint    # lint the project
```

## Project structure

```
app/
  page.tsx              → landing page ("/")
  layout.tsx             → root layout, wraps everything in AppSettingsProvider
  globals.css             → Tailwind + font import
  (app)/
    layout.tsx            → shared shell (Sidebar + TopBar) for all app pages
    dashboard/page.tsx
    workouts/page.tsx
    meals/page.tsx
    progress/page.tsx
    goals/page.tsx
    settings/page.tsx
components/
  Sidebar.tsx             → left nav, route-aware (highlights active page)
  TopBar.tsx              → page title/subtitle + streak badge
  ui.tsx                  → Card, ProgressBar, Toggle, StatCard, SectionHeader
context/
  AppSettingsContext.tsx  → shared state: accent theme, units, notifications,
                            connected integrations — swap this for real user
                            settings once there's a backend/auth
lib/
  colors.ts               → design tokens (oklch colors, fonts)
  data.ts                 → placeholder data for every page
```

