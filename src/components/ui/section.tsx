import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Section({
  className,
  ...props
}: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('border-t border-ink/15 py-20 sm:py-28', className)}
      {...props}
    />
  );
}
