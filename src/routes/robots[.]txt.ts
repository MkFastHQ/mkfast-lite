import { createFileRoute } from '@tanstack/react-router';
import { siteOrigin } from '@/lib/seo';

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: ({ request }) =>
        new Response(
          `User-agent: *\nAllow: /\nSitemap: ${siteOrigin(new URL(request.url).origin)}/sitemap.xml\n`,
          {
            headers: { 'content-type': 'text/plain; charset=utf-8' },
          }
        ),
    },
  },
});
