import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./lib/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <NavBar />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
