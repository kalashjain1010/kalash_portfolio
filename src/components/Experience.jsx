import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, textVariant1 } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <div className="flex-shrink-0 w-full min-w-[280px] max-w-[360px] md:w-[340px] snap-center snap-always">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full rounded-xl bg-bg-card/80 border border-bg-border p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.08]"
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
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        The journey
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Work experience
      </motion.h2>
      <motion.p
        variants={textVariant()}
        className="font-body text-text-secondary mt-2 text-sm hidden md:block"
      >
        Scroll horizontally to explore →
      </motion.p>

      {/* Desktop: horizontal scroll strip */}
      <div className="mt-10 hidden md:block overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth min-w-0 -mx-2 px-2 experience-scroll">
        <div className="flex gap-6 pb-4 pt-2 w-max max-w-none">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="mt-10 md:hidden flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
