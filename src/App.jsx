import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Loader from "./components/Loader";

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
          <Navbar />
          <Page />
        </div>
      )}
    </div>
  );
};

export default App;
