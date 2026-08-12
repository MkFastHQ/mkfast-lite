# MkFast Lite

A minimal bilingual website starter built with React 19, TanStack Start,
Tailwind CSS, Paraglide, and Cloudflare Workers.

MkFast Lite starts with one complete public landing page instead of a SaaS
application. It includes responsive design, light and dark themes, English and
Simplified Chinese, SEO endpoints, tests, and Workers deployment. It does not
include authentication, payments, a database, storage, cache, email,
newsletter, or an admin area.

## Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` for English or `/zh` for Simplified Chinese.

## Make it yours

1. Update product identity and public links in `src/config/website.ts`.
2. Replace the English and Chinese copy in `project.inlang/messages/`.
3. Replace the original assets in `public/`.
4. Reorder or remove independent sections in
   `src/components/home/home-page.tsx`.

Locale JSON is the source of truth. Regenerate the typed messages after copy
changes:

```bash
pnpm locale:compile
pnpm locale:check
```

## Add a page

Add a file under `src/routes/` using TanStack Router's file-route convention.
If the page should exist in both languages, add an English route and a `/zh`
route, then include canonical and alternate locale metadata.

## Quality checks

```bash
pnpm check
pnpm build
pnpm e2e
```

The checks cover formatting, linting, locale parity, unit contracts,
TypeScript, production SSR output, both locales, themes, responsive navigation,
SEO, and the intentionally missing application routes.

## Deploy to Cloudflare Workers

Authenticate Wrangler once, then deploy:

```bash
pnpm exec wrangler login
pnpm deploy
```

The default `wrangler.jsonc` keeps `workers_dev` enabled and has no resource
bindings or application secrets. The first deployment publishes to your
Cloudflare account's `workers.dev` subdomain.

To attach your own hostname without making it the template default:

```bash
pnpm exec wrangler deploy --domain your-site.example.com
```

Do not commit personal domains, account IDs, tokens, or secrets to a project
created from this template.

## Project map

- `src/routes/` — pages and machine-readable endpoints.
- `src/components/` — layout, theme, UI primitives, and landing sections.
- `src/config/` — small product-owned site configuration.
- `src/lib/` — locale, SEO, and utility contracts.
- `project.inlang/messages/` — authoritative bilingual copy.
- `tests/` — unit and Playwright acceptance tests.

## License

[MIT](LICENSE)
