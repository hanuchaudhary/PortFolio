import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="h-screen flex items-center justify-center bg-zinc-200">
          <Loader />
        </div>
      ) : (
        <div>
          <BrowserRouter>
              <Navbar />
              <Page />
            <Routes>
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;
