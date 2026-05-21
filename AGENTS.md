# AGENTS.md

## Cursor Cloud specific instructions

This is a single-file static website (`index.html`) with no build system, no dependencies, and no backend.

### Running the dev server

```bash
python3 -m http.server 3000 --directory /workspace
```

Then visit `http://localhost:3000/` in a browser.

### Key facts

- No `package.json`, no Node.js dependencies, no build step.
- All CSS and JS are inline in `index.html`.
- Deployed to Vercel as a static site (see `vercel.json` for rewrite rules).
- No linter, test framework, or CI pipeline is configured.
- No environment variables or secrets are needed.
