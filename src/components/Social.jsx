import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github, instagram, linkedin, twitter, resume } from "../assets";

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
    href: "https://www.instagram.com/maikalashnahihu/",
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
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        Elsewhere
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Find me
        <span className="text-text-secondary"> online.</span>
      </motion.h2>
      <motion.div
        variants={textVariant()}
        className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.07] border border-white/[0.07]"
      >
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 min-h-[72px] px-5 bg-bg hover:bg-accent/[0.06] text-text-secondary hover:text-accent transition-colors group"
          >
            <img
              src={icon}
              alt=""
              className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100"
            />
            <span className="font-body text-sm font-semibold tracking-wide">
              {label}
            </span>
            <span
              aria-hidden
              className="ml-auto text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            >
              ↗
            </span>
          </a>
        ))}
      </motion.div>
      <footer className="mt-24 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="font-serif text-2xl sm:text-3xl tracking-[-0.03em] text-text-primary">
            Kalash Jain
          </p>
          <p className="font-body text-text-muted text-sm mt-2">
            Full stack developer · Built with care.
          </p>
        </div>
        <p className="font-body text-text-muted text-xs tracking-wide uppercase">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default SectionWrapper(Social, "social");
