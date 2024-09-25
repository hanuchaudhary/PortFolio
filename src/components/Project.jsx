import React, { useState } from "react";
import ProjectLink from "./ProjectLink";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SimpleBar from "simplebar-react";

const Project = ({
  id,
  title,
  image,
  description,
  isCompleted,
  stackUsed = [],
  githubRepo,
  deployedLink,
}) => {
  const [fullView, setFullView] = useState(false);

  return (
    <div className=" ">
      <AnimatePresence>
        {fullView && (
          <motion.div
            className="fixed inset-0 rounded-t-xl w-full flex justify-center items-center z-50"
            initial={{ translateY: "100%" }}
            animate={{ translateY: "15%" }}
            exit={{ translateY: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[95%] transition-colors duration-500 md:w-[80%] h-[90%] rounded-xl bg-neutral-300 dark:bg-neutral-600">
              <SimpleBar className="w-full relative h-full overflow-y-auto">
                <div className="flex relative justify-between items-center">
                  <h1 className="text-center font-semibold text-xl md:text-3xl mt-4 flex-grow">
                    {title}
                  </h1>
                  <motion.div
                    onClick={() => setFullView(false)}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed cursor-pointer lg:left-40 md:left-24 left-4 flex items-center justify-center rounded-full bg-red-700"
                  >
                    <X
                      size={20}
                      strokeWidth={3}
                      className="text-red-950 font-semibold"
                    />
                  </motion.div>
                </div>
                <div className="flex items-center justify-center my-5">
                  <div className="image overflow-hidden w-[90%] md:w-[70%] rounded-md">
                    <img
                      src={image}
                      className="h-full w-full object-cover"
                      alt="Project"
                    />
                  </div>
                </div>
                <div className="links px-5 md:px-20 py-2 flex items-center gap-2">
                  <ProjectLink
                    title={"Visit Deployed App"}
                    href={deployedLink}
                  />
                  <ProjectLink title={"Visit Github Repo"} href={githubRepo} />
                </div>
                <div className="description px-5 md:px-20 pb-5">
                  <div
                    className="text-sm md:text-xl leading-relaxed pb-40"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div className="techUsed pt-4 flex gap-2">
                    {stackUsed.length > 0 &&
                      stackUsed.map((tech, index) => (
                        <h2
                          key={index}
                          className="bg-yellow-200 text-sm md:text-base text-yellow-800 select-none rounded-md px-1"
                        >
                          {tech}
                        </h2>
                      ))}
                  </div>
                </div>
              </SimpleBar>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={() => setFullView((prev) => !prev)}
        className="font-mono relative text-neutral-950 border dark:border-neutral-800 border-neutral-200 hover:bg-neutral-200 hover:border-neutral-300 p-2 rounded-md dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-colors duration-500 dark:text-white"
      >
        <div className="image rounded-md overflow-hidden">
          <img className="w-full" src={image} alt={title} />
        </div>
        <div className="details">
          <h1 className="text-2xl font-semibold py-2">{title}</h1>
          <div className="isComp py-2">
            {isCompleted ? (
              <h2 className="bg-green-500 text-green-950 inline-block rounded-md px-1 select-none">
                Completed
              </h2>
            ) : (
              <h2 className="bg-yellow-500 text-yellow-950 inline-block rounded-md px-1 select-none">
                In-Progress
              </h2>
            )}
          </div>

          <div className="select-none md:text-base mb-24 md:mb-24 lg:mb-20 text-sm">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  description.length < 200
                    ? description
                    : description.substring(0, 200) + "...",
              }}
            />
          </div>

          <div className="techDetails absolute bottom-0">
            <div className="links flex items-center gap-2">
              <ProjectLink title={"Visit"} href={deployedLink} />
              <ProjectLink title={"Github"} href={githubRepo} />
            </div>
            <div className="techUsed flex items-center flex-wrap gap-2 py-2">
              {stackUsed.length > 0 ? (
                stackUsed.map((tech, index) => (
                  <h2
                    key={index}
                    className="bg-yellow-200 text-sm md:text-base text-yellow-800 select-none rounded-md px-1"
                  >
                    {tech}
                  </h2>
                ))
              ) : (
                <p>No technologies listed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
