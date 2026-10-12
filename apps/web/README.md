# comp_web_app

Internal-facing UI where employees design/configure custom workflows and monitor running
business processes. See `.arc/decisions/ADR-0001-web-app.md` for the architecture decision.

Stack: TypeScript, React + Vite, Tailwind CSS, pnpm, Vitest, Playwright.

## Commands

Run from this directory (`apps/web/`):

- `pnpm install` — install dependencies
- `pnpm dev` — start the dev server
- `pnpm build` — type-check and build for production
- `pnpm preview` — serve the production build
- `pnpm test` — run unit tests (Vitest)
- `pnpm test:e2e:install` — install Playwright browsers (one-time, requires network access)
- `pnpm test:e2e` — run end-to-end tests (Playwright)

End-to-end tests require Playwright's browser binaries, which are downloaded separately
from `pnpm install` (via `pnpm test:e2e:install`). They are intentionally not part of the
`pnpm test` script so that a plain dependency install is enough to run the unit suite.
