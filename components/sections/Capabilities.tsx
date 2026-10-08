"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { Bot, Code2, Compass, Layers, Server, Sparkles } from "lucide-react";

export function Capabilities() {
  return (
    <Section id="capabilities" compact className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="How I work"
            description="Scope across product design, research, front-end, and architecture — structured as an integrated workflow."
          />
        </Reveal>

        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {/* Card 01: AI-Augmented Workflow (TOP Hero Feature Tile - Span 12) */}
          <RevealItem className="sm:col-span-2 lg:col-span-12">
            <div className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 via-surface/60 to-surface/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 ease-expo hover:border-accent/60 hover:shadow-elev2">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition-opacity group-hover:opacity-100"
              />

              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold tracking-widest text-accent">01</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      <Sparkles size={13} strokeWidth={2} />
                      AI-Augmented Workflow
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                    Accelerated Craft with Human Judgment
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
                    I use AI to explore more directions early, pressure-test research, and move faster on craft — while human judgment, empathy, and product decisions stay at the center.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 lg:max-w-xs lg:justify-end">
                  {["Ideation", "Research Support", "Productivity", "Human Judgment"].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-base/80 px-3.5 py-2 text-xs font-medium text-ink shadow-sm transition-colors group-hover:border-accent/50"
                    >
                      <Bot size={14} className="text-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealItem>

          {/* Card 02: Product Design (Span 7) */}
          <RevealItem className="sm:col-span-2 lg:col-span-7">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 ease-expo hover:border-accent/40 hover:bg-surface hover:shadow-elev2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-accent">02</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-base/60 text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <Layers size={20} strokeWidth={1.75} />
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl text-ink">Product Design</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Crafting end-to-end digital interfaces that balance clarity, visual hierarchy, and brand identity — transforming complex user flows into intuitive, scalable UI systems.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-4">
                {["UI Design", "Design Systems", "Prototyping", "Wireframing", "Design Tokens"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border/80 bg-base/60 px-3 py-1.5 text-xs font-medium text-ink transition-colors group-hover:border-accent/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* Card 03: UX Research (Span 5) */}
          <RevealItem className="sm:col-span-1 lg:col-span-5">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 ease-expo hover:border-accent/40 hover:bg-surface hover:shadow-elev2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-accent">03</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-base/60 text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <Compass size={20} strokeWidth={1.75} />
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl text-ink">UX Research</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Evidence-backed product decisions through discovery, validation, and iterative user testing.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-4">
                {["User Research", "Market Research", "Journey Mapping", "Usability"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border/80 bg-base/60 px-3 py-1.5 text-xs font-medium text-ink transition-colors group-hover:border-accent/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* Card 04: Front-End Development (Span 5) */}
          <RevealItem className="sm:col-span-1 lg:col-span-5">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 ease-expo hover:border-accent/40 hover:bg-surface hover:shadow-elev2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-accent">04</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-base/60 text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <Code2 size={20} strokeWidth={1.75} />
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl text-ink">Front-End Development</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Production-ready web interfaces in React and Next.js with faithful execution of design intent.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-4">
                {["Next.js", "React", "Tailwind CSS", "Framer Motion"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border/80 bg-base/60 px-3 py-1.5 text-xs font-medium text-ink transition-colors group-hover:border-accent/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* Card 05: API Integration & Architecture (Span 7) */}
          <RevealItem className="sm:col-span-2 lg:col-span-7">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 ease-expo hover:border-accent/40 hover:bg-surface hover:shadow-elev2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-accent">05</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-base/60 text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <Server size={20} strokeWidth={1.75} />
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl text-ink">API Integration & Architecture</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Data orchestration, web infrastructure, and real-time protocols that drive seamless product experiences — connecting client UI with robust backend services.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-4">
                {[
                  "RESTful Architectures",
                  "WebSocket Protocols",
                  "Third-Party APIs",
                  "Webhook Triggers",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border/80 bg-base/60 px-3 py-1.5 text-xs font-medium text-ink transition-colors group-hover:border-accent/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        </RevealStagger>
      </Container>
    </Section>
  );
}
