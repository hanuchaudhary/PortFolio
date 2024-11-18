import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfileDetails from "./components/ProfileDetails";
import ProjectShowcase from "./components/ProjectShowcase";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <div>
        <div className="bg-darkBeige selection:bg-[#1D7B2D] overflow-hidden">
            <NavBar />
          <div className="pt-40">
            <ProfileDetails/>
            <Skills/>
            <ProjectShowcase/>
            <Footer/>
          </div>
        </div>
    </div>
  );
}
