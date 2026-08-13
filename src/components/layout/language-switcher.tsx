import { IconCheck, IconLanguage } from '@tabler/icons-react';
import { useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLinkItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  type AppLocale,
  localeMeta,
  localizedPath,
  message,
} from '@/lib/locale';

function withPrefix(value: string | undefined, prefix: '?' | '#') {
  if (!value) {
    return '';
  }
  return value.startsWith(prefix) ? value : `${prefix}${value}`;
}

export function LanguageSwitcher({ locale }: { locale: AppLocale }) {
  const [ready, setReady] = useState(false);
  const location = useLocation();

  useEffect(() => setReady(true), []);

  const suffix = `${withPrefix(location.searchStr, '?')}${withPrefix(
    location.hash,
    '#'
  )}`;
  const activeLabel = message(localeMeta[locale].messageKey, locale);
  const controlLabel = `${message('language_label', locale)}: ${activeLabel}`;

  if (!ready) {
    return (
      <Button
        variant="icon"
        disabled
        className="disabled:cursor-wait"
        aria-label={controlLabel}
        title={controlLabel}
      >
        <IconLanguage aria-hidden="true" className="size-5" stroke={2.4} />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({
          variant: 'icon',
          className:
            'data-[popup-open]:translate-y-0 data-[popup-open]:shadow-none disabled:cursor-wait',
        })}
        aria-label={controlLabel}
        title={controlLabel}
      >
        <IconLanguage aria-hidden="true" className="size-5" stroke={2.4} />
      </DropdownMenuTrigger>
      <DropdownMenuContent aria-label={message('language_label', locale)}>
        {(['en', 'zh'] as const).map((option) => {
          const current = option === locale;
          return (
            <DropdownMenuLinkItem
              key={option}
              href={`${localizedPath(option)}${suffix}`}
              aria-current={current ? 'page' : undefined}
            >
              <span className="w-7 text-xs font-black uppercase text-foreground">
                {localeMeta[option].label}
              </span>
              <span>{message(localeMeta[option].messageKey, locale)}</span>
              {current && (
                <IconCheck
                  aria-hidden="true"
                  className="ml-auto size-4"
                  stroke={3}
                />
              )}
            </DropdownMenuLinkItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
