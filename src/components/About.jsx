import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.6)}
    className="group rounded-2xl bg-bg-card border border-bg-border p-6 sm:p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover min-w-0"
  >
    <div className="w-14 h-14 rounded-xl bg-accent-muted flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
      <img src={icon} alt={title} className="w-8 h-8 object-contain" />
    </div>
    <h3 className="font-display font-semibold text-text-primary text-lg">
      {title}
    </h3>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        Introduction
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Overview
      </motion.h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.6)}
        className="font-body text-text-secondary mt-4 max-w-2xl leading-relaxed"
      >
        I'm a software developer focused on JavaScript and TypeScript, with
        experience in React, Next.js, Nuxt.js, Node.js, and Three.js. I work
        closely with teams to build scalable, user-friendly products that
        solve real problems—from idea to production.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
