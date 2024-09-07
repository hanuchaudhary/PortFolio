import React from "react";
import Socials from "./Socials";

const Profile = () => {
  const desc =
    "I’m a full-stack developer passionate about building scalable and impactful websites and applications. With expertise in design, animation, and user experience, I craft seamless and dynamic interfaces that engage users while aligning with brand identities. Let's collaborate to create extraordinary digital experiences that stand out and make a difference.";

  return (
    <div className="text-white font-mono flex flex-col md:flex-row items-center justify-between mx-6 md:mx-20 lg:mx-40 gap-10 md:gap-20 my-10 md:my-20">
      <div className="image hover:scale-110 transition-transform duration-300 w-40 h-40 md:w-72 md:h-72 md:border border-zinc-500 rounded" >
        <img
          src="/assets/profile.jpeg"
          alt="Profile"
          className="rounded-full md:rounded-none w-full h-full object-cover"
        />
      </div>
      <div className="details text-center md:text-left md:w-2/3">
        <h1 className="text-3xl md:text-5xl mb-2">Kush Chaudhary</h1>
        <h2 className="text-lg md:text-xl mb-4">
          Fullstack Developer from India...
        </h2>
        <p className="text-sm md:text-base flex flex-wrap justify-center md:justify-start select-none">
          {desc.split(" ").map((word, index) => (
            <span key={index} className="mr-1 hover:text-yellow-500 hover:scale-105 hover:font-semibold transition-colors duration-300">{word}</span>
          ))}
        </p>
        <div className="mt-4 lg:block flex items-center justify-center">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Profile;
