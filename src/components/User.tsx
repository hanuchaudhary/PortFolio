"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/utils";
import { Button } from "./button";
import Iphone15Pro from "./iphone-15-pro";
import { IconX } from "@tabler/icons-react";
import { TextAnimate } from "./BlurText";
import { MacbookPro } from "./macbook-pro";
import { ChevronRightIcon } from "./ui/chevron-right";
import { ChevronLeftIcon } from "./ui/chevron-left";

const projects = [
  {
    title: "CrosspostHub",
    description:
      "A SaaS platform for seamless cross-posting across multiple social media platforms. It includes AI-generated captions, post scheduling, media management, and payment integration.",
    mobileImage: "/images/cphMobile.png",
    desktopImage: "/images/cph.png",
  },
  {
    title: "Voxer",
    description:
      "A system for transcoding videos from any source to any format and quality.",
    mobileImage: "/images/portMobile.png",
    desktopImage: "/images/port.png",
  },
  {
    title: "Lumora",
    description:
      "A platform for converting large duration youtube videos to viral shorts.",
    mobileImage: "/images/cphLight.png",
    desktopImage: "/images/cphLight.png",
  },
];

export function User() {
  const [isActive, setIsActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(true);
  const [currentProject, setCurrentProject] = React.useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    // if (timerRef.current) clearInterval(timerRef.current);
    // timerRef.current = setInterval(() => {
    //   setCurrentProject((prev) => (prev + 1) % projects.length);
    // }, 2000);
  };

  // useEffect(() => {
  //   resetTimer();
  //   return () => {
  //     if (timerRef.current) clearInterval(timerRef.current);
  //   };
  // }, []);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="box flex flex-col items-center justify-center gap-4 cursor-pointer"
      >
        {isHovered && (
          <div className="fixed inset-0 h-full w-full bg-white/20 backdrop-blur-sm pointer-events-none" />
        )}
        <motion.div
          onClick={() => {
            isHovered && setIsActive(true);
          }}
          animate={{
            y: isHovered ? -80 : 1,
            scale: isHovered ? 2.2 : 1,
            rotate: isHovered ? 0 : 10,
          }}
          style={{
            backgroundColor: isHovered ? "transparent" : "#E6E6E6",
          }}
          className={cn(
            "image-wrapper relative rounded-full bg-[#E6E6E6] md:h-60 md:w-60 h-40 w-40 overflow-hidden",
            isHovered ? "mask-b-from-[75%] rounded-none" : ""
          )}
        >
          <img
            style={{
              objectFit: "cover",
              filter: !isHovered
                ? "none"
                : "drop-shadow(2px 4px 8px hsla(0deg, 0%, 0%, 5))",
            }}
            height={80}
            width={80}
            src="/images/me.png"
            alt="KushChaudhary"
            className="object-contain scale-120 h-full w-full relative z-20"
          />
          <div className="stickers">
            {isHovered && (
              <>
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.7,
                    rotate: -5,
                  }}
                  animate={{ opacity: 1, y: -10, scale: 2.2, rotate: 30 }}
                  src="/images/dumbell.png"
                  alt="icon"
                  className="absolute z-10 bottom-0 md:left-5 left-4 md:h-10 h-5"
                />
                <motion.img
                  initial={{
                    scale: 0.7,
                    x: -20,
                    rotate: -5,
                  }}
                  animate={{
                    scale: 2.1,
                    x: 0,
                    rotate: 50,
                  }}
                  transition={{ delay: 0.1 }}
                  src="/images/emoji.png"
                  alt="icon"
                  className="absolute z-10 bottom-5 right-4 h-10"
                />
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.7,
                    rotate: -20,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 2.5, rotate: 30 }}
                  transition={{ delay: 0.1 }}
                  src="/images/callout.png"
                  alt="icon"
                  className="absolute z-10 md:top-20 md:right-12 top-12 right-8 md:h-10 h-7"
                />
              </>
            )}
          </div>
        </motion.div>
        {isHovered && (
          <motion.p
            onClick={() => setIsActive(true)}
            initial={{ opacity: 0, y: 0, scale: 0.7 }}
            animate={{ opacity: 1, y: 25, scale: 1.1, rotate: -5 }}
            className="font-gloria text-center md:max-w-md max-w-xs font-semibold "
          >
            Design is my bread and butter. Each idea deserves a unique design
            solution, and I'm here to help you with that.
          </motion.p>
        )}
        <motion.button
          onClick={() => setIsActive(true)}
          initial={{ y: 0 }}
          animate={{
            y: isHovered ? 25 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative font-semibold z-10 button text-sm shadow-2xs bg-[#E6E6E6] px-6 py-2 text-black rounded-full cursor-pointer"
        >
          {isHovered ? <span>View Details</span> : <span>Kush</span>}
        </motion.button>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{
              y: "100%",
            }}
            animate={{
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            exit={{
              y: "100%",
            }}
            className="w-full fixed inset-0 md:p-20 p-6 bg-neutral-100 backdrop-blur-2xl z-50 min-h-screen overflow-y-scroll"
          >
            <div
              onClick={() => setIsActive(false)}
              className="flex items-center justify-center md:h-14 md:w-14 h-10 w-10 bg-neutral-200 text-muted-foreground hover:bg-neutral-300/70 transform-colors duration-200 rounded-full cursor-pointer absolute md:top-20 md:right-20 top-4 right-4"
            >
              <IconX className="md:h-8 md:w-8 h-6 w-6 " />
            </div>
            <div className="flex flex-col items-center mx-auto ">
              <img
                className="rounded-full w-64 object-cover mb-4 mask-b-from-[65%]"
                height={100}
                width={100}
                alt="image"
                src={"/images/me.png"}
              />
              <TextAnimate
                className="md:text-xl mb-8 max-w-xl font-[500] md:leading-7 leading-5 "
                animation="blurIn"
                as="p"
              >
                I'm Kush Chaudhary. I believe great apps come from clean code
                and a deep understanding of user needs. The first step is
                solving real problems with efficient solutions whether that is
                automating social media posts or streamlining video transcoding.
                This means writing scalable code prioritizing performance and
                keeping the user experience smooth and intuitive.
              </TextAnimate>
              <div className="flex items-center justify-center gap-4">
                <Button
                  href="mailto:kushchaudharyog@gmail.com"
                  backgroundColor="#3578F7"
                  borderColor="#295EC0"
                  boxShadow="rgb(140, 194, 255) 0px .4px 0px .4px inset"
                  color="white"
                >
                  Reach out
                </Button>
                <Button
                  href="https://cal.com/kushchaudhary/15min"
                  backgroundColor="#E2E2E2"
                  borderColor="#E2E2E2"
                  boxShadow="rgb(245, 246, 247) 0px .4px 0px .4px inset"
                  color="black"
                >
                  Book a Call
                </Button>
              </div>
              <div className="mx-auto flex relative items-center justify-center p-4 md:gap-10 mt-14">
                {/* <div className="absolute inset-0 pointer-events-none blur-[100px] z-[-1] opacity-50">
                  <img
                  style={{
                    objectFit: "cover",
                    filter: "blur(100px)",
                    objectPosition: "center",
                  }}
                  className="w-full h-full"
                  src={projects[currentProject].mobileImage}
                  alt=""
                  />
                </div> */}

                <button
                  aria-label="Previous Project"
                  className="cursor-pointer relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentProject(
                      (prev) => (prev - 1 + projects.length) % projects.length
                    );
                    resetTimer();
                  }}
                >
                  <ChevronLeftIcon />
                </button>
                <div className="flex relative flex-col items-center my-20 justify-center gap-6">
                  <div
                    key={currentProject}
                    className="flex md:flex-row flex-col-reverse items-center gap-10"
                  >
                    <Iphone15Pro
                      currentTime={new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      className="md:size-[30%] size-[45%]"
                      src={projects[currentProject].mobileImage}
                    />
                    <MacbookPro
                      className="size-full rounded-xl"
                      src={projects[currentProject].desktopImage}
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-center md:max-w-2xl">
                    <TextAnimate
                      className="font-bold text-lg"
                      animation="blurIn"
                    >
                      {projects[currentProject].title}
                    </TextAnimate>
                    <TextAnimate
                      className="text-neutral-600"
                      animation="blurIn"
                    >
                      {projects[currentProject].description}
                    </TextAnimate>
                  </div>
                </div>
                <button
                  aria-label="Next Project"
                  className="cursor-pointer relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentProject((prev) => (prev + 1) % projects.length);
                    resetTimer();
                  }}
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-lg font-semibold mt-10">
                Building Smart Solutions with Code Craftsmanship and User Needs
                in Focus
              </p>
              <div className="bg-white rounded-3xl shadow-[10px] p-8 mt-10 flex flex-col items-center justify-between gap-10">
                <div className="w-20">
                  <img src="/images/calander.png" alt="" />
                </div>
                <div className="">
                  <p className="md:text-3xl text-xl md:w-96 text-center mx-auto pb-4">
                    Let's build something awesome together
                  </p>
                  <p className="text-sm max-w-md text-center mx-auto pb-4">
                    I'm excited to hear about what you're building. Reach out
                    below to get the ball rolling, and potentially build
                    something really special together.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
