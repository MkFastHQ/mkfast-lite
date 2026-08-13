# Tanstarter Lite agent guide

## Purpose

Keep this repository a small public-site template. Do not add authentication,
payments, persistence, storage, cache, transactional email, newsletters, or an
admin surface unless the user explicitly changes the product scope.

## Source of truth

- Site identity and public URLs: `src/config/website.ts`
- English and Chinese copy: `project.inlang/messages/*.json`
- Theme tokens: `src/styles.css`
- Route surface: `src/routes/`
- Worker configuration: `wrangler.jsonc`

Generated files under `src/locale/paraglide/`, `src/routeTree.gen.ts`, and
`worker-configuration.d.ts` must be regenerated, never edited by hand.

## Commands

```bash
pnpm dev
pnpm check
pnpm build
pnpm e2e
pnpm deploy
```

Run `pnpm locale:compile` after locale copy changes and `pnpm cf-typegen` after
Wrangler configuration changes. Keep `workers.dev` as the committed deployment
default. Never commit custom domains, Cloudflare account IDs, or credentials.
