import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Accordion({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseAccordion.Root>, 'className'> & {
  className?: string;
}) {
  return (
    <BaseAccordion.Root
      className={cn(
        'divide-y divide-ink/30 overflow-hidden rounded-[14px] border-2 border-ink bg-surface shadow-brutal dark:bg-paper',
        className
      )}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseAccordion.Item>, 'className'> & {
  className?: string;
}) {
  return <BaseAccordion.Item className={className} {...props} />;
}

export function AccordionHeader({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseAccordion.Header>, 'className'> & {
  className?: string;
}) {
  return <BaseAccordion.Header className={className} {...props} />;
}

export function AccordionTrigger({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>, 'className'> & {
  className?: string;
}) {
  return (
    <BaseAccordion.Trigger
      className={cn(
        'group flex w-full items-center gap-4 border-b border-transparent p-5 text-left text-lg font-black hover:bg-yellow hover:text-ink data-[panel-open]:border-ink/30 data-[panel-open]:bg-yellow data-[panel-open]:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-focus sm:p-6',
        className
      )}
      {...props}
    />
  );
}

export function AccordionPanel({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseAccordion.Panel>, 'className'> & {
  className?: string;
}) {
  return <BaseAccordion.Panel className={className} {...props} />;
}
