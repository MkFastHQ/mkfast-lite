import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type AppLocale, message } from '@/lib/locale';

type Theme = 'light' | 'dark' | 'system';

const themes: Array<{ value: Theme; Icon: typeof IconSun }> = [
  { value: 'light', Icon: IconSun },
  { value: 'dark', Icon: IconMoon },
  { value: 'system', Icon: IconDeviceDesktop },
];

function applyTheme(theme: Theme) {
  const dark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
}

export function ThemeSwitcher({ locale }: { locale: AppLocale }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('mkfast-lite-theme') as Theme | null;
    const initial = themes.some((item) => item.value === stored)
      ? (stored as Theme)
      : 'system';
    setTheme(initial);
    applyTheme(initial);
    setReady(true);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () =>
      document.documentElement.dataset.theme === 'system' &&
      applyTheme('system');
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  function selectTheme(next: Theme) {
    setTheme(next);
    localStorage.setItem('mkfast-lite-theme', next);
    applyTheme(next);
  }

  const active = themes.find((item) => item.value === theme) ?? themes[2];
  const label = message(`theme_${theme}` as 'theme_system', locale);
  const controlLabel = `${message('theme_label', locale)}: ${label}`;

  if (!ready) {
    return (
      <Button
        variant="icon"
        disabled
        className="disabled:cursor-wait"
        aria-label={controlLabel}
        title={controlLabel}
      >
        <active.Icon aria-hidden="true" className="size-5" stroke={2.4} />
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
        <active.Icon aria-hidden="true" className="size-5" stroke={2.4} />
      </DropdownMenuTrigger>
      <DropdownMenuContent aria-label={message('theme_label', locale)}>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(next) => selectTheme(next as Theme)}
        >
          {themes.map(({ value, Icon }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              <Icon aria-hidden="true" className="size-4" stroke={2.4} />
              {message(`theme_${value}` as 'theme_system', locale)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
