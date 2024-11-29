import { motion } from "framer-motion";
import projects from "../../data/projectsData.json";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function ProjectShowcase() {
  return (
    <section className="transition-colors duration-300">
      <div className="container mx-auto pb-10 pt-20 md:px-10 px-2">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold dark:text-beige text-darkBeige mb-4 transition-colors duration-300">
            Project Showcase
          </h2>
          <p className="text-base font-mono text-[#777777] dark:text-neutral-400 transition-colors duration-300">
            Explore my recent works and projects
          </p>
        </div>

        <div className="relative md:px-12">
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard {...projects.projects[0]} />
            <ProjectCard {...projects.projects[2]} />
          </div>
        </div>

        <div className="mt-12 text-right">
          <Link preventScrollReset={true} to={"/projects"}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="dark:text-darkBeige dark:bg-beige font-semibold text-beige bg-darkBeige dark:border-white rounded-full px-6 py-2 "
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
