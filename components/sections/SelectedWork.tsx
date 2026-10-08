"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { BrowserFrame, ScreenshotPlaceholder } from "@/components/ui/BrowserFrame";
import { Tag } from "@/components/ui/Chip";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { flagshipProjects } from "@/lib/data/projects";
import { cn, projectHref } from "@/lib/utils";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MOBILE_INITIAL_COUNT = 5;

export function SelectedWork() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const hiddenCount = flagshipProjects.length - MOBILE_INITIAL_COUNT;

  return (
    <Section id="work">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Portfolio"
            title="My Works"
            description="Deep dives across product UX, research, and UI systems documented as interactive case studies."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {flagshipProjects.map((project, index) => {
            const reverse = index % 2 === 1;
            const href = projectHref(project);

            // On mobile: hide items beyond MOBILE_INITIAL_COUNT unless expanded
            const isMobileHidden = index >= MOBILE_INITIAL_COUNT && !mobileExpanded;

            return (
              <RevealStagger
                key={project.id}
                className={cn(isMobileHidden && "hidden lg:block")}
              >
                <article
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                    reverse && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <RevealItem>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="View"
                      className="group block"
                    >
                      <BrowserFrame title={project.title}>
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                            sizes="(min-width: 1024px) 36rem, 100vw"
                          />
                        ) : (
                          // TODO: replace with real project screenshot
                          <ScreenshotPlaceholder label={project.title} />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-base/0 transition-colors duration-500 group-hover:bg-base/10" />
                      </BrowserFrame>
                    </a>
                  </RevealItem>

                  <RevealItem>
                    <div className={cn(reverse && "lg:pl-0")}>
                      <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                        Case study 0{index + 1}
                      </p>
                      <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-md text-base text-ink-muted">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                      >
                        View case study
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.75}
                          className="transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </RevealItem>
                </article>
              </RevealStagger>
            );
          })}
        </div>

        {/* View More / View Less button — mobile only */}
        {hiddenCount > 0 && (
          <div className="mt-12 flex justify-center lg:hidden">
            <button
              onClick={() => setMobileExpanded((prev) => !prev)}
              aria-expanded={mobileExpanded}
              className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-base px-6 py-3 text-sm font-medium text-ink-muted shadow-sm transition-all duration-300 hover:border-accent/40 hover:text-accent active:scale-95"
            >
              {mobileExpanded ? (
                <>
                  View Less
                  <ChevronDown
                    size={16}
                    strokeWidth={1.75}
                    className="rotate-180 transition-transform duration-300"
                  />
                </>
              ) : (
                <>
                  View {hiddenCount} More {hiddenCount === 1 ? "Work" : "Works"}
                  <ChevronDown
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
