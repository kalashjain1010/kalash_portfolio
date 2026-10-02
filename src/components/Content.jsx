import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Content = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center min-w-0 overflow-x-hidden">
      <div
        className={`${styles.paddingX} w-full max-w-6xl mx-auto pt-28 sm:pt-32 pb-20 min-w-0`}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={styles.sectionLabel}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={`${styles.heroHeadText} mt-3`}
        >
          <span className="text-text-primary">Kalash Jain</span>
          <br />
          <span className="text-accent">Full Stack Developer</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={styles.heroSubText}
        >
          <Typed
            strings={[
              "Frontend and backend. Nuxt, Node, Postgres.",
              "Full stack developer at Pazy.",
              "React, Next.js, and TypeScript.",
            ]}
            typeSpeed={50}
            backSpeed={35}
            backDelay={2000}
            loop
            className="text-text-secondary"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full bg-accent text-bg font-semibold text-sm hover:bg-accent/90 hover:shadow-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            View my work
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full border border-white/10 text-text-primary font-medium text-sm hover:border-accent/40 hover:bg-accent-muted transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-accent/80 to-transparent" />
      </a>
    </section>
  );
};

export default Content;
