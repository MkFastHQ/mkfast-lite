import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/container';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/components/ui/section';
import { type AppLocale, message } from '@/lib/locale';

export function Faq({ locale }: { locale: AppLocale }) {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  return (
    <Section id="faq" className="bg-lavender text-ink">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-18">
          <h2 className="text-balance text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl">
            {message('faq_title', locale)}
          </h2>
          <Accordion defaultValue={['faq-1']} disabled={!ready}>
            {[1, 2, 3, 4].map((item) => (
              <AccordionItem key={item} value={`faq-${item}`}>
                <AccordionHeader>
                  <AccordionTrigger>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-cyan text-sm font-black text-ink">
                      {item}
                    </span>
                    {message(`faq_${item}_q` as 'faq_1_q', locale)}
                    <IconPlus
                      aria-hidden="true"
                      className="ml-auto size-6 shrink-0 transition-transform duration-150 group-data-[panel-open]:rotate-45"
                      stroke={2.5}
                    />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  <p className="max-w-[70ch] px-5 pb-6 pt-6 pl-[4.75rem] leading-7 text-ink/75 sm:px-6 sm:pl-20">
                    {message(`faq_${item}_a` as 'faq_1_a', locale)}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
