import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { journeySteps } from "../constants";
import { fadeIn, textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const JourneyCard = ({ index, step, title, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.6)}
    className="relative rounded-2xl bg-bg-card/60 border border-white/[0.06] p-6 sm:p-7 hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300 min-w-0"
  >
    <div className="flex items-baseline justify-between gap-3">
      <span className="font-body text-accent text-xs font-semibold tabular-nums tracking-widest">
        {step}
      </span>
      {index < 3 ? (
        <span className="hidden lg:block h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent ml-3" />
      ) : null}
    </div>
    <h3 className="font-display font-semibold text-text-primary text-xl mt-5">
      {title}
    </h3>
    <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        How I work
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Overview
      </motion.h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.6)}
        className="font-body text-text-secondary mt-5 max-w-2xl leading-relaxed text-[15px] sm:text-base"
      >
        I’m a full stack developer — frontend, backend, and databases. I currently
        work at Pazy using Nuxt, Node, Postgres, and Redis. I also build personal
        projects on the side.
      </motion.p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 min-w-0">
        {journeySteps.map((item, index) => (
          <JourneyCard key={item.step} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
