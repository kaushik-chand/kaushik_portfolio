"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { professionalTools } from "@/lib/data/professionalTools";
import Image from "next/image";

export function ToolsGrid() {
  return (
    <Section id="tools" compact className="border-t border-border !py-12 sm:!py-14">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="Professional tools"
            description="The core design stack I use day to day — from systems and layout to motion."
          />
        </Reveal>

        <RevealStagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:mt-9 lg:grid-cols-7 lg:gap-3">
          {professionalTools.map((tool) => (
            <RevealItem key={tool.id}>
              <div className="flex h-full flex-col items-center justify-center gap-2.5 rounded-md border border-border bg-surface/40 px-3 py-4 text-center transition-colors duration-300 ease-expo hover:border-ink-faint hover:bg-surface">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-[0.55rem] object-contain"
                />
                <p className="text-xs font-medium leading-snug text-ink-muted sm:text-sm">{tool.name}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
