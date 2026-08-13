import { websiteConfig } from '@/config/website';
import { type AppLocale, localeMeta, message } from '@/lib/locale';

function withoutTrailingSlash(value: string) {
  return value.replace(/\/$/, '');
}

export function siteOrigin(requestOrigin?: string) {
  return withoutTrailingSlash(
    websiteConfig.url ?? requestOrigin ?? 'http://localhost:3000'
  );
}

export function absoluteSiteUrl(path: string, requestOrigin?: string) {
  return new URL(path, `${siteOrigin(requestOrigin)}/`).toString();
}

export function homeHead(locale: AppLocale, requestOrigin?: string) {
  const path = locale === 'zh' ? '/zh' : '/';
  const title = message('site_title', locale);
  const description = message('site_description', locale);
  const pageUrl = absoluteSiteUrl(path, requestOrigin);
  const imageUrl = absoluteSiteUrl('/og.png', requestOrigin);
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: websiteConfig.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: pageUrl },
      {
        property: 'og:locale',
        content: localeMeta[locale].hreflang.replace('-', '_'),
      },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: message('social_image_alt', locale),
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      {
        name: 'twitter:image:alt',
        content: message('social_image_alt', locale),
      },
    ],
    links: [
      { rel: 'canonical', href: pageUrl },
      {
        rel: 'alternate',
        hrefLang: 'en',
        href: absoluteSiteUrl('/', requestOrigin),
      },
      {
        rel: 'alternate',
        hrefLang: 'zh-CN',
        href: absoluteSiteUrl('/zh', requestOrigin),
      },
      {
        rel: 'alternate',
        hrefLang: 'x-default',
        href: absoluteSiteUrl('/', requestOrigin),
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: websiteConfig.name,
          url: pageUrl,
          description,
          inLanguage: localeMeta[locale].hreflang,
        }),
      },
    ],
  };
}
