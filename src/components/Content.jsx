import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Content = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[90vh] flex items-center min-w-0 overflow-x-hidden">
      <div
        className={`${styles.paddingX} ${styles.paddingY} w-full max-w-6xl mx-auto pt-24 min-w-0`}
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
          className={`${styles.heroHeadText} mt-2`}
        >
          <span className="text-text-primary">Kalash Jain</span>
          <br />
          <span className="text-accent">Developer & Builder</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={styles.heroSubText}
        >
          <Typed
            strings={[
              "I build web applications that scale.",
              "I craft interfaces people love to use.",
              "I ship products from idea to production.",
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
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent/90 hover:shadow-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl border border-bg-border text-text-primary font-medium text-sm hover:border-accent/40 hover:bg-accent-muted transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
