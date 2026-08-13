import {
  IconCloudUpload,
  IconLanguage,
  IconLayout,
  IconMoonStars,
  IconSearch,
  IconTestPipe,
  IconX,
} from '@tabler/icons-react';
import { Container } from '@/components/layout/container';
import { BrutalCard } from '@/components/ui/brutal-card';
import { Section } from '@/components/ui/section';
import { type AppLocale, message } from '@/lib/locale';

const includedIcons = [
  IconLayout,
  IconLanguage,
  IconMoonStars,
  IconSearch,
  IconTestPipe,
  IconCloudUpload,
];
const excludedIcons = [IconX, IconX, IconX, IconX, IconX, IconX];

export function Foundation({ locale }: { locale: AppLocale }) {
  const included = [1, 2, 3, 4, 5, 6].map((index) =>
    message(`foundation_keep_${index}` as 'foundation_keep_1', locale)
  );
  const excluded = [1, 2, 3, 4, 5, 6].map((index) =>
    message(`foundation_remove_${index}` as 'foundation_remove_1', locale)
  );

  return (
    <Section id="foundation" className="bg-yellow text-ink">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-balance text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl">
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
              <ul className="mt-6 space-y-4">
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
