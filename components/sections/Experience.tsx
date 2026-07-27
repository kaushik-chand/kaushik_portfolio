"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Chip";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { experience } from "@/lib/data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      if (fillRef.current) fillRef.current.style.height = "100%";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="experience" className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've shipped"
            description="Roles across product design and front-end — from internship foundations to marketplace ownership."
          />
        </Reveal>

        <div ref={rootRef} className="relative mt-14 lg:mt-16">
          <div className="absolute bottom-0 left-[0.85rem] top-1 w-px bg-border sm:left-[0.95rem]" aria-hidden>
            <div ref={fillRef} className="relative w-full origin-top bg-accent" style={{ height: 0 }} />
          </div>

          <RevealStagger className="flex flex-col gap-12 sm:gap-14">
            {experience.map((item) => (
              <RevealItem key={item.id}>
                <article className="relative grid gap-3 pl-10 sm:pl-14 lg:grid-cols-[14rem_1fr] lg:gap-10">
                  <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center sm:top-1.5">
                    <span className="relative flex h-3 w-3 items-center justify-center rounded-full border border-accent bg-accent">
                      {item.current && (
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-ring motion-reduce:animate-none"
                        />
                      )}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-ink-muted">{item.duration}</p>
                    {item.current && (
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                        Current
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-ink sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{item.company}</p>
                    <p className="mt-4 max-w-2xl text-base text-ink-muted">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}
