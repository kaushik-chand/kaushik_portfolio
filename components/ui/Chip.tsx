import { cn } from "@/lib/utils";

export function Chip({
  children,
  active = false,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "relative z-0 inline-flex min-h-11 items-center rounded-md border px-3.5 py-2 text-sm transition-colors duration-300 ease-expo",
        active
          ? "border-accent/50 bg-accent/10 text-ink"
          : "border-border bg-transparent text-ink-muted hover:border-ink-faint hover:text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-sm border border-border bg-surface px-2.5 py-1 text-xs text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
