import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { websiteConfig } from '@/config/website';
import { localeMeta, localizedPath } from '@/lib/locale';
import { absoluteSiteUrl, homeHead, siteOrigin } from '@/lib/seo';
import { cn } from '@/lib/utils';

describe('TanStarter Lite core contracts', () => {
  it('uses localized simple home paths', () => {
    expect(localizedPath('en')).toBe('/');
    expect(localizedPath('zh')).toBe('/zh');
    expect(localizedPath('en', '#stack')).toBe('/#stack');
    expect(localizedPath('zh', '#stack')).toBe('/zh#stack');
    expect(localeMeta.zh.hreflang).toBe('zh-CN');
  });

  it('keeps the repository as the only external destination', () => {
    expect(websiteConfig.name).toBe('TanStarter Lite');
    expect(websiteConfig.repository).toBe(
      'https://github.com/MkFastHQ/mkfast-lite'
    );
    expect(websiteConfig.themeStorageKey).toBeTruthy();
    expect(websiteConfig.manifest.startUrl).toBe('/');
  });

  it('keeps public theme colors aligned with the CSS tokens', () => {
    const styles = readFileSync('src/styles.css', 'utf8');
    expect(styles).toContain(
      `--background: ${websiteConfig.colors.background};`
    );
    expect(styles).toContain(`--yellow: ${websiteConfig.colors.theme};`);
  });

  it('builds absolute metadata from the configured or request origin', () => {
    expect(siteOrigin('https://example.com/')).toBe('https://example.com');
    expect(absoluteSiteUrl('/zh', 'https://example.com')).toBe(
      'https://example.com/zh'
    );

    const head = homeHead('en', 'https://example.com');
    expect(head.links[0]).toEqual({
      rel: 'canonical',
      href: 'https://example.com/',
    });
    expect(head.meta).toContainEqual({
      property: 'og:image',
      content: 'https://example.com/og.png',
    });
  });

  it('joins optional class names without false values', () => {
    expect(cn('base', false, null, 'active', undefined)).toBe('base active');
  });
});
