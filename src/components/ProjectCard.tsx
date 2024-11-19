import { Github, Link } from "lucide-react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
import { useLocation } from "react-router-dom";

interface ProjectTypes {
  title: string;
  description?: string;
  images: string[];
  liveLink?: string;
  githubLink?: string;
  tags?: string;
}

export default function ProjectCard({
  title,
  description,
  images,
  liveLink,
  githubLink,
  tags,
}: ProjectTypes) {
  const { pathname } = useLocation();

  return (
    <div className="group select-none relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="aspect-[16/10] overflow-hidden">
        {pathname != "/" && images.length > 1 ? (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${title} image ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative p-6">
        <div className="mb-4">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>

        {tags && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.split(",").map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 px-4 py-2 text-sm font-medium transition-colors hover:underline"
            >
              <Link className="h-4 w-4" />
              Live
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
