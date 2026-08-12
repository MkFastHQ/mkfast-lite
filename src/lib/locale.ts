import * as m from '@/locale/paraglide/messages';

export type AppLocale = 'en' | 'zh';

export function message(key: keyof typeof m, locale: AppLocale): string {
  const value = m[key];
  if (typeof value !== 'function') {
    return key;
  }
  return value({}, { locale });
}

export function localizedPath(locale: AppLocale, hash = '') {
  return `${locale === 'zh' ? '/zh' : '/'}${hash}`;
}

export const localeMeta = {
  en: { hreflang: 'en', label: 'EN' },
  zh: { hreflang: 'zh-CN', label: '中' },
} as const;
