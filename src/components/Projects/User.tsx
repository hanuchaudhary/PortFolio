"use client";

import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/utils";
import { Button } from "../button";
import Iphone15Pro from "../iphone-15-pro";
import { Safari } from "../safari";

export function User() {
  const [isActive, setIsActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="box flex flex-col items-center justify-center gap-4"
      >
        {isHovered && (
          <div className="fixed inset-0 h-full w-full bg-white/20 backdrop-blur-sm pointer-events-none" />
        )}
        <motion.div
          onClick={() => {
            isHovered && setIsActive(true);
          }}
          animate={{
            y: isHovered ? -120 : 1,
            scale: isHovered ? 3 : 1,
            rotate: isHovered ? 0 : 10,
          }}
          style={{
            backgroundColor: isHovered ? "transparent" : "#E6E6E6",
          }}
          className={cn(
            "image-wrapper relative rounded-full bg-[#E6E6E6] h-40 w-40 overflow-hidden",
            isHovered ? "mask-b-from-[75%] rounded-none" : ""
          )}
        >
          <Image
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
                  animate={{ opacity: 1, y: 0, scale: 1.1, rotate: 50 }}
                  src="/images/dumbell.png"
                  alt="icon"
                  className="absolute z-10 bottom-0 left-2 h-10"
                />
                <motion.img
                  initial={{
                    scale: 0.7,
                    x: -20,
                    rotate: -5,
                  }}
                  animate={{
                    scale: 1.1,
                    x: 0,
                    rotate: 50,
                  }}
                  transition={{ delay: 0.1 }}
                  src="/images/emoji.png"
                  alt="icon"
                  className="absolute z-10 bottom-0 right-2 h-10"
                />
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.7,
                    rotate: -5,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 2, rotate: 30 }}
                  src="/images/callout.png"
                  alt="icon"
                  className="absolute z-10 top-10 right-7 h-10"
                />
              </>
            )}
          </div>
        </motion.div>
        {isHovered && (
          <motion.p
            onClick={() => setIsActive(true)}
            initial={{ opacity: 0, y: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 40, scale: 1.1, rotate: -5 }}
            className="font-gloria text-center max-w-md font-semibold "
          >
            Design is my bread and butter. Each idea deserves a unique design
            solution, and I’m here to help you with that.
          </motion.p>
        )}
        <motion.button
          onClick={() => setIsActive(true)}
          initial={{ y: 20 }}
          animate={{
            y: isHovered ? 40 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative z-10 button text-sm shadow-2xs bg-[#E6E6E6] px-6 py-2 text-black rounded-full cursor-pointer"
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
            className="w-full fixed inset-0 p-20 bg-neutral-100 backdrop-blur-2xl z-50 min-h-screen overflow-y-scroll"
          >
            <div
              onClick={() => setIsActive(false)}
              className="flex items-center justify-center h-10 w-10 bg-neutral-200 rounded-full cursor-pointer absolute top-20 right-20"
            >
              X
            </div>
            <div className="flex flex-col items-center max-w-4xl mx-auto ">
              <Image
                className="rounded-full h-96 w-96 object-cover mb-4 mask-b-from-[65%]"
                height={100}
                width={100}
                alt="image"
                src={"/images/me.png"}
              />
              <p className="text-2xl mb-6 max-w-2xl font-[500]">
                <span className="text-[#258EFF]">I'm Kush Chaudhary.</span> I
                believe great apps come from clean code and a deep understanding
                of user needs. The first step is solving real problems with
                efficient solutions whether that is automating social media
                posts or streamlining video transcoding. This means writing
                scalable code prioritizing performance and keeping the user
                experience smooth and intuitive.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button>Reach out</Button>
                <Button>Reach out</Button>
              </div>
              <div className="mx-auto flex items-center justify-center p-4 gap-10 mt-10">
                <Iphone15Pro className="size-1/4" src="/images/cphMobile.png" />
                <Safari
                  className="size-3/4 scale-105 rounded-xl"
                  imageSrc="/images/cph.png"
                />
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
                  <p className="text-3xl w-96 text-center mx-auto pb-4">
                    Let’s build something awesome together
                  </p>
                  <p className="text-sm max-w-md text-center mx-auto pb-4">
                    I'm excited to hear about what you're building. Reach out
                    below to get the ball rolling, and potentially build
                    something really special together.
                  </p>
                  <div>
                    <Button>Contact Me</Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
