"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/utils";
import { UserDrawer } from "./UserDrawer";

export function User() {
  const [isActive, setIsActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(true);
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
            src="https://res.cloudinary.com/da7huzv0t/image/upload/w_1200,q_auto,f_auto/v1749126074/Picsart_25-06-04_08-43-03-630_ynzri0.png"
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
      <UserDrawer isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}
