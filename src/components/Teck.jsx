import React, { useState } from "react";
import PropTypes from "prop-types";

const Teck = ({ height = 45, title, path }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative inline-block"
    >
      <div className="flex flex-col items-center transition-transform">
        <h1
          className={`relative select-none bg-zinc-600 px-4 border border-zinc-500 mb-3 text-center transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          } rounded-md`}
        >
          {title}
          <span
            className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-zinc-600 border-l-transparent border-r-transparent ${
              isVisible ? "block" : "hidden"
            }`}
          ></span>
        </h1>
        <svg
        className="hover:fill-green-600 transition-colors duration-300"
          height={height}
          width={height}
          fill="#777"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {path}
        </svg>
      </div>
    </div>
  );
};

Teck.propTypes = {
  height: PropTypes.number.isRequired,
  fill: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.node.isRequired,
};

export default Teck;
