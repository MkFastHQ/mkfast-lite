import type { AppLocale } from '@/lib/locale';
import { Architecture } from './architecture';
import { Closing } from './closing';
import { Faq } from './faq';
import { Foundation } from './foundation';
import { Hero } from './hero';
import { Stack } from './stack';
import { Template } from './template';

export function HomePage({ locale }: { locale: AppLocale }) {
  return (
    <main id="main-content">
      <Hero locale={locale} />
      <Foundation locale={locale} />
      <Stack locale={locale} />
      <Architecture locale={locale} />
      <Template locale={locale} />
      <Faq locale={locale} />
      <Closing locale={locale} />
    </main>
  );
}
