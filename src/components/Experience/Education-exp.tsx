import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface EducationExpTypes {
  qualification: string;
  link: string;
  school: string;
  duration: string;
  description: string;
}

export default function EducationExp({
  description,
  duration,
  link,
  school,
  qualification,
}: EducationExpTypes) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div ref={ref} className="relative mb-14 first:mt-0 mt-16">
      <div className="absolute left-0 top-0">
        <motion.div
          style={{ opacity, scale }}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              className="stroke-stone-200 stroke-2 fill-none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              className="stroke-blue-500 stroke-2 fill-none"
              style={{
                pathLength: scrollYProgress
              }}
            />
          </svg>
          <motion.div
            style={{ opacity }}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="ml-20 relative border-l pl-8 border-l-blue-500"
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-stone-900 dark:text-white">
            {qualification}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              @{school}
            </a>
          </h3>
          <span className="text-sm font-medium text-stone-500 dark:text-stone-400">
            {duration}
          </span>
          <p className="mt-2 text-stone-700 dark:text-stone-300">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}