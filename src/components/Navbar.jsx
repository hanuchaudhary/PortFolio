import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex text-white font-semibold w-full font-mono py-7 px-2 md:py-10 md:px-20 items-center justify-between ">
        <div className="left">
            <div className="h-12">
              <img className="w-full h-full" src={'public/assets/logo.png'} alt="" />
            </div>
        </div>
        <div className="right flex gap-5">
          <a className="hover:text-yellow-500 transition-colors duration-300" href="#about">.about</a>
          <a className="hover:text-yellow-500 transition-colors duration-300" href="#projects">.projects</a>
          <a className="hover:text-yellow-500 transition-colors duration-300" href="#contact">.contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
