import { expect, test } from '@playwright/test';

test.describe('simple landing page', () => {
  test('renders English and localized SEO', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(
      page.getByRole('navigation', { name: 'Primary navigation' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /A smaller start/i })
    ).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      '/'
    );
    await expect(page.locator('link[hreflang="zh-CN"]')).toHaveAttribute(
      'href',
      '/zh'
    );
    await expect(page.locator('#foundation')).toHaveCount(0);
    await expect(page.locator('#stack')).toBeVisible();
    await expect(page.locator('#architecture')).toBeVisible();
    await expect(
      page.locator('#architecture article h3').allTextContents()
    ).resolves.toEqual(['Delivery', 'Content', 'Components', 'Routes']);
    await expect(
      page.getByText(
        'Build with Vite, then deploy to Cloudflare Workers on workers.dev.'
      )
    ).toBeVisible();
    await expect(page.locator('#template')).toBeVisible();
    await expect(
      page.locator('#template').getByText('MIT License', { exact: true })
    ).toBeVisible();
    await expect(
      page
        .locator('#template')
        .getByText('A smaller start A faster site', { exact: true })
    ).toBeVisible();
    await expect(page.locator('#faq')).toBeVisible();
    await expect(
      page.getByText(
        `© TanStarter Lite ${new Date().getFullYear()}. All rights reserved.`
      )
    ).toBeVisible();
  });

  test('renders Simplified Chinese at /zh', async ({ page }) => {
    await page.goto('/zh');
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
    await expect(
      page.getByRole('navigation', { name: '主导航' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /更轻的起点/ })
    ).toBeVisible();
    await expect(
      page.getByText('完整落地页 · 无后端负担', { exact: true })
    ).toBeVisible();
    await expect(page.getByRole('button', { name: /^语言:/ })).toHaveCSS(
      'background-color',
      'rgb(255, 253, 247)'
    );
    await expect(page.getByText('结构完整的落地页')).toBeVisible();
    await expect(
      page.getByText(
        `© TanStarter Lite ${new Date().getFullYear()}。保留所有权利。`
      )
    ).toBeVisible();
  });

  test('switches and persists theme', async ({ page }) => {
    await page.goto('/');
    const theme = page.getByRole('button', { name: /^Theme:/ });
    await theme.click();
    await page.getByRole('menuitemradio', { name: 'Light' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('#stack')).toHaveCSS(
      'background-color',
      'rgb(196, 183, 242)'
    );
    await expect(page.locator('#architecture')).toHaveCSS(
      'background-color',
      'rgb(255, 216, 74)'
    );
    await expect(page.locator('#faq')).toHaveCSS(
      'background-color',
      'rgb(168, 220, 115)'
    );
    await theme.click();
    await page.getByRole('menuitemradio', { name: 'Dark' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('[data-slot="hero-board-title"]')).toHaveCSS(
      'color',
      'rgb(7, 6, 6)'
    );
    await expect(page.locator('[data-slot="hero-board-content"]')).toHaveCSS(
      'border-left-width',
      '2px'
    );
    await expect(page.locator('[data-slot="hero-board-content"]')).toHaveCSS(
      'border-top-width',
      '2px'
    );
    await expect(page.locator('[data-slot="hero-board-content"]')).toHaveCSS(
      'border-right-width',
      '2px'
    );
    await expect(page.locator('[data-slot="hero-board-content"]')).toHaveCSS(
      'border-bottom-width',
      '2px'
    );
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('switches language from a menu and preserves the anchor', async ({
    page,
  }) => {
    await page.goto('/#faq');
    await page.getByRole('button', { name: /^Language:/ }).click();
    const chineseLanguage = page.getByRole('menuitem', { name: /简体中文/ });
    await expect(chineseLanguage).toBeVisible();
    await chineseLanguage.click();

    await expect(page).toHaveURL(/\/zh#faq$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  });

  test('opens one FAQ answer at a time', async ({ page }) => {
    await page.goto('/');
    const firstQuestion = page.getByRole('button', {
      name: /Is TanStarter Lite a SaaS starter/i,
    });
    const secondQuestion = page.getByRole('button', {
      name: /Can I add more pages/i,
    });

    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    await expect(secondQuestion).toBeEnabled();
    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute('aria-expanded', 'true');
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });

  test('opens mobile navigation and reaches an anchor', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile', 'mobile project only');
    await page.goto('/');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    const menu = page.locator('#mobile-navigation');
    await expect(menu).toBeVisible();
    await menu.getByRole('link', { name: 'Stack' }).click();
    await expect(page.locator('#stack')).toBeInViewport();
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
      await expect(page.getByText('404')).toBeVisible();
    }

    await expect(
      page.getByRole('heading', { name: '这里没有页面。' })
    ).toBeVisible();
    await expect(
      page.getByText('TanStarter Lite 默认只提供一个简单的落地页。')
    ).toBeVisible();
  });

  test('serves machine-readable endpoints', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain('Sitemap:');
    expect(await robots.text()).toContain('/sitemap.xml');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBe(true);
    expect(await sitemap.text()).toContain('<urlset');
    expect(await sitemap.text()).toContain('http://127.0.0.1:3000/zh');

    const manifest = await request.get('/manifest.webmanifest');
    expect(manifest.ok()).toBe(true);
    expect((await manifest.json()).name).toBe('TanStarter Lite');
  });
});
