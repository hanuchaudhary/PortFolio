"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function FooterLinks() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const links: { name: string; link: string; icon: string }[] = [
    {
      name: "GitHub",
      link: "https://github.com/hanuchaudhary",
      icon: "/svgs/githubIcon.svg",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kush-chaudhary-54448628a/",
      icon: "/svgs/linkedinIcon.svg",
    },
    {
      name: "Twitter(X)",
      link: "https://x.com/KushChaudharyOg",
      icon: "/svgs/xIcon.svg",
    },
  ];

  return (
    <div className="flex items-center justify-center text-black font-farro fixed z-[100] bottom-5 w-full left-1/2 -translate-x-1/2">
      <AnimatePresence>
        <motion.div
          layout
          key={`button`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: {
              duration: 0.05,
              damping: 20,
              stiffness: 100,
              type: "spring",
            },
          }}
          transition={{
            duration: 0.1,
            type: "spring",
            damping: 30,
            stiffness: 300,
            bounce: 0.01,
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={cn(isOpen && "md:pt-0 pt-8", "min-h-7 px-4 flex flex-col items-center reltive justify-center gap-4 bg-[#E6E6E6]/70 backdrop-blur-xl rounded-full cursor-pointer shadow-2xs")}
        >

          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center md:hidden block h-8 w-8 bg-neutral-100 text-muted-foreground transform-colors duration-200 rounded-full cursor-pointer absolute top-8 right-8"
              >
                <IconX className="md:h-8 md:w-8 h-6 w-6 " />
              </div>
              <motion.div className="flex items-center gap-4 px-16 pt-6">
                {links.map((link, index) => (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="flex items-center flex-col"
                  >
                    <Image
                      src={link.icon}
                      alt={`${link.name} icon`}
                      className="h-10 w-10"
                      height={40}
                      width={40}
                    />
                    <span className="text-sm font-farro mt-1.5">{link.name}</span>
                  </a>
                ))}
              </motion.div>
            </>
          )}
          <div className="flex items-center justify-center gap-3">
            {isOpen ? (
              <span className="text-xs text-center w-full mb-4 text-neutral-500">
                All right reserved
              </span>
            ) : (
              <div className="flex items-center gap-2">
                <div className="dot h-1.5 w-1.5 bg-neutral-500 rounded-full"></div>
                <div className="dot h-1.5 w-1.5 bg-neutral-500 rounded-full"></div>
                <div className="dot h-1.5 w-1.5 bg-neutral-500 rounded-full"></div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
