import { IconArrowRight } from '@tabler/icons-react';
import { ButtonLink, Container } from '@/components/ui/primitives';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Closing({ locale }: { locale: AppLocale }) {
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
