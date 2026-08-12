import { websiteConfig } from '@/config/website';
import { type AppLocale, localeMeta, message } from '@/lib/locale';

export function homeHead(locale: AppLocale) {
  const path = locale === 'zh' ? '/zh' : '/';
  const title = message('site_title', locale);
  const description = message('site_description', locale);
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: websiteConfig.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: path },
      {
        property: 'og:locale',
        content: localeMeta[locale].hreflang.replace('-', '_'),
      },
      { property: 'og:image', content: '/og.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: '/og.png' },
    ],
    links: [
      { rel: 'canonical', href: path },
      { rel: 'alternate', hrefLang: 'en', href: '/' },
      { rel: 'alternate', hrefLang: 'zh-CN', href: '/zh' },
      { rel: 'alternate', hrefLang: 'x-default', href: '/' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: websiteConfig.name,
          description,
          inLanguage: localeMeta[locale].hreflang,
        }),
      },
    ],
  };
}
