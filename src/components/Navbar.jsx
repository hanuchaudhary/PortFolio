import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex text-white font-semibold font-mono py-10 px-20 items-center justify-between ">
        <div className="left">
            <h1>.logo</h1>
        </div>
        <div className="right flex gap-5">
          <a href="#about">.about</a>
          <a href="#projects">.projects</a>
          <a href="#contact">.contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
