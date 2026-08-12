import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { type ButtonVariant, buttonVariants } from '@/components/ui/button';
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
      className={cn('border-t border-ink/15 py-20 sm:py-28', className)}
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
  variant?: Exclude<ButtonVariant, 'icon'>;
}) {
  return (
    <a className={buttonVariants({ className, variant })} {...props}>
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
