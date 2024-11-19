import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import ScrollToTop from "./lib/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
