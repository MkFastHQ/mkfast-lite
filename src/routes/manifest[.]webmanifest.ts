import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manifest.webmanifest')({
  server: {
    handlers: {
      GET: () =>
        Response.json({
          name: 'TanStarter Lite',
          short_name: 'TanStarter Lite',
          start_url: '/',
          display: 'standalone',
          background_color: '#fff8e8',
          theme_color: '#ffd84a',
          icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
        }),
    },
  },
});
