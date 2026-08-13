import { IconArrowRight } from '@tabler/icons-react';
import { Container } from '@/components/layout/container';
import { BrutalCard } from '@/components/ui/brutal-card';
import { ButtonLink } from '@/components/ui/button-link';
import { Section } from '@/components/ui/section';
import { Tag } from '@/components/ui/tag';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Template({ locale }: { locale: AppLocale }) {
  return (
    <Section id="template" className="bg-cyan text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="text-balance text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl">
              {message('template_title', locale)}
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-8 text-ink/75">
              {message('template_description', locale)}
            </p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((step) => (
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
            <Tag className="!bg-green">
              {message('template_repo_label', locale)}
            </Tag>
            <div className="mt-8 border-y border-ink/30 py-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink/55">
                github.com
              </p>
              <h3 className="mt-2 break-words text-3xl font-black sm:text-4xl">
                {message('template_repo_title', locale)}
              </h3>
              <p className="mt-4 max-w-[42ch] leading-7 text-ink/70">
                {message('hero_title_a', locale)}{' '}
                {message('hero_title_b', locale)}
              </p>
            </div>
            <ButtonLink
              href={websiteConfig.repository}
              className="mt-7 w-full"
              target="_blank"
              rel="noreferrer"
            >
              {message('github_action', locale)}
              <IconArrowRight aria-hidden="true" />
            </ButtonLink>
          </BrutalCard>
        </div>
      </Container>
    </Section>
  );
}
