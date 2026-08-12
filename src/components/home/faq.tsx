import { useState } from 'react';
import { Container, Section } from '@/components/ui/primitives';
import { type AppLocale, message } from '@/lib/locale';

export function Faq({ locale }: { locale: AppLocale }) {
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
