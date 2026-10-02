import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper2 } from "../hoc";

const TechCard = ({ index, title, icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up", "spring", index * 0.06, 0.5)}
    className="flex items-center gap-3 p-4 rounded-2xl bg-bg-card/60 border border-white/[0.06] hover:border-accent/30 hover:bg-accent/[0.04] hover:-translate-y-0.5 transition-all duration-300 group min-w-0 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  >
    <div className="w-11 h-11 rounded-xl bg-bg-elevated border border-white/[0.05] flex items-center justify-center group-hover:border-accent/20 transition-colors flex-shrink-0">
      {icon ? (
        <img src={icon} alt="" className="w-6 h-6 object-contain" />
      ) : (
        <span className="font-display text-accent text-sm font-semibold">
          {title.slice(0, 2)}
        </span>
      )}
    </div>
    <span className="font-body font-medium text-text-primary text-sm">
      {title}
    </span>
  </motion.a>
);

const Tech = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        Stack
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Technologies
      </motion.h2>
      <p className="font-body text-text-secondary mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
        The stack I use across frontend, backend, and data.
      </p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 min-w-0">
        {technologies.map((tech, index) => (
          <TechCard key={tech.title} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper2(Tech, "tech");
