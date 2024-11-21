import ProfileDetails from "../components/ProfileDetails";
import ProjectShowcase from "../components/ProjectShowcase";
import Skills from "../components/Skills/Skills";

export default function HomePage() {
  return (
    <div>
      <div className="dark:bg-darkBeige transition-colors duration-300 bg-white pt-40 selection:bg-[#1D7B2D] overflow-hidden">
        <ProfileDetails />
        <Skills />
        <ProjectShowcase />
      </div>
    </div>
  );
}
