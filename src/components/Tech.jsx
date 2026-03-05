import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant1 } from "../utils/motion";
import { SectionWrapper2 } from "../hoc";
import { standingman } from "../assets";

const TechCard = ({ index, title, icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up", "spring", index * 0.06, 0.5)}
    className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-bg-card border border-bg-border transition-all duration-300 hover:border-accent/25 hover:shadow-card-hover hover:-translate-y-0.5 group min-w-0 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  >
    <div className="w-16 h-16 rounded-xl bg-bg-elevated flex items-center justify-center group-hover:bg-accent-muted transition-colors">
      <img src={icon} alt={title} className="w-9 h-9 object-contain" />
    </div>
    <span className="font-body font-medium text-text-primary text-sm">
      {title}
    </span>
  </motion.a>
);

const Tech = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-8 min-w-0 w-full">
        <motion.div variants={textVariant1()} className="flex-shrink-0 min-w-0">
          <img
            src={standingman}
            alt=""
            className="w-40 md:w-48 max-w-full h-auto opacity-90 hidden sm:block"
          />
        </motion.div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 min-w-0">
          {technologies.map((tech, index) => (
            <TechCard key={tech.title} index={index} {...tech} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper2(Tech, "tech");
