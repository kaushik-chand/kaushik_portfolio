"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Chip, Tag } from "@/components/ui/Chip";
import { BrowserFrame, ScreenshotPlaceholder } from "@/components/ui/BrowserFrame";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import {
  explorationFilters,
  explorationProjects,
  type ExplorationFilter,
} from "@/lib/data/projects";
import { cn, projectHref } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMemo, useEffect, useRef, useState } from "react";

const INITIAL_CARD_COUNT = 5;

export function MoreExplorations() {
  const [filter, setFilter] = useState<ExplorationFilter>("All");
  const [expanded, setExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-66px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = useMemo(() => {
    if (filter === "All") return explorationProjects;
    return explorationProjects.filter((p) => p.category === filter);
  }, [filter]);

  const visibleItems = useMemo(() => {
    if (expanded) return items;
    return items.slice(0, INITIAL_CARD_COUNT);
  }, [items, expanded]);

  const handleFilterSelect = (f: ExplorationFilter) => {
    setFilter(f);
    setExpanded(false);
  };

  const filterBar = (
    <LayoutGroup>
      {explorationFilters.map((f) => (
        <div key={f} className="relative">
          <Chip active={filter === f} onClick={() => handleFilterSelect(f)} aria-pressed={filter === f}>
            {filter === f && (
              <motion.span
                layoutId="explore-filter"
                className="absolute inset-0 -z-10 rounded-md bg-accent/10"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {f}
          </Chip>
        </div>
      ))}
    </LayoutGroup>
  );

  return (
    <Section id="work" compact className="relative border-t border-border">
      {/* Sentinel element to trigger sticky detection */}
      <div ref={sentinelRef} className="pointer-events-none h-px w-full" aria-hidden />

      <Container>
        {/* Sticky Section Header & Filters Container */}
        <div className="sticky top-[64px] z-30 -mx-5 border-b border-border/50 bg-base/90 px-5 py-3 backdrop-blur-xl transition-all duration-300 sm:-mx-8 sm:px-8 lg:static lg:border-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <Reveal>
            <div>
              {/* Eyebrow: Hidden when sticky on mobile */}
              <p
                className={cn(
                  "mb-2 text-xs font-medium uppercase tracking-[0.18em] text-accent transition-all duration-300",
                  isSticky && "hidden lg:block"
                )}
              >
                Portfolio
              </p>

              {/* Title: Always visible */}
              <h2 className="font-display text-2xl text-ink transition-all duration-300 sm:text-3xl lg:text-4xl">
                My Works
              </h2>

              {/* Description: Hidden when sticky on mobile */}
              <p
                className={cn(
                  "mt-3 max-w-xl text-base text-ink-muted transition-all duration-300 sm:text-lg",
                  isSticky && "hidden lg:block"
                )}
              >
                Explore case studies, dashboards, landing pages, and interactive product designs.
              </p>
            </div>
          </Reveal>

          {/* Filter Bar placed directly under description */}
          <div className={cn("flex flex-wrap gap-2 transition-all duration-300", isSticky ? "mt-2.5" : "mt-4 sm:mt-5")}>
            {filterBar}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((project) => {
              const href = projectHref(project);
              const body = (
                <>
                  <BrowserFrame title={project.title} className="shadow-none">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 24rem, 50vw"
                      />
                    ) : (
                      <ScreenshotPlaceholder label={project.title} />
                    )}
                  </BrowserFrame>
                  <div className="mt-3">
                    <h3 className="text-base font-medium text-ink">{project.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{project.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="View"
                      className="group block"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="group block">{body}</div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dropdown View More / View Less Button */}
        {items.length > INITIAL_CARD_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-ink shadow-sm transition-all duration-300 hover:border-accent/50 hover:bg-surface hover:text-accent active:scale-95"
            >
              <span>{expanded ? "View Less" : `View More (${items.length - INITIAL_CARD_COUNT} More)`}</span>
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={cn(
                  "transition-transform duration-300",
                  expanded ? "rotate-180" : "group-hover:translate-y-0.5"
                )}
              />
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
