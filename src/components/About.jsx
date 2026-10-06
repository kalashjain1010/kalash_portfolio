import { motion } from "framer-motion";
import { styles } from "../styles";
import { journeySteps } from "../constants";
import { fadeIn, textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        About
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Built for the craft,
        <br className="hidden sm:block" />
        <span className="text-text-secondary"> not the résumé.</span>
      </motion.h2>

      <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 min-w-0">
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="lg:col-span-7 font-serif text-[1.35rem] sm:text-[1.65rem] md:text-[1.85rem] leading-[1.35] tracking-[-0.02em] text-text-primary"
        >
          I’m a full stack developer who owns the path from blank page to
          production — product sense, UI precision, and backends that stay up
          when usage jumps.
        </motion.p>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          className="lg:col-span-5 font-body text-text-secondary text-[15px] sm:text-base leading-relaxed space-y-4"
        >
          <p>
            At Pazy I ship with Nuxt, Node, Postgres, and Redis — frontend and
            backend, in the same breath. Outside work I build tools people
            actually open: trackers, games, learning apps.
          </p>
          <p className="text-text-muted text-sm">
            Bengaluru · Open to ambitious product work.
          </p>
        </motion.div>
      </div>

      <motion.ol
        variants={fadeIn("", "", 0.15, 0.5)}
        className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/[0.08]"
      >
        {journeySteps.map((item, index) => (
          <li
            key={item.step}
            className="relative py-8 sm:py-10 sm:pr-8 border-b border-white/[0.08] lg:border-b-0 lg:border-r lg:last:border-r-0 border-white/[0.08] min-w-0"
          >
            <span className="font-body text-accent text-xs font-semibold tabular-nums tracking-[0.2em]">
              {item.step}
            </span>
            <h3 className="font-display font-semibold text-text-primary text-xl mt-4">
              {item.title}
            </h3>
            <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed max-w-[16rem]">
              {item.description}
            </p>
            {index < journeySteps.length - 1 ? (
              <span
                className="hidden lg:block absolute top-10 -right-px w-2 h-2 rounded-full bg-accent/80 translate-x-1/2"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </motion.ol>
    </>
  );
};

export default SectionWrapper(About, "about");
