import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ease = [0.22, 1, 0.36, 1];

/**
 * First viewport: one composition — brand, one line, one sentence, CTAs.
 */
const Content = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 0 : 2150;
    const t = window.setTimeout(() => setReady(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  const show = ready;

  return (
    <section className="relative w-full min-h-[100svh] flex items-end sm:items-center min-w-0 overflow-x-hidden">
      <div
        className={`${styles.paddingX} w-full max-w-6xl mx-auto pt-28 pb-16 sm:pt-32 sm:pb-24 min-w-0`}
      >
        <motion.p
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, ease }}
          className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-accent"
        >
          Full stack · Bengaluru
        </motion.p>

        <h1 className={`${styles.heroHeadText} mt-4 sm:mt-5`}>
          <span className="sr-only">Kalash Jain</span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={false}
              animate={show ? { y: 0 } : { y: "110%" }}
              transition={{ duration: 0.95, ease }}
            >
              Kalash
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-text-secondary/90"
              initial={false}
              animate={show ? { y: 0 } : { y: "110%" }}
              transition={{ duration: 0.95, delay: show ? 0.08 : 0, ease }}
            >
              Jain
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: show ? 0.18 : 0, ease }}
          className={styles.heroSubText}
        >
          I design and ship product end to end — interfaces people feel, systems
          that hold up. Currently building at Pazy.
        </motion.p>

        <motion.div
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: show ? 0.28 : 0, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 min-h-[52px] px-7 rounded-full bg-accent text-bg font-semibold text-sm tracking-wide hover:brightness-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            See the work
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#contact"
            className="link-underline inline-flex items-center min-h-[52px] px-2 font-medium text-sm text-text-primary hover:text-accent transition-colors"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={false}
        animate={show ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: show ? 0.45 : 0, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-text-muted hover:text-accent transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-accent animate-[slideUp_1.4s_ease-in-out_infinite]" />
        </span>
      </motion.a>
    </section>
  );
};

export default Content;
