"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";

// Import Swiper styles
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

interface Project {
  id: number;
  title: string;
  description: string;
}

export default function ProjectShowcase() {
  const [projects] = useState<Project[]>([
    { id: 1, title: "Project 1", description: "Description for Project 1" },
    { id: 2, title: "Project 2", description: "Description for Project 2" },
    { id: 3, title: "Project 3", description: "Description for Project 3" },
    { id: 4, title: "Project 4", description: "Description for Project 4" },
    { id: 5, title: "Project 5", description: "Description for Project 5" },
  ]);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl text-beige md:text-6xl font-bold tracking-tight leading-none text-primary mb-10">
        Project Showcase
      </h1>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper cursor-pointer"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="transition-transform duration-300 hover:scale-105">
                <ProjectCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev border-2 border-beige hover:bg-beige rounded-full p-10 absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <span className="sr-only">Previous slide</span>
        </div>
        <div className="swiper-button-next border-2  border-beige hover:bg-beige rounded-full p-10 absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <span className="sr-only">Next slide</span>
        </div>
      </div>
      <div className="w-full pt-10 flex justify-end">
        <Button>All Projects</Button>
      </div>
    </div>
  );
}
