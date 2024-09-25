import React from "react";
import { useTheme } from "../Providers/ThemeProvider";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex justify-center  relative overflow-hidden">
      <div className="flex w-[95%] fixed top-4 dark:bg-neutral-900 bg-neutral-400 backdrop-filter dark:backdrop-blur-lg backdrop-blur-lg dark:bg-opacity-40 bg-opacity-40 dark:border-neutral-800 border-neutral-300 z-50 border-2 rounded-2xl dark:text-white font-semibold font-mono py-7 px-4 md:py-6 items-center justify-between ">
        <div className="left">
          <motion.div
          onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="md:h-16 h-10"
          >
            {theme == "light" ? (
              <img className="h-full w-full shadow-xl rounded-full" src="/assets/moon.png" alt="Logo" />
            ) : (
              <img className="w-full h-full" src="/assets/logo.png" alt="Logo" />
            )}
          </motion.div>
        </div>
        <div className="right flex gap-5">
          <a
            className="hover:text-yellow-500 transition-colors duration-300"
            href="#about"
          >
            .about
          </a>
          <a
            className="hover:text-yellow-500 transition-colors duration-300"
            href="/projects"
          >
            .projects
          </a>
          <a
            className="hover:text-yellow-500 transition-colors duration-300"
            href="#contact"
          >
            .contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
