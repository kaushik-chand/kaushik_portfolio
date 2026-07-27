"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";
import { FloatingInput, FloatingTextarea } from "@/components/ui/Input";
import { Container, Section } from "@/components/layout/Section";
import { personal } from "@/lib/data/personal";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle, Copy, Loader2, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const id = setTimeout(() => setSent(false), 5000);
    return () => clearTimeout(id);
  }, [sent]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      e.email = "Valid email is required";
    }
    if (!form.message.trim() || form.message.length < 10) {
      e.message = "Message must be at least 10 characters";
    }
    return e;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    if (!ACCESS_KEY || ACCESS_KEY === "your_access_key_here") {
      setSubmitError("Contact form is not configured yet.");
      return;
    }

    setSending(true);
    setSubmitError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio contact from ${form.name.trim()}`,
          from_name: form.name.trim(),
          replyto: form.email.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" className="border-t border-border">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Contact</p>
            <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
              Let&apos;s build something clear and useful.
            </h2>
            <p className="mt-4 max-w-md text-base text-ink-muted">
              Tell me about the product, timeline, and what success looks like. I typically reply within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="text-lg text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                {personal.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-border px-3 text-sm text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
              >
                {copied ? <Check size={16} strokeWidth={1.75} /> : <Copy size={16} strokeWidth={1.75} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {/* Glow budget site #2 — contact CTA surface */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-5 sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-[60px]"
              />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="relative flex flex-col items-center py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 14, delay: 0.05 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10"
                    >
                      <CheckCircle className="text-accent" size={28} strokeWidth={1.75} />
                    </motion.div>
                    <h3 className="font-display text-2xl text-ink">Message sent!</h3>
                    <p className="mt-2 text-sm text-ink-muted">I&apos;ll get back to you within 24 hours.</p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm font-medium text-accent hover:text-accent-strong"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="relative flex flex-col gap-4"
                  >
                    <FloatingInput
                      label="Your name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      error={errors.name}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, name: e.target.value }));
                        if (errors.name) setErrors((er) => ({ ...er, name: "" }));
                      }}
                    />
                    <FloatingInput
                      label="Email address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      error={errors.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        if (errors.email) setErrors((er) => ({ ...er, email: "" }));
                      }}
                    />
                    <FloatingTextarea
                      label="Message"
                      name="message"
                      value={form.message}
                      error={errors.message}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, message: e.target.value }));
                        if (errors.message) setErrors((er) => ({ ...er, message: "" }));
                      }}
                    />
                    <Magnetic className="w-full">
                      <Button type="submit" disabled={sending} className="w-full">
                        {sending ? (
                          <>
                            <Loader2 size={16} strokeWidth={1.75} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <Send size={16} strokeWidth={1.75} />
                          </>
                        )}
                      </Button>
                    </Magnetic>
                    {submitError && (
                      <p className="text-center text-sm text-red-400" role="alert">
                        {submitError}
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
