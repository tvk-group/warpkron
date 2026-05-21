# AGENTS.md

## Cursor Cloud specific instructions

This is a static HTML/CSS/JS website (no build step, no package manager).

- **Dev server**: Run `python3 -m http.server 8080` from the workspace root to serve the site locally.
- **Lint**: No linter configured; the site is vanilla HTML with inline CSS and a single `lang.js` script.
- **Build**: No build step required. The site is deployed as-is to Vercel (see `vercel.json`).
- **Testing**: Open `http://localhost:8080/index.html` in a browser. Verify the language dropdown works and translations load correctly from `lang.js`.
- **Key files**: `index.html` (full page with inline styles), `lang.js` (i18n translations + helper functions), `vercel.json` (Vercel config).
