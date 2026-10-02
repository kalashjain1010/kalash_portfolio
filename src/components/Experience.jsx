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
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative pl-12 sm:pl-14"
    >
      <span
        className={`absolute left-[11px] sm:left-[13px] top-7 h-3 w-3 rounded-full ring-4 ${
          current
            ? "bg-accent ring-accent/20"
            : "bg-bg-elevated ring-bg border border-white/15"
        }`}
      />
      <div
        className={`rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 ${
          current
            ? "bg-accent/[0.06] border-accent/25"
            : "bg-bg-card/60 border-white/[0.06] hover:border-white/10"
        }`}
      >
        <div className="flex items-start gap-4 min-w-0">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-bg-elevated border border-white/10 flex items-center justify-center">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-body text-text-muted text-xs font-medium tracking-wide">
                {experience.date}
              </p>
              {experience.type ? (
                <span className="text-[10px] uppercase tracking-wider font-medium text-text-muted">
                  {experience.type}
                </span>
              ) : null}
              {current ? (
                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent-muted px-2 py-0.5 rounded-full">
                  Now
                </span>
              ) : null}
            </div>
            <h3 className="font-display font-bold text-text-primary text-lg mt-1">
              {experience.title}
            </h3>
            <p className="font-body text-accent/90 font-medium text-sm mt-0.5">
              {experience.company_name}
            </p>
            {experience.stack?.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium text-text-secondary bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <ul className="mt-5 space-y-2.5 text-text-secondary font-body text-sm leading-relaxed">
          {experience.points.map((point, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 rounded-full bg-accent/70 flex-shrink-0" />
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
      <motion.p
        variants={textVariant()}
        className={styles.sectionLabel}
      >
        The journey
      </motion.p>
      <motion.h2
        variants={textVariant1()}
        className={styles.sectionHeadText}
      >
        Work experience
      </motion.h2>
      <p className="font-body text-text-secondary mt-4 text-sm md:text-base max-w-xl leading-relaxed">
        Roles I’ve held as a full stack developer.
      </p>
      <div className="relative mt-12 space-y-6">
        <span className="absolute left-[16px] sm:left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />
        {experiences.map((exp, index) => (
          <ExperienceCard key={`${exp.company_name}-${exp.date}`} experience={exp} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
