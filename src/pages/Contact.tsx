import { motion } from "framer-motion";
import SocialsCard from "../components/SocialsCard";

export default function Contact() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const cardContainerVariants = {
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
        damping: 10,
      },
    },
  };

  return (
    <div className="h-screen md:px-20 px-2 bg-darkBeige text-beige pt-40">
      {/* Heading Animation */}
      <motion.h1
        className="font-bold text-center text-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Contact Me
      </motion.h1>
      <motion.p
        className="font-serif text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Have a question or want to work together? Feel free to reach out!
      </motion.p>

      {/* Social Cards with Animation */}
      <motion.div
        className="grid grid-cols-2 gap-4 pt-10"
        variants={cardContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {["Github", "LinkedIn", "Resume", "Instagram", "X", "Gmail"].map(
          (social, idx) => (
            <motion.div variants={cardVariants} key={idx}>
              <SocialsCard
                link=""
                icon={`/${social.toLowerCase()}.svg`}
                name={social}
              />
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}
