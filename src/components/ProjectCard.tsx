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
    <div className="group relative dark:bg-stone-300 bg-stone-900 overflow-hidden rounded-xl  shadow-xl transition-all duration-300 hover:shadow-2xl">
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

      <div className="relative p-6">
        <div className="mb-4">
          <h3 className="mb-2 text-2xl dark:text-darkBeige text-beige  font-bold">{title}</h3>
          {description && (
            <p className="text-sm dark:text-neutral-600 text-neutral-300">{description}</p>
          )}
        </div>

        {tags && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.split(",").map((tag, idx) => (
              <Tag tag={tag} key={idx} />
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
              className="inline-flex items-center gap-2 rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-950"
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
