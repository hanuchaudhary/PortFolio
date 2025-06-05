import React from "react";
import { ChevronRightIcon } from "./ui/chevron-right";
import { ChevronLeftIcon } from "./ui/chevron-left";
import Iphone15Pro from "./iphone-15-pro";
import { MacbookPro } from "./macbook-pro";
import { motion } from "motion/react";

const projects = [
  {
    title: "CrosspostHub",
    description:
      "A SaaS platform for seamless cross-posting across multiple social media platforms. It includes AI-generated captions, post scheduling, and media management.",
    mobileImage: "/images/cphMobile.png",
    desktopImage: "/images/cph.png",
  },
  {
    title: "Voxer",
    description:
      "A system for transcoding videos from any source to any format and quality. Built for high-performance video processing and conversion.",
    mobileImage: "/images/voxerMobile.png",
    desktopImage: "/images/voxer.png",
  },
  {
    title: "Lumora",
    description:
      "A platform for converting large duration youtube videos to viral shorts. Automated editing with AI-powered content extraction and optimization.",
    mobileImage: "/images/cphLight.png",
    desktopImage: "/images/cphLight.png",
  },
];


export function Projects() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
  };

  React.useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="mx-auto flex relative items-center justify-center p-4 md:gap-10 mt-14">
      <button
        aria-label="Previous Project"
        className="cursor-pointer relative"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentProject(
            (prev) => (prev - 1 + projects.length) % projects.length
          );
          resetTimer();
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex relative flex-col items-center my-20 justify-center gap-6">
        <div
          key={currentProject}
          className="flex md:flex-row flex-col-reverse items-center gap-10"
        >
          <Iphone15Pro
            currentTime={new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            className="md:size-[30%] size-[45%]"
            src={projects[currentProject].mobileImage}
          />
          <MacbookPro
            className="size-full rounded-xl"
            src={projects[currentProject].desktopImage}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="flex flex-col gap-1 items-center md:max-w-2xl text-muted-foreground font-semibold mt-8"
        >
          {projects[currentProject].title} {"| "}
          {projects[currentProject].description}
        </motion.div>
      </div>
      <button
        aria-label="Next Project"
        className="cursor-pointer relative"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentProject((prev) => (prev + 1) % projects.length);
          resetTimer();
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
