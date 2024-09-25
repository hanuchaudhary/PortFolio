import React, { useState } from "react";
import Project from "./Project";
import Button from "./Button";
import data from "../data/Project.json";
import 'simplebar-react/dist/simplebar.min.css';

const Projects = () => {
 

  return (
    <div
      id="projects"
      className="w-full mt-20 dark:text-neutral-100 transition-colors duration-500 text-neutral-950 relative dark:bg-neutral-900 bg-neutral-100"
    >
      
      <h1 className="text-center text-neutral-950 dark:text-white font-mono my-5">
        .projects
      </h1>
      <div className="grid transition-colors duration-500 grid-cols- md:grid-cols-2 lg:w-[80%] w-[90%] gap-10 lg:gap-5 m-auto">
        {data.map((e) => (
          <Project
            // onClick={() => setFullView(true)}
            id={e.id}
            image={e.image}
            title={e.title}
            description={e.description}
            isCompleted={e.isCompleted}
            key={e.id}
            githubRepo={e.githubRepo}
            stackUsed={e.stackUsed}
            deployedLink={e.deployedLink}
          />
        ))}
      </div>

      <div className="flex items-center justify-center my-10">
        <Button to={"/projects"} title={"load more..."} />
      </div>
    </div>
  );
};

export default Projects;
