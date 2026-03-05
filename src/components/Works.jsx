import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, studying } from "../assets";
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
}) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.08, 0.5)}
    className="group rounded-xl bg-bg-card/80 border border-bg-border overflow-hidden transition-colors duration-200 hover:border-white/[0.08] min-w-0"
  >
    <a
      href={project_link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative h-52 overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-3 left-3 right-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2.5 rounded-xl bg-bg-card/90 backdrop-blur border border-bg-border hover:bg-accent-muted hover:border-accent/30 transition-colors"
        >
          <img src={minImg || github} alt="Source" className="w-5 h-5" />
        </a>
      </div>
    </a>
    <div className="p-5">
      <h3 className="font-display font-semibold text-text-primary text-lg break-words">
        {name}
      </h3>
      <p className="font-body text-text-secondary text-sm mt-1 line-clamp-2 break-words">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-xs font-medium px-2.5 py-1 rounded-md bg-bg-elevated text-text-secondary ${tag.color}`}
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
      <div className="mt-8 flex flex-col sm:flex-row gap-8 items-start min-w-0">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.5)}
          className="font-body text-text-secondary text-sm sm:text-base max-w-xl leading-relaxed min-w-0"
        >
          A selection of projects that show how I approach building products:
          from front-end and full-stack apps to real-world problems and
          deadlines.
        </motion.p>
        <img
          src={studying}
          alt=""
          className="h-44 max-w-full w-auto object-contain flex-shrink-0 sm:ml-auto"
        />
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
