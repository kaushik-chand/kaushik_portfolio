import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "ghost" | "subtle";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-strong shadow-elev1",
  ghost:
    "bg-transparent text-ink border border-border hover:border-ink-muted hover:bg-surface",
  subtle:
    "bg-surface text-ink border border-border hover:bg-surface-hover",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 ease-expo disabled:pointer-events-none disabled:opacity-50",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
