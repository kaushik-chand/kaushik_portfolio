"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { capabilities } from "@/lib/data/skills";

export function Capabilities() {
  return (
    <Section id="capabilities" compact className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="How I work"
            description="Scope across product design, research, front-end, and brand — not just a tool list."
          />
        </Reveal>

        <RevealStagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
          {capabilities.map((cap, i) => (
            <RevealItem
              key={cap.id}
              className={i === capabilities.length - 1 ? "sm:col-span-2" : undefined}
            >
              <div className="border-t border-border pt-6">
                <p className="text-xs text-ink-faint">0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl text-ink sm:text-2xl">{cap.title}</h3>
                <p className="mt-3 max-w-2xl text-base text-ink-muted">{cap.description}</p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
