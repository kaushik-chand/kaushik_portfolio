"use client";

import { navLinks } from "@/lib/data/navigation";
import { personal } from "@/lib/data/personal";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          className={cn(
            "flex w-full max-w-content items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 transition-all duration-500 ease-expo sm:px-5 sm:py-3",
            scrolled
              ? "border-border/90 bg-base/85 shadow-elev2 backdrop-blur-2xl"
              : "border-border/60 bg-base/60 backdrop-blur-xl",
          )}
          aria-label="Primary"
        >
          {/* Left Side: Circular (K) Logo + Divider + Kaushik. */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("#home");
            }}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/icon.svg"
                alt="K logo"
                width={36}
                height={36}
                className="h-6 w-6 object-contain"
                priority
              />
            </span>
            <span className="h-4 w-px bg-border/80" aria-hidden />
            <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
              {personal.name}
              <span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.href);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative z-10 inline-flex min-h-10 items-center px-3.5 text-sm font-medium transition-colors duration-300",
                      isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full border border-accent/40 bg-accent/15"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action Controls: Download CV Pill Button + Circle Burger Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={personal.cvPdf}
              download={personal.cvFileName}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm transition-all duration-300 ease-expo hover:bg-accent-strong sm:px-4 sm:py-2 sm:text-sm"
            >
              <Download size={14} strokeWidth={2.2} />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 text-ink transition-colors hover:bg-surface md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col bg-base/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: 0.04 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.href);
                    }}
                    className={cn(
                      "flex items-center justify-between border-b border-border/40 py-3.5 font-display text-2xl transition-colors",
                      active === link.href ? "text-accent" : "text-ink hover:text-accent",
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs uppercase tracking-widest text-ink-faint">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
