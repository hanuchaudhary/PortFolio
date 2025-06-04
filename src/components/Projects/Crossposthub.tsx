"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/utils";

export function CrossPostHub() {
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
          animate={{
            scale: isHovered ? 0.8 : 1,
            rotate: isHovered ? 0 : 10,
          }}
          className={cn("image-wrapper relative h-40 w-40")}
        >
          {isHovered && (
            <div className="upperBox absolute -top-50 w-full left-0 right-0 flex items-center justify-center gap-4">
              <div className="h-40 w-40 bg-red-500"></div>
              <div className="h-40 w-40 bg-blue-500"></div>
              <div className="h-40 w-40 bg-emerald-500"></div>
            </div>
          )}
          <Image
            height={80}
            width={80}
            src="/images/image.png"
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
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.7 }}
              animate={{ opacity: 1, y: 40, scale: 1.1, rotate: -5 }}
              className="font-gloria text-center w-md font-semibold "
            >
              Design is my bread and butter. Each idea deserves a unique design
              solution, and I’m here to help you with that.
            </motion.p>
          )}
          <motion.button
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
            {isHovered ? (
              <span>View Crossposthub</span>
            ) : (
              <span>Crossposthub</span>
            )}
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
