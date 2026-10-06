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
    className="group relative overflow-hidden border border-white/[0.07] bg-bg-card/40 hover:border-accent/30 transition-colors duration-500 min-w-0"
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
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
            imageFit || "object-center"
          }`}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90" />
      <a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 p-2.5 rounded-xl bg-bg/70 backdrop-blur border border-white/10 hover:border-accent/40 transition-colors"
        aria-label={`${name} source code`}
      >
        <img src={minImg || github} alt="" className="w-4 h-4" />
      </a>
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
            className="text-[11px] font-medium tracking-wide text-text-muted"
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
        <p className={styles.sectionLabel}>Selected work</p>
        <h2 className={styles.sectionHeadText}>
          Projects that
          <span className="text-text-secondary"> shipped.</span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="font-body text-text-secondary text-sm sm:text-base max-w-xl leading-relaxed mt-5"
      >
        Product, tools, and experiments — from expense trackers people use daily
        to games built for a room full of friends.
      </motion.p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 min-w-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
