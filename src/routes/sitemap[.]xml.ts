import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${origin}/</loc><xhtml:link rel="alternate" hreflang="en" href="${origin}/"/><xhtml:link rel="alternate" hreflang="zh-CN" href="${origin}/zh"/></url>
  <url><loc>${origin}/zh</loc><xhtml:link rel="alternate" hreflang="en" href="${origin}/"/><xhtml:link rel="alternate" hreflang="zh-CN" href="${origin}/zh"/></url>
</urlset>`;
        return new Response(xml, {
          headers: { 'content-type': 'application/xml; charset=utf-8' },
        });
      },
    },
  },
});
