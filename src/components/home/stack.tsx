import {
  IconBrandCloudflare,
  IconBrandReact,
  IconLanguage,
  IconStack2,
} from '@tabler/icons-react';
import { Container, Section } from '@/components/ui/primitives';
import { type AppLocale, message } from '@/lib/locale';

const technologies = [
  ['react', IconBrandReact, 'bg-cyan'],
  ['tanstack', IconStack2, 'bg-orange'],
  ['i18n', IconLanguage, 'bg-lavender'],
  ['cloudflare', IconBrandCloudflare, 'bg-yellow'],
] as const;

export function Stack({ locale }: { locale: AppLocale }) {
  return (
    <Section id="stack">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {message('stack_title', locale)}
          </h2>
          <p className="mt-6 max-w-[65ch] text-lg leading-8 text-muted-foreground">
            {message('stack_description', locale)}
          </p>
        </div>
        <div className="mt-14 grid overflow-hidden rounded-[14px] border-2 border-ink bg-ink md:grid-cols-2">
          {technologies.map(([key, Icon, color], index) => (
            <article
              key={key}
              className={`group flex min-h-64 flex-col justify-between ${color} p-7 text-ink md:p-9 ${index % 2 === 0 ? 'md:border-r-2 md:border-ink' : ''} ${index < 2 ? 'border-b-2 border-ink' : index === 2 ? 'border-b-2 border-ink md:border-b-0' : ''}`}
            >
              <Icon
                aria-hidden="true"
                className="size-11 transition-transform duration-200 group-hover:rotate-[-6deg] group-hover:scale-110"
                stroke={2.2}
              />
              <div className="mt-10">
                <h3 className="text-3xl font-black">
                  {message(`stack_${key}` as 'stack_react', locale)}
                </h3>
                <p className="mt-3 max-w-[46ch] leading-7 text-ink/75">
                  {message(
                    `stack_${key}_detail` as 'stack_react_detail',
                    locale
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
