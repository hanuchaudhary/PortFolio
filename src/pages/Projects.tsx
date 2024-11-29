import { motion } from "framer-motion";
import { projects } from "../../data/projectsData.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <div className="dark:bg-darkBeige bg-white h-full w-full md:px-20 px-2 pb-10 pt-10 md:pt-20">
      <motion.h1
        className="text-4xl dark:text-beige text-darkBeige font-bold py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        All Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
