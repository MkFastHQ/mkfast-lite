export const websiteConfig = {
  name: 'TanStarter Lite',
  description: 'A minimal multilingual website starter for Cloudflare Workers.',
  url: null as string | null,
  repository: 'https://github.com/MkFastHQ/mkfast-lite',
  defaultTheme: 'system' as const,
  themeStorageKey: 'tanstarter-lite-theme',
  colors: {
    background: '#fff8e8',
    theme: '#ffd84a',
  },
  manifest: {
    id: '/',
    startUrl: '/',
    scope: '/',
  },
  navigation: [
    { id: 'stack', labelKey: 'nav_stack' },
    { id: 'structure', labelKey: 'nav_structure' },
    { id: 'faq', labelKey: 'nav_faq' },
  ],
};
