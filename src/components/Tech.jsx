import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper2 } from "../hoc";

const row = [...technologies, ...technologies];

const MarqueeRow = ({ reverse = false }) => (
  <div className="relative overflow-hidden border-y border-white/[0.07] py-5">
    <div
      className={`flex w-max gap-10 sm:gap-14 ${
        reverse ? "animate-marquee-rev" : "animate-marquee"
      } hover:[animation-play-state:paused]`}
    >
      {row.map((tech, i) => (
        <a
          key={`${tech.title}-${i}`}
          href={tech.link || "#"}
          target={tech.link ? "_blank" : undefined}
          rel={tech.link ? "noopener noreferrer" : undefined}
          className="flex items-center gap-3 shrink-0 group"
        >
          {tech.icon ? (
            <img
              src={tech.icon}
              alt=""
              className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <span className="w-6 h-6 rounded-md border border-white/10 flex items-center justify-center text-[10px] font-semibold text-accent">
              {tech.title.slice(0, 2)}
            </span>
          )}
          <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-text-secondary group-hover:text-accent transition-colors whitespace-nowrap">
            {tech.title}
          </span>
        </a>
      ))}
    </div>
  </div>
);

const Tech = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        Stack
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Tools I reach for
        <span className="text-text-secondary"> every day.</span>
      </motion.h2>
      <p className="font-body text-text-secondary mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
        Frontend, backend, and data — chosen for speed of shipping and clarity
        under load.
      </p>
      <div className="mt-12 space-y-0">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </>
  );
};

export default SectionWrapper2(Tech, "tech");
