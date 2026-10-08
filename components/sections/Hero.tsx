"use client";

import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { useIntroComplete } from "@/components/motion/IntroProvider";
import { personal } from "@/lib/data/personal";
import { EASE_EXPO } from "@/lib/motion";
import { getCareerYearsTenths } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const introComplete = useIntroComplete();
  const reduce = useReducedMotion();
  const [tenure, setTenure] = useState(() => getCareerYearsTenths(personal.careerStartMonth));

  useEffect(() => {
    const tick = () => setTenure(getCareerYearsTenths(personal.careerStartMonth));
    const id = setInterval(tick, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const goWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const show = introComplete;

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-12 pt-[calc(5.75rem+env(safe-area-inset-top))] sm:pb-16 sm:pt-32 lg:pt-36"
    >
      {/* Glow Backdrops */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-16 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-white/[0.04] blur-[80px]"
      />

      <div className="relative mx-auto flex w-full max-w-content flex-col items-start px-5 sm:px-8 lg:px-10">
        

        {/* 2. Hero Content Container (2 columns on Desktop, Stacked on Mobile) */}
        <div className="mt-5 grid w-full items-start gap-6 sm:mt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          
          {/* Left Column: Heading + Subtitle + (Mobile Photo) + Description + CTAs + Stats */}
          <div className="flex flex-col items-start text-left">
            
            {/* Title */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, ease: EASE_EXPO, delay: 0.12 }}
              className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-[3.5rem] lg:text-[4rem]"
            >
              Hi, I&apos;m
              <span className="mt-0.5 block italic text-accent">{personal.name}</span>
            </motion.h1>

            {/* Small Horizontal Orange Underline Line Accent */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scaleX: 0 }}
              animate={show ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.45, ease: EASE_EXPO, delay: 0.16 }}
              className="mt-3.5 h-1 w-14 origin-left rounded-full bg-accent"
            />

            {/* Subtitle */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.2 }}
              className="mt-4 font-display text-base font-normal leading-snug text-ink sm:text-xl lg:text-[1.35rem]"
            >
              UI/UX Designer <span className="text-ink-faint">&amp;</span> Front end developer
            </motion.p>

            {/* MOBILE ONLY: Portrait Photo Card directly below Subtitle (NO SECOND OFFSET STROKE) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.65, ease: EASE_EXPO, delay: 0.22 }}
              className="mt-6 w-full max-w-[15.5rem] self-center sm:max-w-xs lg:hidden"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-surface shadow-[0_0_35px_rgba(232,111,42,0.16)] aspect-[4/5]">
                <Image
                  src={personal.photo}
                  alt={`${personal.name} — portrait`}
                  fill
                  priority
                  sizes="(min-width: 640px) 20rem, 75vw"
                  className="rounded-[inherit] object-cover object-[center_18%] contrast-[1.04] saturate-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-base/40 via-transparent to-white/5"
                />
              </div>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.26 }}
              className="relative z-10 mt-6 max-w-xl text-left text-base leading-7 text-ink-muted sm:mt-8 sm:text-lg sm:leading-8"
            >
              I design intuitive digital experiences and build interactive interfaces that combine
              user needs, thoughtful visual hierarchy, and clean front-end execution.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.3 }}
              className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:items-center"
            >
              <Magnetic>
                <Button type="button" onClick={goWork} className="w-full rounded-full sm:w-auto">
                  View my work
                  <ArrowUpRight size={16} strokeWidth={2} />
                </Button>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a
                  href={personal.cvPdf}
                  download={personal.cvFileName}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 ease-expo hover:border-white/40 hover:bg-surface sm:w-auto"
                >
                  <Download size={16} strokeWidth={2} />
                  Download CV
                </a>
              </Magnetic>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={show ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.36 }}
              className="mt-8 w-full border-t border-white/10 pt-5 text-sm sm:mt-10"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-10">
                <div>
                  <p className="font-semibold text-ink">{tenure}+ years</p>
                  <p className="text-xs text-ink-faint sm:text-sm">Professional experience</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">{personal.projectsCount} projects</p>
                  <p className="text-xs text-ink-faint sm:text-sm">Shipped across industries</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-semibold leading-snug text-ink">On-site • Hybrid • Remote</p>
                  <p className="text-xs text-ink-faint sm:text-sm">Available for</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* DESKTOP ONLY: Right Column Portrait Photo Card (single border, no offset stroke) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.65, ease: EASE_EXPO, delay: 0.22 }}
            className="hidden relative w-full max-w-sm lg:block xl:max-w-md"
          >
            {/* Main Portrait Card — single border only */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-surface shadow-[0_0_40px_rgba(232,111,42,0.18)] aspect-[4/5]">
              <Image
                src={personal.photo}
                alt={`${personal.name} — portrait`}
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 40vw"
                className="rounded-[inherit] object-cover object-[center_18%] contrast-[1.04] saturate-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-base/40 via-transparent to-white/5"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
