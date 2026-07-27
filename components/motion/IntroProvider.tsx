"use client";

import WelcomeScreen from "@/components/motion/WelcomeScreen";
import { hasPlayedIntro, setIntroPlayed } from "@/lib/introState";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

const IntroContext = createContext(true);

export function useIntroComplete() {
  return useContext(IntroContext);
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const currentHash = window.location.hash;

    if (currentHash === "#portfolio" || currentHash === "#work") {
      setShowWelcome(false);
      setIntroComplete(true);
      setBooted(true);
      return undefined;
    }

    const navEntries = performance.getEntriesByType("navigation");
    const navigationType =
      navEntries.length > 0 ? (navEntries[0] as PerformanceNavigationTiming).type : null;
    const isReload = navigationType === "reload";

    if (isReload) {
      sessionStorage.removeItem("introPlayed");
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (!hasPlayedIntro()) {
      setShowWelcome(true);
      setIntroComplete(false);
      setBooted(true);

      const timer = setTimeout(() => {
        setShowWelcome(false);
        setIntroComplete(true);
        setIntroPlayed();
      }, 2800);

      return () => clearTimeout(timer);
    }

    setShowWelcome(false);
    setIntroComplete(true);
    setBooted(true);
    return undefined;
  }, []);

  return (
    <IntroContext.Provider value={booted ? introComplete : false}>
      {children}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <WelcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
