import { expect, test } from '@playwright/test';

test.describe('simple landing page', () => {
  test('renders English and localized SEO', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('header nav')).toBeVisible();
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new URL('/', page.url()).toString()
    );
    await expect(page.locator('link[hreflang="zh-CN"]')).toHaveAttribute(
      'href',
      new URL('/zh', page.url()).toString()
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      new URL('/', page.url()).toString()
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      new URL('/og.png', page.url()).toString()
    );
    await expect(page.locator('#foundation')).toHaveCount(0);
    await expect(page.locator('#stack')).toBeVisible();
    await expect(page.locator('#structure')).toBeVisible();
    await expect(page.locator('#structure article')).toHaveCount(4);
    await expect(page.locator('#template')).toBeVisible();
    await expect(page.locator('#faq')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('renders Simplified Chinese at /zh', async ({ page }) => {
    await page.goto('/zh');
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
    await expect(page.locator('header nav')).toBeVisible();
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('#stack')).toBeVisible();
    await expect(page.locator('#structure')).toBeVisible();
    await expect(page.locator('#template')).toBeVisible();
    await expect(page.locator('#faq')).toBeVisible();
  });

  test('switches and persists theme', async ({ page }) => {
    await page.goto('/');
    const theme = page.locator('[data-slot="theme-switcher-trigger"]');
    await theme.click();
    await page.locator('[data-theme-option="light"]').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await theme.click();
    await page.locator('[data-theme-option="dark"]').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('switches language from a menu and preserves the anchor', async ({
    page,
  }) => {
    await page.goto('/#faq');
    await page.locator('[data-slot="language-switcher-trigger"]').click();
    const chineseLanguage = page.locator('[data-locale="zh"]');
    await expect(chineseLanguage).toBeVisible();
    await chineseLanguage.click();

    await expect(page).toHaveURL(/\/zh#faq$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  });

  test('opens one FAQ answer at a time', async ({ page }) => {
    await page.goto('/');
    const questions = page.locator('#faq button');
    const firstQuestion = questions.nth(0);
    const secondQuestion = questions.nth(1);

    await expect(questions).toHaveCount(4);
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    await expect(secondQuestion).toBeEnabled();
    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute('aria-expanded', 'true');
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });

  test('opens mobile navigation and reaches an anchor', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile', 'mobile project only');
    await page.goto('/');
    await page.locator('button[aria-controls="mobile-navigation"]').click();
    const menu = page.locator('#mobile-navigation');
    await expect(menu).toBeVisible();
    await menu.locator('a[href="/#stack"]').click();
    await expect(page.locator('#stack')).toBeInViewport();
  });

  test('keeps mobile navigation available at 320px', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile', 'mobile project only');
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto('/');

    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth
        )
      )
      .toBe(true);
    const menuButton = page.locator(
      'button[aria-controls="mobile-navigation"]'
    );
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.locator('#mobile-navigation')).toBeVisible();
  });

  test('keeps intentionally absent application routes at 404', async ({
    page,
  }) => {
    for (const path of [
      '/login',
      '/register',
      '/pricing',
      '/dashboard',
      '/admin',
      '/blog',
      '/contact',
      '/api/auth',
      '/zh/login',
    ]) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(404);
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        'content',
        'noindex, nofollow'
      );
    }
  });

  test('serves machine-readable endpoints', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain('Sitemap:');
    expect(await robots.text()).toContain('/sitemap.xml');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBe(true);
    const sitemapXml = await sitemap.text();
    expect(sitemapXml).toContain('<urlset');
    const paths = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      ([, url]) => new URL(url).pathname
    );
    expect(paths).toEqual(['/', '/zh']);

    const manifest = await request.get('/manifest.webmanifest');
    expect(manifest.ok()).toBe(true);
    expect(manifest.headers()['content-type']).toContain(
      'application/manifest+json'
    );
    const manifestJson = await manifest.json();
    expect(manifestJson.name).toBeTruthy();
    expect(manifestJson.start_url).toBe('/');
    expect(manifestJson.scope).toBe('/');
    expect(manifestJson.icons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ sizes: '192x192', type: 'image/png' }),
        expect.objectContaining({ sizes: '512x512', type: 'image/png' }),
        expect.objectContaining({ purpose: 'maskable' }),
      ])
    );

    for (const icon of manifestJson.icons) {
      const response = await request.get(icon.src);
      expect(response.ok(), icon.src).toBe(true);
      expect(response.headers()['content-type']).toContain('image/png');
    }
  });
});
