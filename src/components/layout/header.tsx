import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/container';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { ThemeSwitcher } from '@/components/layout/theme-switcher';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/ui/button-link';
import { websiteConfig } from '@/config/website';
import { useScroll } from '@/hooks/use-scroll';
import { type AppLocale, localizedPath, message } from '@/lib/locale';
import { cn } from '@/lib/utils';

export function Header({ locale }: { locale: AppLocale }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const scrolled = useScroll(50);

  useEffect(() => {
    setReady(true);
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-background/95 backdrop-blur-[8px]',
        scrolled && 'border-b border-ink/20'
      )}
    >
      <Container>
        <nav
          aria-label={message('nav_primary', locale)}
          className="flex min-h-18 items-center gap-5 lg:grid lg:grid-cols-[1fr_auto_1fr]"
        >
          <a
            href={localizedPath(locale)}
            className="flex shrink-0 items-center gap-2 no-underline"
            aria-label={websiteConfig.name}
          >
            <Logo />
            <span className="hidden text-xl font-black tracking-[-0.02em] min-[360px]:inline">
              {websiteConfig.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
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

          <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:justify-self-end">
            <LanguageSwitcher locale={locale} />
            <ThemeSwitcher locale={locale} />
            <span className="hidden sm:block">
              <ButtonLink
                variant="plain"
                className="!min-h-11 px-4 py-2 text-sm dark:bg-paper dark:text-ink dark:hover:bg-cyan"
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
