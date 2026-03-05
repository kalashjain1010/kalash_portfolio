import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { facebook, github, instagram, linkedin, twitter, resume } from "../assets";

const links = [
  { href: "https://github.com/kalashjain1010", icon: github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/kalash-jain-1b99731a0/",
    icon: linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/kalash__jain_",
    icon: twitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/kalash.png/",
    icon: instagram,
    label: "Instagram",
  },
  {
    href: "https://drive.google.com/file/d/10IJF_K7mT9JzIh-ph7znIZ7sP9lAqJWN/view?usp=sharing",
    icon: resume,
    label: "Resume",
  },
];

const Social = () => {
  return (
    <>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Connect
      </motion.h2>
      <motion.p
        variants={textVariant()}
        className="font-body text-text-secondary mt-2"
      >
        Find me elsewhere on the web.
      </motion.p>
      <motion.div
        variants={textVariant()}
        className="mt-8 flex flex-wrap gap-4"
      >
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[44px] min-h-[44px] w-12 h-12 rounded-xl bg-bg-card border border-bg-border text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label={label}
          >
            <img src={icon} alt="" className="w-6 h-6 object-contain" />
          </a>
        ))}
      </motion.div>
      <footer className="mt-16 pt-8 border-t border-bg-border text-center">
        <p className="font-body text-text-muted text-sm">
          Let's build something amazing.
        </p>
      </footer>
    </>
  );
};

export default SectionWrapper(Social, "social");
