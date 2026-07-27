"use client";

import { tools } from "@/lib/data/skills";
import { Reveal } from "@/components/motion/Reveal";

export function ToolsMarquee() {
  const row = [...tools, ...tools];

  return (
    <section aria-label="Tools and skills" className="border-y border-border py-8">
      <Reveal>
        <p className="mb-5 px-5 text-center text-xs uppercase tracking-[0.18em] text-ink-faint sm:px-8">
          Tools & craft
        </p>
      </Reveal>
      <div className="marquee-mask group overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="whitespace-nowrap text-lg font-medium text-ink-muted/80 transition-colors duration-300 group-hover:text-ink-muted sm:text-xl"
            >
              {tool}
              <span className="ml-10 text-border" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
