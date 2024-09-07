import React from "react";
import Project from "./Project";
import Button from "./Button";

const Projects = () => {
  return (
    <div className="w-full mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[80%] w-[90%] gap-10  lg:gap-5 m-auto">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="flex items-center justify-center my-10">
        <Button title={"load more..."} />
      </div>
    </div>
  );
};

export default Projects;
