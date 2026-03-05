import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant, textVariant1 } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <div className="flex-shrink-0 w-[min(380px,85vw)] md:w-[400px] snap-center snap-always">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full rounded-2xl bg-bg-card/90 border border-bg-border p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.08]"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg-elevated border border-accent/20 flex items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-body text-text-muted text-xs font-medium">
            {experience.date}
          </p>
          <h3 className="font-display font-bold text-text-primary text-lg mt-0.5">
            {experience.title}
          </h3>
          <p className="font-body text-text-secondary font-medium text-sm mt-0.5">
            {experience.company_name}
          </p>
        </div>
      </div>
      <ul className="mt-5 space-y-2 list-disc list-inside text-text-secondary font-body text-sm leading-relaxed pl-0">
        {experience.points.map((point, i) => (
          <li key={i} className="break-words">{point}</li>
        ))}
      </ul>
    </motion.div>
  </div>
);

const Experience = () => {
  return (
    <section className="relative z-0 min-w-0 w-full">
      <span className="hash-span" id="work" aria-hidden>
        &nbsp;
      </span>

      <div className={`${styles.padding} max-w-5xl mx-auto`}>
        <motion.p
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.sectionLabel}
        >
          The journey
        </motion.p>
        <motion.h2
          variants={textVariant1()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.sectionHeadText}
        >
          Work experience
        </motion.h2>
        <p className="font-body text-text-secondary mt-3 text-sm md:text-base max-w-xl">
          Swipe or scroll horizontally to explore each role →
        </p>
      </div>

      {/* Desktop: horizontal scroll strip, no extra spacer - next section follows right after */}
      <div className="mt-8 md:mt-10 w-screen relative left-1/2 -ml-[50vw] overflow-x-hidden">
        <div
          className="flex gap-6 md:gap-8 pb-6 pt-2 px-4 sm:px-6 md:px-8 overflow-x-auto snap-x snap-mandatory scroll-smooth experience-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex-shrink-0 w-[max(1rem,50vw-520px)] md:min-w-[max(2rem,50vw-520px)]" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
          <div className="flex-shrink-0 w-[max(1rem,50vw-520px)] md:min-w-[max(2rem,50vw-520px)]" />
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className={`${styles.padding} md:hidden max-w-5xl mx-auto`}>
        <div className="flex flex-col gap-8 mt-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
