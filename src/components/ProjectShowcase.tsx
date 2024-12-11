import { motion } from "framer-motion";
import projects from "../../data/projectsData.json";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

export default function ProjectShowcase() {
  return (
    <section className="transition-colors max-w-6xl mx-auto duration-300">
      <div className="container md:pb-10 md:pt-20 py-6 px-2">
        <div className="md:mb-10 mb-6">
          <h2 className="text-4xl md:text-6xl font-bold dark:text-beige text-darkBeige mb-1 md:mb-4 transition-colors duration-300">
            Project Showcase
          </h2>
          <p className="text-base font-mono text-[#777777] dark:text-neutral-400 transition-colors duration-300">
            Explore my recent works and projects
          </p>
        </div>

        <div className="relative ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <ProjectCard {...projects.projects[3]} />
            <ProjectCard {...projects.projects[4]} />
          </div>
        </div>

        <div className="md:mt-8 mt-4 flex justify-end">
          <Link preventScrollReset={true} to={"/projects"}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="dark:text-darkBeige flex items-center dark:bg-beige font-semibold text-beige bg-darkBeige dark:border-white rounded-full px-6 py-2 "
            >
              <LayoutDashboard className="pr-1"/>
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
