function ProjectCard() {
  return (
    <div>
      <div className="h-96 max-w-screen-md bg-beige"></div>
      <div className="pt-5">
        <div>
          <h1 className="text-2xl text-beige font-semibold">
            Nod Coding Bootcamp / Waaark AFLF / Index Studio Federico Pian /
            Portfolio 2024
          </h1>
          <p className="text-stone-600">
           {'{DrawSVG, Draggable, SplitText, Inertia, CustomEase ScrollTrigger}'}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-4">
          {["nodejs", "expressks", "mnexr", "rfec", "klpd"].map((tag, idx) => (
            <p
              key={idx}
              className="text-beige border-2 border-beige font-semibold rounded-full px-2"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
