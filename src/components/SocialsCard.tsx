import { motion } from "framer-motion";

export interface SocialsCardTypes {
  icon: string;
  name: string;
  link: string;
}

export default function SocialsCard({ icon, name, link }: SocialsCardTypes) {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="flex justify-between md:p-4 p-2 items-center dark:hover:bg-neutral-100 rounded-2xl transition-colors duration-300 dark:bg-white dark:text-black text-beige  bg-darkBeige"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div>
        <motion.img
          className="md:h-20 h-12 md:w-20 w-12"
          src={`${icon.toLowerCase()}.svg`}
          alt=""
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </div>
      <motion.h1
        className="text-xl capitalize md:text-3xl font-semibold"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h1>
    </motion.a>
  );
}
