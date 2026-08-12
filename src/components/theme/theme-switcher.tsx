import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { type AppLocale, message } from '@/lib/locale';

type Theme = 'light' | 'dark' | 'system';

const themes: Array<{ value: Theme; Icon: typeof IconSun }> = [
  { value: 'light', Icon: IconSun },
  { value: 'dark', Icon: IconMoon },
  { value: 'system', Icon: IconSunMoon },
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
    const sync = () => initial === 'system' && applyTheme('system');
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  function cycleTheme() {
    const index = themes.findIndex((item) => item.value === theme);
    const next = themes[(index + 1) % themes.length].value;
    setTheme(next);
    localStorage.setItem('mkfast-lite-theme', next);
    applyTheme(next);
  }

  const active = themes.find((item) => item.value === theme) ?? themes[2];
  const label = message(`theme_${theme}` as 'theme_system', locale);

  return (
    <button
      type="button"
      onClick={cycleTheme}
      disabled={!ready}
      className="inline-flex size-11 items-center justify-center rounded-lg border-2 border-ink bg-surface text-foreground shadow-brutal-xs transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
      aria-label={`${message('theme_label', locale)}: ${label}`}
      title={`${message('theme_label', locale)}: ${label}`}
    >
      <active.Icon aria-hidden="true" className="size-5" stroke={2.4} />
    </button>
  );
}
