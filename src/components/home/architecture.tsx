import {
  IconBrandCloudflare,
  IconFileCode,
  IconLayout,
  IconRoute,
} from '@tabler/icons-react';
import type { CSSProperties } from 'react';
import { Container, Section } from '@/components/ui/primitives';
import { type AppLocale, message } from '@/lib/locale';

const layers = [
  ['routes', IconRoute, 'bg-orange'],
  ['components', IconLayout, 'bg-cyan'],
  ['content', IconFileCode, 'bg-lavender'],
  ['delivery', IconBrandCloudflare, 'bg-yellow'],
] as const;

export function Architecture({ locale }: { locale: AppLocale }) {
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
                style={{ '--index': index } as CSSProperties}
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
