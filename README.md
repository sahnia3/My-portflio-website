# aditya-sahni — portfolio v2

Personal portfolio of [Aditya Sahni](https://github.com/sahnia3). Rebuilt from the ground up — no templates.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS 4** — OKLCH design tokens, dark-first
- **Framer Motion 12** — page transitions, staggered reveals
- Space Grotesk / Inter / JetBrains Mono via `next/font`

## Architecture

All content lives in a single typed data file — pages render from it:

```
data/site.ts        ← every project, job, skill, link, and line of copy
data/types.ts       ← content schema
app/                ← routes (home, projects, projects/[slug], about, experience, contact)
components/         ← nav, ⌘K command palette, footer, motion primitives
```

Project case studies are generated statically from `data/site.ts` via
`app/projects/[slug]/page.tsx` — adding a project is a data change, not a code change.

## Mechanics

- **⌘K command palette** — navigate anywhere, copy email, open socials, grab the resume
- Contact form wired to EmailJS (no backend)
- `prefers-reduced-motion` respected throughout

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```
