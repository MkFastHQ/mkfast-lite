import {
  IconBrandCloudflare,
  IconFileCode,
  IconLayout,
  IconRoute,
} from '@tabler/icons-react';
import { Container, Section } from '@/components/ui/primitives';
import { type AppLocale, message } from '@/lib/locale';

const layers = [
  ['delivery', IconBrandCloudflare, 'bg-green', 'sm:ml-18'],
  ['content', IconFileCode, 'bg-lavender', 'sm:ml-12'],
  ['components', IconLayout, 'bg-cyan', 'sm:ml-6'],
  ['routes', IconRoute, 'bg-orange', 'sm:ml-0'],
] as const;

export function Architecture({ locale }: { locale: AppLocale }) {
  return (
    <Section id="architecture" className="bg-yellow text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-18">
          <div className="lg:self-center">
            <h2 className="text-balance text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl">
              {message('architecture_title', locale)}
            </h2>
            <p className="mt-6 max-w-[64ch] text-lg leading-8 text-ink/75">
              {message('architecture_description', locale)}
            </p>
          </div>
          <div className="space-y-4">
            {layers.map(([key, Icon, color, offset]) => (
              <article
                key={key}
                className={`${color} ${offset} flex items-start gap-5 rounded-[12px] border-2 border-ink p-5 text-ink shadow-[5px_5px_0_0_var(--ink)] dark:border-paper dark:shadow-[5px_5px_0_0_var(--paper)]`}
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
