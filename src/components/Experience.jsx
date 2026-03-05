import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, textVariant1 } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgb(22, 22, 31)",
      color: "#f4f4f5",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 4px 24px -1px rgba(0,0,0,0.2)",
    }}
    contentArrowStyle={{ borderRight: "8px solid rgb(22, 22, 31)" }}
    date={experience.date}
    dateClassName="text-text-muted font-body text-sm"
    iconStyle={{
      background: "rgb(22, 22, 31)",
      border: "2px solid rgba(0, 212, 170, 0.3)",
      boxShadow: "0 0 20px rgba(0, 212, 170, 0.15)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <h3 className="font-display font-bold text-text-primary text-lg sm:text-xl">
      {experience.title}
    </h3>
    <p
      className="font-body text-text-secondary font-medium text-sm mt-0.5"
      style={{ margin: 0 }}
    >
      {experience.company_name}
    </p>
    <ul className="mt-4 space-y-2 list-disc list-inside text-text-secondary font-body text-sm leading-relaxed pl-1">
      {experience.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={styles.sectionLabel}>
        What I've done so far
      </motion.p>
      <motion.h2 variants={textVariant1()} className={styles.sectionHeadText}>
        Work experience
      </motion.h2>
      <div className="mt-16 overflow-hidden min-w-0 w-full">
        <div className="vertical-timeline-wrapper">
          <VerticalTimeline lineColor="rgba(255,255,255,0.06)">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
