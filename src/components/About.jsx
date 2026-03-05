import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { journeySteps } from "../constants";
import { fadeIn, textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const JourneyCard = ({ index, step, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.6)}
    className="group relative rounded-xl bg-bg-card/80 border border-bg-border p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.08] min-w-0"
  >
    <span className="font-display text-accent/50 text-sm font-bold tracking-wider">
      {step}
    </span>
    <div className="mt-3 w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center group-hover:bg-accent/20 transition-colors">
      <img src={icon} alt="" className="w-6 h-6 object-contain" />
    </div>
    <h3 className="font-display font-semibold text-text-primary text-lg mt-4">
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
        From idea to production
      </motion.h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.6)}
        className="font-body text-text-secondary mt-4 max-w-xl leading-relaxed"
      >
        I focus on the full journey: understanding the problem, designing the
        solution, building it with the right stack, and shipping with the team.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-w-0">
        {journeySteps.map((item, index) => (
          <JourneyCard key={item.step} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
