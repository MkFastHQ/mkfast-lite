import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1180px] px-5 sm:px-7', className)}
      {...props}
    />
  );
}

export function Section({
  className,
  ...props
}: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('border-t-2 border-ink py-20 sm:py-28', className)}
      {...props}
    />
  );
}

export function ButtonLink({
  children,
  className,
  variant = 'primary',
  ...props
}: ComponentPropsWithoutRef<'a'> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'plain';
}) {
  return (
    <a
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-ink px-5 py-2.5 text-base font-extrabold no-underline shadow-brutal transition-[transform,box-shadow,background-color] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus active:translate-x-1 active:translate-y-1 active:shadow-none',
        variant === 'primary' && 'bg-orange text-ink hover:bg-orange-strong',
        variant === 'secondary' && 'bg-yellow text-ink hover:bg-yellow-soft',
        variant === 'plain' && 'bg-surface text-foreground hover:bg-muted',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

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
