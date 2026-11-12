# Personal Website

Portfolio site for Nazibuddoula Nayeem, built with Next.js (App Router) and React, from the Figma design.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static files are written to `out/`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`) at https://nazibuddoulame-prog.github.io/My-Personal-Website/.
One-time setup: in the repo settings, set **Pages → Source** to **GitHub Actions**.

## Structure

- `src/app/` — layout, page and global styles (design tokens are CSS variables in `globals.css`)
- `src/components/` — one component per section: Hero, Nav, Intro, Feature, Highlights, Projects
- `src/assets/` — images exported from Figma. The name wordmark is an SVG because its font
  (Born2bSporty FS) is commercial.
