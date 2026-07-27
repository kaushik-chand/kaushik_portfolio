"use client";

import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { useIntroComplete } from "@/components/motion/IntroProvider";
import { personal } from "@/lib/data/personal";
import { EASE_EXPO } from "@/lib/motion";
import { getCareerYearsTenths } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const introComplete = useIntroComplete();
  const reduce = useReducedMotion();
  const [tenure, setTenure] = useState(() => getCareerYearsTenths(personal.careerStartMonth));
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % personal.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

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
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-10 pt-[calc(5.25rem+env(safe-area-inset-top))] sm:pb-16 sm:pt-32 lg:items-center"
    >
      {/* Soft atmosphere — restrained, not template-glow overload */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-16 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-white/[0.04] blur-[80px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-5 px-5 sm:gap-12 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:px-10">
        <div className="contents lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:items-start">
          {/* Name + role */}
          <div className="order-1 w-full lg:order-none">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.1 }}
              className="mb-2 pt-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent sm:mb-3 sm:pt-0 sm:text-xs"
            >
              UX / UI · Front-End
            </motion.p>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.75, ease: EASE_EXPO, delay: 0.18 }}
              className="font-display text-[2.75rem] leading-[0.95] text-ink sm:text-5xl lg:text-[5.25rem]"
            >
              {personal.name.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  initial={reduce ? false : { opacity: 0, y: "0.4em" }}
                  animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: "0.4em" }}
                  transition={{ duration: 0.55, ease: EASE_EXPO, delay: 0.22 + i * 0.04 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span className="text-accent">.</span>
            </motion.h1>

            <div className="relative mt-2 h-[1.5rem] overflow-hidden sm:mt-2.5 sm:h-[1.75rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={reduce ? false : { y: 14, opacity: 0 }}
                  animate={show ? { y: 0, opacity: 1 } : { y: 14, opacity: 0 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE_EXPO }}
                  className="absolute inset-x-0 text-sm font-medium text-accent sm:text-base"
                >
                  {personal.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Tagline + CTAs */}
          <div className="order-3 w-full lg:order-none">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.4 }}
              className="mt-3 max-w-lg text-sm leading-relaxed text-[#C4C7CE] sm:mt-4 sm:text-lg"
            >
              {personal.valueProposition}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.65, ease: EASE_EXPO, delay: 0.5 }}
              className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-3"
            >
              <Magnetic>
                <Button type="button" onClick={goWork} className="w-full sm:w-auto">
                  View work
                  <ArrowDownRight size={16} strokeWidth={1.75} />
                </Button>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a
                  href={personal.cvPdf}
                  download={personal.cvFileName}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-white/25 bg-white/[0.03] px-6 py-3 text-sm font-medium text-ink transition-all duration-300 ease-expo hover:border-white/45 hover:bg-white/[0.06] sm:w-auto"
                >
                  <Download size={16} strokeWidth={1.75} />
                  Download CV
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={show ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.65 }}
              className="mt-8 hidden gap-x-10 gap-y-4 border-t border-white/10 pt-5 text-sm lg:flex"
            >
              <div>
                <p className="font-medium text-ink">{tenure}+ years</p>
                <p className="text-ink-faint">Professional experience</p>
              </div>
              <div>
                <p className="font-medium text-ink">{personal.projectsCount} projects</p>
                <p className="text-ink-faint">Shipped across industries</p>
              </div>
              <div>
                <p className="font-medium leading-snug text-ink">On-site • Hybrid • Remote</p>
                <p className="text-ink-faint">Available for</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Portrait with white border */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.3 }}
          className="relative order-2 mx-auto w-full max-w-[14.5rem] sm:max-w-md lg:col-start-2 lg:row-start-1 lg:mx-0 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-xl border-2 border-white p-[3px] shadow-[0_0_40px_rgba(232,111,42,0.12)]">
            <div className="relative aspect-[4/5] max-h-[38vh] overflow-hidden rounded-[calc(0.75rem-5px)] bg-surface sm:max-h-none">
              <Image
                src={personal.photo}
                alt={`${personal.name} — portrait`}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="rounded-[inherit] object-cover object-[center_18%] contrast-[1.04] saturate-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-base/35 via-transparent to-white/5"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={show ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.65 }}
          className="order-4 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-5 text-sm lg:hidden"
        >
          <div>
            <p className="font-medium text-ink">{tenure}+ years</p>
            <p className="text-ink-faint">Professional experience</p>
          </div>
          <div>
            <p className="font-medium text-ink">{personal.projectsCount} projects</p>
            <p className="text-ink-faint">Shipped across industries</p>
          </div>
          <div className="col-span-2">
            <p className="font-medium leading-snug text-ink">On-site • Hybrid • Remote</p>
            <p className="text-ink-faint">Available for</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
