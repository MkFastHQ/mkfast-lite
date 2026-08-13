import { createFileRoute } from '@tanstack/react-router';
import { websiteConfig } from '@/config/website';

export const Route = createFileRoute('/manifest.webmanifest')({
  server: {
    handlers: {
      GET: () => {
        const manifest = {
          id: websiteConfig.manifest.id,
          name: websiteConfig.name,
          short_name: websiteConfig.name,
          description: websiteConfig.description,
          lang: 'en',
          start_url: websiteConfig.manifest.startUrl,
          scope: websiteConfig.manifest.scope,
          display: 'standalone',
          background_color: websiteConfig.colors.background,
          theme_color: websiteConfig.colors.theme,
          icons: [
            {
              src: '/icons/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/icons/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/icons/icon-maskable-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        };
        return new Response(JSON.stringify(manifest), {
          headers: {
            'content-type': 'application/manifest+json; charset=utf-8',
          },
        });
      },
    },
  },
});
