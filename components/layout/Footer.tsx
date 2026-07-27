"use client";

import { Container } from "@/components/layout/Section";
import { navLinks } from "@/lib/data/navigation";
import { personal } from "@/lib/data/personal";
import { useReducedMotion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();

  const go = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("#home");
            }}
            className="font-display text-lg text-ink"
          >
            {personal.name}
            <span className="text-accent">.</span>
          </a>
          <p className="mt-1 text-sm text-ink-faint">© {year}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={personal.social.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            Be
          </a>
        </div>
      </Container>
    </footer>
  );
}
