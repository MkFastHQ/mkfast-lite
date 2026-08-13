import {
  IconArrowRight,
  IconBrandCloudflare,
  IconCheck,
} from '@tabler/icons-react';
import { Container } from '@/components/layout/container';
import { BrutalCard } from '@/components/ui/brutal-card';
import { ButtonLink } from '@/components/ui/button-link';
import { Tag } from '@/components/ui/tag';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Hero({ locale }: { locale: AppLocale }) {
  const items = [1, 2, 3, 4].map((index) =>
    message(`hero_board_item_${index}` as 'hero_board_item_1', locale)
  );

  return (
    <section className="hero-section relative isolate flex min-h-[calc(100vh-4.625rem)] min-h-[calc(100dvh-4.625rem)] items-center overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-18">
      <div
        className="hero-blueprint pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-blueprint-piece hero-blueprint-piece-cyan" />
        <div className="hero-blueprint-piece hero-blueprint-piece-orange" />
        <div className="hero-blueprint-piece hero-blueprint-piece-lavender" />
        <svg
          className="hero-blueprint-lines"
          viewBox="0 0 1440 820"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path d="M0 148H226V96H418" />
          <path d="M94 121v54M121 133v30M148 133v30M175 133v30M202 121v54" />
          <circle cx="226" cy="148" r="8" />
          <path d="M1008 92h252v54h180" />
          <path d="M1218 119h18M1248 119h18M1278 119h18M1308 119h18" />
          <circle cx="1008" cy="92" r="8" />
          <path d="M0 658h174v72h252" />
          <path d="M204 703v54M231 715v30M258 715v30M285 715v30M312 703v54" />
          <circle cx="174" cy="658" r="8" />
          <path d="M1084 674h164v-82h192" />
          <path d="M1108 647v54M1135 659v30M1162 659v30M1189 659v30M1216 647v54" />
          <circle cx="1248" cy="674" r="8" />
        </svg>
        <span className="hero-blueprint-bolt hero-blueprint-bolt-one" />
        <span className="hero-blueprint-bolt hero-blueprint-bolt-two" />
        <span className="hero-blueprint-bolt hero-blueprint-bolt-three" />
      </div>

      <Container className="relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <Tag>{message('hero_badge', locale)}</Tag>
            <h1 className="mt-7 max-w-[780px] text-balance text-[clamp(3.5rem,7vw,5.5rem)] font-black leading-[1.06] tracking-[-0.035em]">
              <span className="block">{message('hero_title_a', locale)}</span>
              <span className="block text-orange">
                {message('hero_title_b', locale)}
              </span>
            </h1>
            <p className="mt-7 max-w-[66ch] text-lg leading-8 text-muted-foreground sm:text-xl">
              {message('hero_description', locale)}
            </p>
            <ButtonLink
              variant="plain"
              className="mt-9 hover:bg-cyan dark:bg-paper dark:text-ink dark:hover:bg-cyan"
              href={websiteConfig.repository}
              target="_blank"
              rel="noreferrer"
            >
              {message('github_action', locale)}
              <IconArrowRight aria-hidden="true" className="size-5" />
            </ButtonLink>
            <p className="mt-10 text-sm font-bold text-muted-foreground">
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
              <div className="flex items-center justify-between px-0 py-4">
                <span
                  data-slot="hero-board-title"
                  className="font-black text-ink"
                >
                  {message('hero_board_title', locale)}
                </span>
                <span className="rounded-full border-2 border-ink bg-lavender px-3 py-1 text-xs font-black uppercase text-ink">
                  {message('hero_board_status', locale)}
                </span>
              </div>
              <div
                data-slot="hero-board-content"
                className="grid gap-3 border-2 border-ink bg-paper p-5 sm:p-7"
              >
                {items.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[10px] border-2 border-ink bg-paper p-4 text-ink shadow-brutal-xs"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-cyan font-black text-ink">
                      {index + 1}
                    </span>
                    <span className="font-bold">{item}</span>
                    <IconCheck
                      aria-hidden="true"
                      className="ml-auto size-5 text-ink"
                      stroke={3}
                    />
                  </div>
                ))}
              </div>
              <div
                data-slot="hero-board-deploy"
                className="mt-4 flex items-center gap-3 rounded-[10px] border-2 border-ink bg-green px-5 py-4 text-sm font-black text-ink shadow-brutal-xs"
              >
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
