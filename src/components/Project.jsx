import React, { useState } from "react";
import ProjectLink from "./ProjectLink";
import TechUsed from "./TechUsed";

const Project = ({ title, image, description, isCompleted }) => {
  return (
    <div className="font-mono text-white">
      <div className="image ">
        <img className="w-full" src="https://images.unsplash.com/photo-1725615357444-6123528686cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
      </div>
      <div className="details">
        <h1 className="text-xl py-2">Project title</h1>
        <div className="isComp py-2">
          <h2 className="bg-green-500 text-green-950 inline-block rounded-md px-1 select-none ">
            Completed
          </h2>
          <h2 className="bg-[#FFEF8A] text-yellow-600 inline-block rounded-md px-1 select-none ">
            In-Progress
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed
          optio qui recusandae maxime beatae minus necessitatibus ipsum
          reiciendis vero omnis excepturi, atque quidem assumenda eos nesciunt
          cum deleniti et facere, aliquid at pariatur itaque iste modi.
          Blanditiis, quo facere.
        </p>
        <div className="links flex items-center gap-2">
          <ProjectLink title={"visit"} />
          <ProjectLink title={"Github"} />
        </div>
        <div className="techUsed flex items-center gap-2 py-2">
          <TechUsed tech={"react"} />
          <TechUsed tech={"react"} />
          <TechUsed tech={"react"} />
        </div>
      </div>
    </div>
  );
};

export default Project;
