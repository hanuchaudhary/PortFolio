import { Github, Link } from "lucide-react";
import { useLocation } from "react-router-dom";
import ImagesCarousel from "./ImagesCrousal";
import Tag from "./Tag";

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
    <div className="group relative dark:border-0 border overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">

      <div className="">
        {pathname != "/" && images.length > 1 ? (
          <div className="z-[99999999]">
            <ImagesCarousel wallpapers={images} />
          </div>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      <div className="relative p-2 dark:bg-neutral-900 shadow-lg bg-neutral-100 dark:rounded-t-lg">
        <div className="md:p-4">
          <div className="mb-4">
            <h3 className="mb-2 text-2xl dark:text-beige text-black  font-bold">
              {title}
            </h3>
            {description && (
              <p className="text-sm md:h-44 lg:h-36 dark:text-neutral-100 text-black">
                {description}
              </p>
            )}
          </div>

          {tags && (
            <div className="md:my-3 my-6 flex flex-wrap gap-1">
              {tags.split(",").map((tag, idx) => (
                <Tag tag={tag} key={idx} />
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 dark:bg-neutral-800 bg-neutral-200 px-4 py-2 rounded-lg">
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
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-600 duration-300"
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
