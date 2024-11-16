import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfileDetails from "./components/ProfileDetails";
import ProjectShowcase from "./components/ProjectShowcase";

export default function App() {
  return (
    <div>
        <div className="bg-darkBeige selection:bg-green-500">
            <NavBar />
          <div className="pt-40">
            <ProfileDetails/>
            <ProjectShowcase/>
            <Footer/>
          </div>
        </div>
    </div>
  );
}
