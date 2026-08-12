import { Menu as BaseMenu } from '@base-ui/react/menu';
import { IconCheck } from '@tabler/icons-react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function DropdownMenu(props: BaseMenu.Root.Props) {
  return <BaseMenu.Root {...props} />;
}

export function DropdownMenuTrigger({
  className,
  type = 'button',
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseMenu.Trigger>, 'className'> & {
  className?: string;
}) {
  return <BaseMenu.Trigger type={type} className={className} {...props} />;
}

export function DropdownMenuContent({
  align = 'end',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 8,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseMenu.Popup>, 'className'> &
  Pick<
    ComponentPropsWithoutRef<typeof BaseMenu.Positioner>,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  > & {
    className?: string;
  }) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-[100] outline-none"
      >
        <BaseMenu.Popup
          className={cn(
            'min-w-44 origin-[var(--transform-origin)] rounded-[10px] border-2 border-ink bg-surface p-1.5 text-foreground shadow-brutal outline-none transition-[transform,opacity] duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
          )}
          {...props}
        />
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

const menuItemClassName =
  'flex min-h-10 cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold outline-none data-[highlighted]:bg-yellow data-[highlighted]:text-ink data-disabled:pointer-events-none data-disabled:opacity-55';

export function DropdownMenuLinkItem({
  className,
  closeOnClick = true,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseMenu.LinkItem>, 'className'> & {
  className?: string;
}) {
  return (
    <BaseMenu.LinkItem
      closeOnClick={closeOnClick}
      className={cn(menuItemClassName, 'no-underline', className)}
      {...props}
    />
  );
}

export function DropdownMenuRadioGroup(
  props: ComponentPropsWithoutRef<typeof BaseMenu.RadioGroup>
) {
  return <BaseMenu.RadioGroup {...props} />;
}

export function DropdownMenuRadioItem({
  children,
  className,
  closeOnClick = true,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>, 'className'> & {
  className?: string;
}) {
  return (
    <BaseMenu.RadioItem
      closeOnClick={closeOnClick}
      className={cn(menuItemClassName, 'relative pr-10', className)}
      {...props}
    >
      {children}
      <BaseMenu.RadioItemIndicator className="absolute right-3 flex size-4 items-center justify-center">
        <IconCheck aria-hidden="true" className="size-4" stroke={3} />
      </BaseMenu.RadioItemIndicator>
    </BaseMenu.RadioItem>
  );
}
