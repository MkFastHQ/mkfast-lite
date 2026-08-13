import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Tag({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border-2 border-ink bg-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-ink',
        className
      )}
      {...props}
    />
  );
}
