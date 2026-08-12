# MkFast Lite

A bilingual starter for a simple website, built with React 19, TanStack Start,
Tailwind CSS, Paraglide, and Cloudflare Workers.

MkFast Lite gives you a complete landing page without the operational weight of
a SaaS starter. It includes responsive navigation, English and Simplified
Chinese routes, light/dark/system themes, SEO endpoints, tests, and Cloudflare
Workers deployment. It intentionally leaves out accounts, payments, persistence,
storage, cache, email, newsletters, and admin surfaces.

## Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` for English or `http://localhost:3000/zh` for
Simplified Chinese. The header includes language and theme menus; the selected
theme is kept in local storage.

## Make it yours

1. Set the site name, repository, template URL, and navigation in
   `src/config/website.ts`.
2. Write the English and Simplified Chinese copy in
   `project.inlang/messages/en.json` and `project.inlang/messages/zh.json`.
3. Replace the assets in `public/`.
4. Reorder or remove landing-page sections in
   `src/components/home/home-page.tsx`, then connect a custom domain when the
   site is ready.

The two locale JSON files are the source of truth. Do not edit
`src/locale/paraglide/` by hand; regenerate its typed runtime after changing
copy:

```bash
pnpm locale:compile
pnpm locale:check
```

## Add a page

Add a file under `src/routes/` using TanStack Router's file-route convention.
For a bilingual page, create English and `/zh` routes, add canonical and
alternate-language metadata, and add matching messages to both locale files.

The default public surface is `/` and `/zh`, plus `/robots.txt`,
`/sitemap.xml`, and `/manifest.webmanifest`. Application routes such as login,
pricing, dashboard, and admin intentionally return 404 until you choose to add
them.

## Quality checks

```bash
pnpm check  # formatting, locale parity, unit tests, and TypeScript
pnpm build  # production build plus TypeScript
pnpm e2e    # desktop and mobile browser coverage
```

`pnpm e2e` covers both locales, language switching, theme persistence,
responsive navigation, FAQ behavior, SEO endpoints, and intentionally missing
application routes.

## Deploy to Cloudflare Workers

Authenticate Wrangler once, then deploy:

```bash
pnpm exec wrangler login
pnpm deploy
```

The committed `wrangler.jsonc` keeps `workers_dev` enabled and contains no
resource bindings or application secrets. The first deployment publishes to
your Cloudflare account's `workers.dev` subdomain.

To attach your own hostname without making it the template default:

```bash
pnpm exec wrangler deploy --domain your-site.example.com
```

Do not commit personal domains, account IDs, tokens, or secrets to a project
created from this template.

## Project map

- `src/routes/` — pages, 404 handling, and machine-readable endpoints.
- `src/components/` — layout, language/theme controls, UI primitives, and
  landing-page sections.
- `src/config/` — product-owned site identity, links, and navigation.
- `src/lib/` — locale routing, SEO, and utility contracts.
- `project.inlang/messages/` — authoritative English and Simplified Chinese
  copy.
- `tests/` — unit contracts and Playwright acceptance tests.

## License

[MIT](LICENSE)
