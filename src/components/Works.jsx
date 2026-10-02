import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  minImg,
  source_code_link,
  project_link,
  imageFit,
}) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.08, 0.5)}
    className="group rounded-2xl bg-bg-card/60 border border-white/[0.06] overflow-hidden hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300 min-w-0"
  >
    <div className="relative overflow-hidden h-52">
      <a
        href={project_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
            imageFit || "object-center"
          }`}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
      <div className="absolute top-3 right-3 flex gap-2">
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-bg/80 backdrop-blur border border-white/10 hover:bg-accent-muted hover:border-accent/30 transition-colors"
          aria-label={`${name} source code`}
        >
          <img src={minImg || github} alt="" className="w-4 h-4" />
        </a>
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <h3 className="font-display font-semibold text-text-primary text-lg sm:text-xl break-words">
        <a
          href={project_link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          {name}
        </a>
      </h3>
      <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed break-words line-clamp-2">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-bg-elevated text-text-secondary border border-white/[0.04]"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionLabel}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="font-body text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed mt-5"
      >
        Selected projects — personal work and things I’ve shipped with teams.
      </motion.p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
