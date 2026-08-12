import { describe, expect, it } from 'vitest';
import { websiteConfig } from '@/config/website';
import { localeMeta, localizedPath, message } from '@/lib/locale';
import { cn } from '@/lib/utils';

describe('MkFast Lite core contracts', () => {
  it('uses localized simple home paths', () => {
    expect(localizedPath('en')).toBe('/');
    expect(localizedPath('zh')).toBe('/zh');
    expect(localizedPath('en', '#stack')).toBe('/#stack');
    expect(localizedPath('zh', '#stack')).toBe('/zh#stack');
    expect(localeMeta.zh.hreflang).toBe('zh-CN');
  });

  it('reads both authoritative locale sources', () => {
    expect(message('hero_title_a', 'en')).toBe('A smaller start');
    expect(message('hero_title_a', 'zh')).toBe('更轻的起点，');
  });

  it('keeps the repository as the only external destination', () => {
    expect(websiteConfig.name).toBe('MkFast Lite');
    expect(websiteConfig.repository).toBe(
      'https://github.com/MkFastHQ/mkfast-lite'
    );
    expect(Object.keys(websiteConfig)).toEqual([
      'name',
      'repository',
      'defaultTheme',
      'navigation',
    ]);
  });

  it('joins optional class names without false values', () => {
    expect(cn('base', false, null, 'active', undefined)).toBe('base active');
  });
});
