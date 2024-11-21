import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

const TECH_ICONS = [
  {
    src: "/nodejs.svg",
    alt: "Node.js",
    className: "top-4 left-[15%] w-16 h-16",
  },
  {
    src: "/typescript.svg",
    alt: "TypeScript",
    className: "top-52 left-[20%] w-12 h-12",
  },
  {
    src: "/js.svg",
    alt: "JavaScript",
    className: "top-56 left-[15%] w-10 h-10",
  },
  { src: "/react.svg", alt: "React", className: "md:top-40 top-56 -right-32 md:-right-20 w-[500px]" },
  {
    src: "/python.svg",
    alt: "Python",
    className: "top-20 right-[25%] w-14 h-14",
  },
  {
    src: "/docker.svg",
    alt: "Docker",
    className: "bottom-20 left-[10%] w-16 h-16",
  },
  { src: "/framer.svg", alt: "AWS", className: "top-32 left-[30%] w-12 h-12" },
  {
    src: "/tailwind.svg",
    alt: "Tailwind",
    className: "bottom-40 right-[15%] w-10 h-10",
  },
  {
    src: "/nextjs.svg",
    alt: "Next.js",
    className: "top-16 right-[40%] w-12 h-12",
  },
  {
    src: "/github.svg",
    alt: "GraphQL",
    className: "bottom-24 md:block hidden right-[35%] w-14 h-14",
  },
];

function ProfileDetails() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.to(".icon-rotate", {
          rotate: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        const floatingIcons = document.querySelectorAll(".icon-float");
        floatingIcons.forEach((icon) => {
          const duration = 2 + Math.random() * 2;
          const delay = Math.random() * 2;

          gsap.to(icon, {
            y: "20px",
            duration,
            delay,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
        });

        gsap.fromTo(
          ".mongodb-logo",
          {
            scale: 0,
          },
          {
            scale: 1.0,
            duration: 0.5,
            delay: 0.4,
            rotateY: 360,
            ease: "power1.inOut",
          }
        );
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="px-4 md:px-20 h-[70vh] relative pb-20 flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        {TECH_ICONS.map((icon, index) => (
          <img
            key={icon.alt}
            className={`absolute opacity-20 ${icon.className} ${
              index % 2 === 0 ? "icon-float" : "icon-rotate"
            } transition-opacity duration-300 hover:opacity-40`}
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="space-y-2">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-7xl text-5xl dark:text-beige text-darkBeige font-bold"
          >
            <span className="text-green-600">Full-Stack </span>
            Wizardry & UI Excellence
          </motion.h1>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-4xl text-xl dark:text-beige/70 text-neutral-700 font-semibold"
          >
            Full Stack Dev, Freelancer & OpenSource Contributor
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center dark:text-beige  md:gap-2 mt-8 text-base flex-wrap md:text-2xl font-semibold"
          >
            <h1>Hi, I'm </h1>
            <div className="flex gap-2">
              <h1 className="tracking-tight text-green-500">Kush</h1>
              <div className="flex items-center">
                <span className="tracking-tight text-green-500" >Ch</span>
                <img
                  className="h-5 w-5 mongodb-logo"
                  src="/mongodb.svg"
                  alt="MongoDB logo"
                />
                <span><span className="text-green-500">audhary</span>, I turn vision into </span>
              </div>
            </div>
            <h1>reality with code and design.</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
