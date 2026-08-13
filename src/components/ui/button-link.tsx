import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { type ButtonVariant, buttonVariants } from '@/components/ui/button';

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
