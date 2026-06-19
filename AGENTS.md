# AGENTS.md

## Cursor Cloud specific instructions

This is a static HTML/CSS/JS website (no build step, no package manager).

- **Dev server**: Run `python3 -m http.server 8080` from the workspace root to serve the site locally.
- **Lint**: No linter configured; the site is vanilla HTML with shared assets under `assets/`.
- **Build**: No build step required. The site is deployed as-is to Vercel (see `vercel.json`).
- **Testing**: Open `http://localhost:8080/index.html` in a browser. Verify the language dropdown works and translations load from `assets/i18n/*.json`. Test consent gate, mobile nav, and `/verify/` pending registry.
- **Key files**:
  - `index.html` — homepage with consent gate, FAQ, family grid
  - `assets/css/kron.css` — design system (warp cyan/violet theme)
  - `assets/js/kron-data.js` — on-chain registry (pending until contract deploys)
  - `assets/js/kron-i18n.js` — 12-language i18n loader
  - `assets/js/kron.js` — shared UI (registry, channels, mobile nav)
  - `assets/js/kron-consent.js` — legal/cookie consent gate
  - `verify/`, `standard/`, `family/`, `program/`, `legal/` — subpages
  - `robots.txt`, `sitemap.xml` — SEO
