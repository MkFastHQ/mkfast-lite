import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function BrutalCard({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'rounded-[14px] border-2 border-ink p-6 shadow-brutal',
        className
      )}
      {...props}
    />
  );
}
