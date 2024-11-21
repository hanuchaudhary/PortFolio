import { motion } from "framer-motion";

interface SkillIcon {
  name: string;
  icon: string;
}

export default function SkillIcon({ name, icon }: SkillIcon) {
  return (
    <div className="inline-block">
      <motion.div
        whileTap={{ scale: 0.95 }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.3
        }}
        className="flex items-center backdrop-blur-md dark:text-beige rounded-lg justify-center gap-1 dark:bg-neutral-900 transition-colors duration-300 bg-stone-200 border-stone-300 py-2 px-4 md:px-6 border dark:border-stone-900"
      >
        <img className="md:h-10 select-none md:w-10 h-5 w-5" src={`/${icon}.svg`} alt="" />
        <h1 className="text-sm md:text-lg font-mono font-semibold">
          {name}
        </h1>
      </motion.div>
    </div>
  );
}
