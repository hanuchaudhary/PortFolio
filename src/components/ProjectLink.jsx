import React from "react";

const ProjectLink = ({title , href}) => {
  return (
    <a href={href} target="_blank" className="select-none cursor-pointer py-2">
      <h2 className="flex items-center text-yellow-500 gap-1 hover:underline hover:text-yellow-400 h-4">
        {title}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          width="20"
          height="20"
        >
          <path fill="#FACC13" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      </h2>
    </a>
  );
};

export default ProjectLink;
