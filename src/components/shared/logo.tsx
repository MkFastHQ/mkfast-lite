import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn('size-9', className)}
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="8"
        className="fill-yellow stroke-ink"
        strokeWidth="3"
      />
      <path
        d="M11 34V14h7l6 8 6-8h7v20h-7V24l-6 8-6-8v10h-7Z"
        className="fill-ink"
      />
      <path d="M35 7h7v7" className="stroke-orange" strokeWidth="3" />
    </svg>
  );
}
