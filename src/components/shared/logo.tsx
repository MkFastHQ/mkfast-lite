import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-ink bg-orange text-ink shadow-brutal-xs',
        className
      )}
    >
      <svg
        aria-hidden="true"
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M14.5 2.5 6.5 13h5l-2 8.5 8-11h-5l2-8Z" fill="currentColor" />
      </svg>
    </span>
  );
}
