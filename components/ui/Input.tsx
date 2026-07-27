"use client";

import { cn } from "@/lib/utils";
import { useId, useState } from "react";

type FieldProps = {
  id?: string;
  label: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FloatingInput({
  id,
  label,
  error,
  className,
  value,
  onChange,
  ...props
}: FieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const [focused, setFocused] = useState(false);
  const filled = Boolean(value && String(value).length > 0);
  const floated = focused || filled;

  return (
    <div className={cn("relative", className)}>
      <input
        id={fieldId}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "peer w-full rounded-md border bg-surface px-4 pb-3 pt-6 text-base text-ink outline-none transition-colors duration-300 ease-expo placeholder:text-transparent",
          error
            ? "border-red-500/60 focus:border-red-400"
            : "border-border focus:border-accent/60",
        )}
        placeholder=" "
        aria-label={label}
        {...props}
      />
      <label
        htmlFor={fieldId}
        className={cn(
          "pointer-events-none absolute left-4 text-ink-muted transition-all duration-300 ease-expo",
          floated ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base",
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  );
}

type AreaProps = {
  id?: string;
  label: string;
  error?: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function FloatingTextarea({
  id,
  label,
  error,
  className,
  value,
  onChange,
  ...props
}: AreaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const [focused, setFocused] = useState(false);
  const filled = Boolean(value && String(value).length > 0);
  const floated = focused || filled;

  return (
    <div className={cn("relative", className)}>
      <textarea
        id={fieldId}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "min-h-[9rem] w-full resize-none rounded-md border bg-surface px-4 pb-3 pt-7 text-base text-ink outline-none transition-colors duration-300 ease-expo placeholder:text-transparent",
          error
            ? "border-red-500/60 focus:border-red-400"
            : "border-border focus:border-accent/60",
        )}
        placeholder=" "
        aria-label={label}
        {...props}
      />
      <label
        htmlFor={fieldId}
        className={cn(
          "pointer-events-none absolute left-4 text-ink-muted transition-all duration-300 ease-expo",
          floated ? "top-2.5 text-xs" : "top-5 text-base",
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  );
}
