import React from "react";
import ProjectLink from "./ProjectLink";

const Project = ({ title, image, description, isCompleted, stackUsed = [] , githubRepo , deployedLink }) => {
  return (
    <div className="font-mono text-neutral-950 border border-neutral-800 p-2 rounded-md hover:bg-neutral-800 hover:border-neutral-700 transition-colors duration-500 dark:text-white">
      <div className="image">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="details">
        <h1 className="text-xl py-2">{title}</h1>
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
        <p className="select-none md:text-base text-sm">{description}</p>
        <div className="links flex items-center gap-2">
          <ProjectLink title={"visit"} href={deployedLink} />
          <ProjectLink title={"Github"} href={githubRepo}/>
        </div>
        <div className="techUsed flex items-center gap-2 py-2">
          {stackUsed.length > 0 ? (
            stackUsed.map((tech, index) => (
              <h2
                key={index}
                className="bg-yellow-200 text-yellow-800 select-none rounded-md px-1"
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
  );
};

export default Project;
