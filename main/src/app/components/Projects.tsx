"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    images: ["/images/cph.png", "/images/cph.png", "/images/cph.png"],
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    images: ["/images/cph2.png", "/images/cph2.png", "/images/cph2.png"],
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    images: ["/images/cph.png", "/images/cph.png", "/images/cph.png"],
  },
];

export default function Projects() {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".project-section");

      sections.forEach((section, index) => {
        const imagesContainer = section.querySelector(".images-inner");

        // Horizontal scroll animation
        gsap.to(imagesContainer, {
          xPercent: -100 * (ProjectsData[index].images.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              "+=" +
              window.innerWidth * (ProjectsData[index].images.length - 1),
            scrub: true,
            pin: section,
            anticipatePin: 1,
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          },
        });
      });

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative w-full overflow-hidden px-6">
      <div className="fixed left-0 top-0 h-screen w-1/2 p-20 flex items-center bg-red-800">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            {ProjectsData[activeIndex].title}
          </h1>
          <p className="text-lg text-neutral-600">
            {ProjectsData[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Right scrollable sections */}
      <div className="ml-[50%]">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="project-section h-screen relative overflow-hidden"
          >
            <div className="images-inner flex gap-2 h-full">
              {project.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} image ${idx + 1}`}
                  className="border-4 object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
