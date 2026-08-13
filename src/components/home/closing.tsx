import { IconArrowRight } from '@tabler/icons-react';
import { Container } from '@/components/layout/container';
import { ButtonLink } from '@/components/ui/button-link';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Closing({ locale }: { locale: AppLocale }) {
  const closingTitle = message('closing_title', locale);
  const [firstLine, ...remainingLines] = closingTitle.split('，');

  return (
    <section className="border-t border-ink/15 bg-orange py-20 text-ink sm:py-28">
      <Container className="text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-5xl font-black leading-[1.08] tracking-[-0.035em] sm:text-6xl">
          {locale === 'zh' ? (
            <>
              {firstLine}，<br />
              {remainingLines.join('，')}
            </>
          ) : (
            closingTitle
          )}
        </h2>
        <p className="mx-auto mt-6 max-w-[66ch] text-lg leading-8 text-ink/75">
          {message('closing_description', locale)}
        </p>
        <ButtonLink
          variant="plain"
          className="mt-9 hover:bg-cyan dark:bg-paper dark:text-ink dark:hover:bg-cyan"
          href={websiteConfig.repository}
          target="_blank"
          rel="noreferrer"
        >
          {message('github_action', locale)}
          <IconArrowRight aria-hidden="true" />
        </ButtonLink>
      </Container>
    </section>
  );
}
