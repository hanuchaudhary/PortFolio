import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import { ThemeProvider } from "./Providers/ThemeProvider";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="h-screen flex items-center justify-center text-neutral-950 dark:text-white bg-neutral-300 ">
          <Loader />
        </div>
      ) : (
        <div className="dark:bg-neutral-900 bg-neutral-100 transition-colors duration-500">
          <ThemeProvider>
            <BrowserRouter>
              <Navbar />
              <Page />
            </BrowserRouter>
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default App;
