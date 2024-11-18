import { ExternalLink, Github } from "lucide-react";

interface projectTypes {
  title: string;
  description?: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  tags: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
  tags,
}: projectTypes) {
  return (
    <div className="group select-none relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.split(",").map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
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
