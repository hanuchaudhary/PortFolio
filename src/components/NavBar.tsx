import { motion } from "framer-motion";
import Button from "./Button";

export default function NavBar() {
  return (
    <div className="flex fixed z-[99999] top-4 w-full items-center justify-center">
      <div className="flex shadow-sm border bg-darkBeige bg-opacity-65 backdrop-blur-lg border-stone-800 items-center justify-between rounded-lg bg-background px-2 py-2">
        <div className="flex items-center text-beige gap-20">
          <a href="/" className="flex pl-4 items-center gap-2 font-medium">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="8" strokeDasharray="2 4" />
              <circle cx="12" cy="12" r="11" strokeDasharray="2 4" />
            </svg>
            <div className="flex flex-col gap-0">
              <span className="leading-none">Kush</span>
              <span className="leading-none text-xs text-stone-500">Chaudhary.</span>
            </div>
          </a>
          <nav className="hidden items-center gap-4 md:flex">
            {["Projects", "About", "Socials", "Contact"].map((item) => (
              <motion.div
                key={item}
                className="px-2 py-1.5 select-none text-stone-600 hover:text-beige transition-colors font-semibold text-base text-foreground/80 hover:text-foreground relative"
                whileHover="hover"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 300,
                  staggerChildren: 0.2,
                }}
              >
                <a href={`/${item.toLowerCase()}`} className="z-20 relative">
                  {item}
                </a>
                <motion.span
                  className="absolute h-full w-full bg-stone-800 rounded-lg top-0 left-0 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  variants={{
                    hover: { opacity: 1, scale: 1.1 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
            ))}
            <Button>Sign in Now</Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
