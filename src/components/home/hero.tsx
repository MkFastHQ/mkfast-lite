import {
  IconArrowDown,
  IconArrowRight,
  IconBrandCloudflare,
  IconCheck,
} from '@tabler/icons-react';
import {
  BrutalCard,
  ButtonLink,
  Container,
  Tag,
} from '@/components/ui/primitives';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Hero({ locale }: { locale: AppLocale }) {
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
