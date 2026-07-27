"use client";

import { useEffect } from "react";

/** Sync Lenis with GSAP ScrollTrigger when both are present */
export function ScrollTriggerSync() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let killed = false;

    void (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    })();

    return () => {
      killed = true;
    };
  }, []);

  return null;
}
