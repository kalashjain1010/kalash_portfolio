import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant, textVariant1 } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience, index }) => {
  const current = index === 0;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 sm:pl-14"
    >
      <span
        className={`absolute left-[11px] sm:left-[13px] top-2 h-3 w-3 rounded-full ${
          current ? "bg-accent" : "bg-white/25"
        }`}
      />
      <div className="min-w-0 pb-12 border-b border-white/[0.06] last:border-0 last:pb-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-body text-text-muted text-xs font-semibold tracking-[0.14em] uppercase">
            {experience.date}
          </p>
          {current ? (
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-accent">
              Present
            </span>
          ) : null}
        </div>
        <h3 className="font-display font-bold text-text-primary text-xl sm:text-2xl mt-3 tracking-tight">
          {experience.title}
        </h3>
        <p className="font-body text-accent font-medium text-sm mt-1">
          {experience.company_name}
          {experience.type ? (
            <span className="text-text-muted font-normal"> · {experience.type}</span>
          ) : null}
        </p>
        {experience.stack?.length ? (
          <p className="mt-3 font-body text-xs text-text-muted tracking-wide">
            {experience.stack.join("  ·  ")}
          </p>
        ) : null}
        <ul className="mt-5 space-y-2.5 text-text-secondary font-body text-sm leading-relaxed max-w-2xl">
          {experience.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[0.55rem] h-1 w-1 rounded-full bg-accent/80 flex-shrink-0" />
              <span className="break-words">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

const Experience = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        Experience
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Where I’ve
        <span className="text-text-secondary"> leveled up.</span>
      </motion.h2>
      <p className="font-body text-text-secondary mt-4 text-sm md:text-base max-w-xl leading-relaxed">
        From internships to owning product at a fast-growing fintech.
      </p>
      <div className="relative mt-14 space-y-0">
        <span className="absolute left-[16px] sm:left-[18px] top-2 bottom-8 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={`${exp.company_name}-${exp.date}`}
            experience={exp}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
