import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { Logo } from '@/components/shared/logo';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { Button } from '@/components/ui/button';
import { ButtonLink, Container } from '@/components/ui/primitives';
import { websiteConfig } from '@/config/website';
import { type AppLocale, localizedPath, message } from '@/lib/locale';

export function Header({ locale }: { locale: AppLocale }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/20 bg-background/95 backdrop-blur-[8px]">
      <Container>
        <nav
          aria-label={message('nav_primary', locale)}
          className="flex min-h-18 items-center gap-5"
        >
          <a
            href={localizedPath(locale)}
            className="flex shrink-0 items-center gap-2 no-underline"
            aria-label={message('site_name', locale)}
          >
            <Logo />
            <span className="text-xl font-black tracking-[-0.02em]">
              MkFast Lite
            </span>
          </a>

          <div className="ml-auto hidden items-center gap-1 lg:flex">
            {websiteConfig.navigation.map((item) => (
              <a
                key={item.id}
                href={localizedPath(locale, `#${item.id}`)}
                className="rounded-md px-3 py-2 text-sm font-bold no-underline hover:bg-yellow hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus"
              >
                {message(item.labelKey as 'nav_stack', locale)}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            <LanguageSwitcher locale={locale} />
            <ThemeSwitcher locale={locale} />
            <span className="hidden sm:block">
              <ButtonLink
                href={websiteConfig.repository}
                target="_blank"
                rel="noreferrer"
              >
                {message('github_action', locale)}
              </ButtonLink>
            </span>
            <Button
              disabled={!ready}
              variant="icon"
              className="bg-yellow text-ink hover:bg-yellow-soft lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={message(
                open ? 'nav_close_menu' : 'nav_open_menu',
                locale
              )}
            >
              {open ? (
                <IconX aria-hidden="true" />
              ) : (
                <IconMenu2 aria-hidden="true" />
              )}
            </Button>
          </div>
        </nav>

        {open && (
          <div
            id="mobile-navigation"
            className="grid gap-2 border-t border-ink/20 py-4 lg:hidden"
          >
            {websiteConfig.navigation.map((item) => (
              <a
                key={item.id}
                href={localizedPath(locale, `#${item.id}`)}
                className="rounded-lg border-2 border-transparent px-4 py-3 font-bold no-underline hover:border-ink hover:bg-yellow hover:text-ink"
              >
                {message(item.labelKey as 'nav_stack', locale)}
              </a>
            ))}
            <ButtonLink
              href={websiteConfig.repository}
              className="mt-2 sm:hidden"
              target="_blank"
              rel="noreferrer"
            >
              {message('github_action', locale)}
            </ButtonLink>
          </div>
        )}
      </Container>
    </header>
  );
}
