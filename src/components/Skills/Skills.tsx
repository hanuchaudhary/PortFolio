import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import skills from "../../../data/skillsData.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Skills() {
  return (
    <div className="w-full ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="md:mx-5 mx-2 flex border transition-colors duration-300 dark:border-[#222222] flex-col gap-4 py-4 px-2 md:px-10 bg-stone-100/50 rounded-xl shadow-md dark:bg-darkBeige/50 border-stone-200 dark:backdrop-blur-xl"
      >
        <motion.h1
          variants={sectionVariants}
          className="text-5xl md:py-10 py-4 font-bold dark:text-beige text-darkBeige"
        >
          Skills
        </motion.h1>

        <motion.div variants={sectionVariants}>
          <h1 className="text-base text-darkBeige dark:text-beige  font-mono mb-3">
            Languages
          </h1>
          <div className="flex gap-2 flex-wrap">
            {skills.langauges.map((skill, idx) => (
              <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h1 className="text-base text-darkBeige dark:text-beige  font-mono mb-3">
            Backend
          </h1>
          <div className="flex gap-2 flex-wrap">
            {skills.backend.map((skill, idx) => (
              <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h1 className="text-base text-darkBeige dark:text-beige  font-mono mb-3">
            Libraries & Frameworks
          </h1>
          <div className="flex gap-2 flex-wrap">
            {skills.frameworks.map((skill, idx) => (
              <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h1 className="text-base text-darkBeige dark:text-beige  font-mono mb-3">
            Database and ORMs
          </h1>
          <div className="flex gap-2 flex-wrap">
            {skills.database.map((skill, idx) => (
              <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h1 className="text-base text-darkBeige dark:text-beige  font-mono mb-3">
            Tools and Technologies
          </h1>
          <div className="flex gap-2 flex-wrap">
            {skills.tools.map((skill, idx) => (
              <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
