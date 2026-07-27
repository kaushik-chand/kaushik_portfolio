import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export function BrowserFrame({ children, className, title = "project" }: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-border bg-surface shadow-elev1",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
        <span className="ml-3 truncate text-xs text-ink-faint">{title}</span>
      </div>
      <div className="relative aspect-[16/10] bg-base">{children}</div>
    </div>
  );
}

/** Placeholder when real screenshots are missing */
export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface via-base to-surface-hover p-6">
      <div className="h-px w-16 bg-border" />
      <p className="max-w-[14rem] text-center text-sm text-ink-muted">{label}</p>
      <p className="text-xs text-ink-faint">Screenshot pending</p>
      <div className="h-px w-16 bg-border" />
    </div>
  );
}
