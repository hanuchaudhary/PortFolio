import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title , to}) => {
  return (
    <div>
      <Link to={to} className="bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300  font-mono rounded-md font-semibold px-4 py-1 text-yellow-950">
        {title}
      </Link>
    </div>
  );
};

export default Button;
