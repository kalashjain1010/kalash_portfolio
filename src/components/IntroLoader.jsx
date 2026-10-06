import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief brand intro — one composition, then exits.
 */
export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(() => setShow(false), 2100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          aria-hidden
        >
          <div className="overflow-hidden">
            <motion.p
              className="font-serif text-[clamp(2.5rem,10vw,5.5rem)] tracking-[-0.04em] text-text-primary"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              Kalash
            </motion.p>
          </div>
          <motion.span
            className="absolute bottom-10 left-1/2 -translate-x-1/2 h-px w-16 bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
