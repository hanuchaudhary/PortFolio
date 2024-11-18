import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../../data/projectsData.json";
import ProjectCard from "./ProjectCard";

// Import Swiper styles
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/navigation";
import Button from "./Button";

export default function ProjectShowcase() {
  return (
    <section className="">
      <div className="container mx-auto pb-10 pt-20 px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-beige mb-4">
            Project Showcase
          </h2>
          <p className="text-xl text-[#333333]">
            Explore our latest works and innovative solutions
          </p>
        </div>

        <div className="relative px-12">
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
            className="mySwiper"
          >
            {projects.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-darkBeige backdrop-blur-xl rounded-full p-10 shadow-lg flex items-center justify-center border border-gray-200  transition-colors duration-200 opacity-50">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full p-10 bg-darkBeige backdrop-blur-md opacity-50 shadow-lg flex items-center justify-center border border-gray-200  transition-colors duration-200">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="mt-12 text-right">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
