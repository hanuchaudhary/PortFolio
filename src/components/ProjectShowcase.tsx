import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../../data/projectsData.json";
import ProjectCard from "./ProjectCard";

//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/navigation";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ProjectShowcase() {
  return (
    <section className="transition-colors duration-300">
      <div className="container mx-auto pb-10 pt-20 md:px-10 px-2">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-beige dark:text-gray-100 mb-4 transition-colors duration-300">
            Project Showcase
          </h2>
          <p className="text-base font-mono text-[#777777] dark:text-gray-400 transition-colors duration-300">
            Explore our latest works and innovative solutions
          </p>
        </div>

        <div className="relative md:px-12">
          <Swiper
            spaceBetween={5}
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
            className="mySwiper"
          >
            {projects.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  images={project.images}
                  tags={project.tags}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-darkBeige dark:bg-gray-800 backdrop-blur-xl rounded-full md:p-10 p-7 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-all duration-300 opacity-50 hover:opacity-100">
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full md:p-10 p-7 bg-darkBeige dark:bg-gray-800 backdrop-blur-md opacity-50 hover:opacity-100 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        <div className="mt-12 text-right">
          <Link preventScrollReset={true}  to={"/projects"}>
            <Button>View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
