import {
  IconArrowDown,
  IconArrowRight,
  IconBrandCloudflare,
  IconBrandReact,
  IconCheck,
  IconFileCode,
  IconLanguage,
  IconLayout,
  IconMoonStars,
  IconRoute,
  IconSearch,
  IconServerOff,
  IconStack2,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';
import {
  BrutalCard,
  ButtonLink,
  Container,
  Section,
  Tag,
} from '@/components/ui/primitives';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

const includedIcons = [IconLayout, IconLanguage, IconMoonStars, IconSearch];
const excludedIcons = [IconServerOff, IconX, IconX, IconX];

function Hero({ locale }: { locale: AppLocale }) {
  const items = [1, 2, 3, 4].map((index) =>
    message(`hero_board_item_${index}` as 'hero_board_item_1', locale)
  );
  return (
    <section className="overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-18">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <Tag>{message('hero_badge', locale)}</Tag>
            <h1 className="mt-7 max-w-[780px] text-balance text-[clamp(3.5rem,8vw,6rem)] font-black leading-[0.91] tracking-[-0.035em]">
              {message('hero_title_a', locale)}{' '}
              <span className="text-orange">
                {message('hero_title_b', locale)}
              </span>
            </h1>
            <p className="mt-7 max-w-[66ch] text-lg leading-8 text-muted-foreground sm:text-xl">
              {message('hero_description', locale)}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href={websiteConfig.template}
                target="_blank"
                rel="noreferrer"
              >
                {message('hero_primary', locale)}
                <IconArrowRight aria-hidden="true" className="size-5" />
              </ButtonLink>
              <ButtonLink href="#foundation" variant="plain">
                {message('hero_secondary', locale)}
                <IconArrowDown aria-hidden="true" className="size-5" />
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-bold text-muted-foreground">
              {message('hero_note', locale)}
            </p>
          </div>

          <div className="hero-board relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div
              className="absolute -left-5 -top-5 size-24 rotate-[-7deg] rounded-[12px] border-2 border-ink bg-cyan shadow-brutal"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-5 size-28 rotate-[8deg] rounded-full border-2 border-ink bg-lavender shadow-brutal"
              aria-hidden="true"
            />
            <BrutalCard className="relative bg-yellow p-0">
              <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4">
                <span className="font-black">
                  {message('hero_board_title', locale)}
                </span>
                <span className="rounded-full border-2 border-ink bg-green px-3 py-1 text-xs font-black uppercase text-ink">
                  {message('hero_board_status', locale)}
                </span>
              </div>
              <div className="grid gap-3 bg-surface p-5 sm:p-7">
                {items.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[10px] border-2 border-ink bg-background p-4 shadow-brutal-xs"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-cyan font-black text-ink">
                      {index + 1}
                    </span>
                    <span className="font-bold">{item}</span>
                    <IconCheck
                      aria-hidden="true"
                      className="ml-auto size-5 text-positive"
                      stroke={3}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t-2 border-ink bg-orange px-5 py-4 text-sm font-black text-ink">
                <IconBrandCloudflare aria-hidden="true" />
                <span>pnpm deploy</span>
                <span className="ml-auto">→ workers.dev</span>
              </div>
            </BrutalCard>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Foundation({ locale }: { locale: AppLocale }) {
  const included = [1, 2, 3, 4].map((index) =>
    message(`foundation_keep_${index}` as 'foundation_keep_1', locale)
  );
  const excluded = [1, 2, 3, 4].map((index) =>
    message(`foundation_remove_${index}` as 'foundation_remove_1', locale)
  );
  return (
    <Section id="foundation" className="bg-yellow text-ink">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              {message('foundation_title', locale)}
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-8 text-ink/75">
              {message('foundation_description', locale)}
            </p>
            <blockquote className="mt-10 rotate-[-1deg] rounded-[12px] border-2 border-ink bg-paper p-6 text-xl font-black leading-snug shadow-brutal">
              “{message('foundation_quote', locale)}”
            </blockquote>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <BrutalCard className="bg-green text-ink">
              <h3 className="text-2xl font-black">
                {message('foundation_keep_title', locale)}
              </h3>
              <ul className="mt-6 space-y-5">
                {included.map((item, index) => {
                  const Icon = includedIcons[index];
                  return (
                    <li key={item} className="flex gap-3 font-bold">
                      <Icon className="mt-0.5 size-5 shrink-0" stroke={2.5} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </BrutalCard>
            <BrutalCard className="bg-orange text-ink sm:translate-y-8">
              <h3 className="text-2xl font-black">
                {message('foundation_remove_title', locale)}
              </h3>
              <ul className="mt-6 space-y-5">
                {excluded.map((item, index) => {
                  const Icon = excludedIcons[index];
                  return (
                    <li key={item} className="flex gap-3 font-bold">
                      <Icon className="mt-0.5 size-5 shrink-0" stroke={2.5} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </BrutalCard>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Stack({ locale }: { locale: AppLocale }) {
  const stack = [
    ['react', IconBrandReact, 'bg-cyan'],
    ['tanstack', IconStack2, 'bg-orange'],
    ['i18n', IconLanguage, 'bg-lavender'],
    ['cloudflare', IconBrandCloudflare, 'bg-yellow'],
  ] as const;
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
          {stack.map(([key, Icon, color], index) => (
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

function Architecture({ locale }: { locale: AppLocale }) {
  const layers = [
    ['routes', IconRoute, 'bg-orange'],
    ['components', IconLayout, 'bg-cyan'],
    ['content', IconFileCode, 'bg-lavender'],
    ['delivery', IconBrandCloudflare, 'bg-yellow'],
  ] as const;
  return (
    <Section id="architecture" className="bg-ink text-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-18">
          <div>
            <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              {message('architecture_title', locale)}
            </h2>
            <p className="mt-6 max-w-[64ch] text-lg leading-8 text-paper/70">
              {message('architecture_description', locale)}
            </p>
          </div>
          <div className="space-y-4">
            {layers.map(([key, Icon, color], index) => (
              <article
                key={key}
                className={`${color} flex items-start gap-5 rounded-[12px] border-2 border-paper p-5 text-ink shadow-[5px_5px_0_0_var(--paper)] sm:ml-[calc(var(--index)*1.5rem)]`}
                style={{ '--index': index } as React.CSSProperties}
              >
                <Icon
                  aria-hidden="true"
                  className="mt-1 size-7 shrink-0"
                  stroke={2.5}
                />
                <div>
                  <h3 className="text-xl font-black">
                    {message(
                      `architecture_${key}` as 'architecture_routes',
                      locale
                    )}
                  </h3>
                  <p className="mt-1 leading-6 text-ink/75">
                    {message(
                      `architecture_${key}_detail` as 'architecture_routes_detail',
                      locale
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Template({ locale }: { locale: AppLocale }) {
  const steps = [1, 2, 3, 4];
  return (
    <Section id="template" className="bg-cyan text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              {message('template_title', locale)}
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-8 text-ink/75">
              {message('template_description', locale)}
            </p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {steps.map((step) => (
                <li
                  key={step}
                  className="rounded-[12px] border-2 border-ink bg-paper p-5 shadow-brutal-xs"
                >
                  <span className="mb-4 flex size-9 items-center justify-center rounded-md border-2 border-ink bg-yellow font-black">
                    {step}
                  </span>
                  <h3 className="text-xl font-black">
                    {message(
                      `template_step_${step}_title` as 'template_step_1_title',
                      locale
                    )}
                  </h3>
                  <p className="mt-2 leading-6 text-ink/70">
                    {message(
                      `template_step_${step}_detail` as 'template_step_1_detail',
                      locale
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <BrutalCard className="self-center bg-paper text-ink lg:rotate-[1.5deg]">
            <Tag className="bg-lavender">
              {message('template_repo_label', locale)}
            </Tag>
            <div className="mt-8 border-y-2 border-ink py-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink/55">
                github.com
              </p>
              <h3 className="mt-2 break-words text-3xl font-black sm:text-4xl">
                {message('template_repo_title', locale)}
              </h3>
              <p className="mt-4 max-w-[42ch] leading-7 text-ink/70">
                {message('template_repo_detail', locale)}
              </p>
            </div>
            <ButtonLink
              href={websiteConfig.template}
              className="mt-7 w-full"
              target="_blank"
              rel="noreferrer"
            >
              {message('template_repo_action', locale)}
              <IconArrowRight aria-hidden="true" />
            </ButtonLink>
          </BrutalCard>
        </div>
      </Container>
    </Section>
  );
}

function Faq({ locale }: { locale: AppLocale }) {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-18">
          <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {message('faq_title', locale)}
          </h2>
          <div className="divide-y-2 divide-ink overflow-hidden rounded-[14px] border-2 border-ink bg-surface shadow-brutal">
            {[1, 2, 3, 4].map((item, index) => {
              const expanded = open === index;
              return (
                <div key={item}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center gap-4 p-5 text-left text-lg font-black hover:bg-yellow hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-focus sm:p-6"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? -1 : index)}
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-cyan text-sm text-ink">
                        ?
                      </span>
                      {message(`faq_${item}_q` as 'faq_1_q', locale)}
                      <span className="ml-auto text-2xl" aria-hidden="true">
                        {expanded ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  {expanded && (
                    <p className="max-w-[70ch] px-5 pb-6 pl-[4.75rem] leading-7 text-muted-foreground sm:px-6 sm:pl-20">
                      {message(`faq_${item}_a` as 'faq_1_a', locale)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Closing({ locale }: { locale: AppLocale }) {
  return (
    <section className="border-t-2 border-ink bg-orange py-20 text-ink sm:py-28">
      <Container className="text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
          {message('closing_title', locale)}
        </h2>
        <p className="mx-auto mt-6 max-w-[66ch] text-lg leading-8 text-ink/75">
          {message('closing_description', locale)}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink
            className="bg-yellow"
            href={websiteConfig.template}
            target="_blank"
            rel="noreferrer"
          >
            {message('closing_primary', locale)}
            <IconArrowRight aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            variant="plain"
            href={websiteConfig.repository}
            target="_blank"
            rel="noreferrer"
          >
            {message('closing_secondary', locale)}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

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
