import { motion } from "framer-motion";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "../lib/ThemeProvider";
import { Link, useLocation } from "react-router-dom";

const navItems = ["projects", "about", "contact"];

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  return (
    <header className="fixed z-[99999] top-4 w-full flex items-center justify-center">
      <div className="flex shadow-sm border dark:bg-darkBeige/30 bg-white/70 backdrop-blur-xl dark:backdrop-blur-xl md:px-10 dark:border-stone-800/50 border-stone-200/90 items-center justify-between rounded-lg bg-background px-2 py-2">
        <div className="flex items-center dark:text-beige gap-10 md:gap-20">
          <Link to="/" className="flex pl-0 items-center gap-2 font-medium" aria-label="Home">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <div className="flex flex-col gap-0">
              <span className="leading-none">Kush</span>
              <span className="leading-none text-xs dark:text-stone-500 text-stone-900">
                Chaudhary.
              </span>
            </div>
          </Link>
          <nav className="items-center md:gap-4 gap-2 flex">
            {navItems.map((item) => (
              <NavItem key={item} item={item} isActive={currentPath === item} />
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavItem({ item, isActive }: { item: string; isActive: boolean }) {
  return (
    <motion.div
      className={`px-2 py-1.5 select-none text-stone-800 dark:text-stone-500 dark:hover:text-beige hover:text-beige transition-colors font-semibold text-sm md:text-base text-foreground/80 hover:text-foreground relative`}
      whileHover="hover"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 300,
      }}
    >
      <Link
        to={`/${item.toLowerCase()}`}
        className={`z-20 capitalize relative ${isActive ? "text-beige" : ""}`}
        aria-current={isActive ? "page" : undefined}
      >
        {item}
      </Link>
      <motion.span
        className={`absolute h-full w-full bg-stone-800 rounded-lg top-0 left-0 z-10 ${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        variants={{
          hover: { opacity: 1, scale: 1.1 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
}

function ThemeToggle({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 1 }}
      animate={{ rotate: theme === "dark" ? 180 : 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </motion.button>
  );
}

