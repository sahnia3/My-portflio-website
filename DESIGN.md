# DESIGN.md

Direction: cinematic scroll portfolio (Awwwards / Lando-Norris-style). Ink-black
ground, cream typography, emerald accent, footage of Aditya as the central
visual. The person IS the hero element.

## Color (OKLCH)

Defined in `app/globals.css` under `@theme inline`:

- `--color-bg` oklch(0.145 0.008 250): ink black
- `--color-surface` / `--color-elevated`: raised panels
- `--color-line` / `--color-line-bright`: hairline rules
- `--color-fg` oklch(0.93 0.025 95): cream
- `--color-muted` / `--color-faint`: secondary cream
- `--color-accent` oklch(0.72 0.15 162): emerald — kickers, active states,
  hovers, key CTAs
- `--color-amber`: warnings only

## Typography

- Hero/display: Anton (`--font-condensed`), uppercase, tight leading — massive
  kinetic headlines
- Secondary headings: Space Grotesk 700
- Body: Inter; small-caps tracked labels for kickers (0.14–0.22em)
- Mono survives only in kbd hints

## Footage system (Higgsfield)

Three Seedance 2.0 clips, identity-referenced on `public/profile3.jpg`,
wardrobe locked (black tee + dark overshirt), emerald rim lighting:

- `public/clip-orbit.mp4` → extracted to `public/orbit/frame_001..096.jpg`,
  scrubbed on canvas by scroll in `components/orbit-hero.tsx`
- `public/clip-builder.mp4` → looping backdrop for the Pillars section
- `public/clip-closer.mp4` → looping backdrop for the Selected Work section

Regenerate via `higgsfield generate create seedance_2_0 --image profile3.jpg …`
then re-extract frames: `ffmpeg -i clip-orbit.mp4 -vf "fps=96/DUR,scale=1280:-2"
-frames:v 96 -q:v 5 orbit/frame_%03d.jpg`.

## Motion

- Lenis smooth scroll (Providers), respects prefers-reduced-motion
- Hero: letter-by-letter name reveal; frame-sequence scrub (spring-smoothed)
- Stats count up on first view; Pillars pin and light one at a time
- Framer Motion everywhere else; expo-out easing; opacity-only page
  transitions (transforms break position:fixed)

## Structure

- Home: orbit hero → stats strip → pillars (clip 2) → selected work (clip 3)
  → right now / track record → footer CTA
- /projects: full archive; case studies keep the metrics band + figures system
