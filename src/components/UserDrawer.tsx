import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { TextAnimate } from "./BlurText";
import { Button } from "./button";
import { Projects } from "./Projects";
import { ReachOut } from "./ReachOut";
import { Contributions } from "./Contributions";

export function UserDrawer({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}) {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsActive(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });

  return (
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
              src={
                "https://res.cloudinary.com/da7huzv0t/image/upload/w_1200,q_auto,f_auto/v1749126074/Picsart_25-06-04_08-43-03-630_ynzri0.png"
              }
            />
            <TextAnimate
              className="md:text-xl mb-8 max-w-xl font-[500] md:leading-7 leading-5 "
              animation="blurIn"
              as="p"
            >
              I'm Kush Chaudhary. I believe great apps come from clean code and
              a deep understanding of user needs. The first step is solving real
              problems with efficient solutions whether that is automating
              social media posts or streamlining video transcoding. This means
              writing scalable code prioritizing performance and keeping the
              user experience smooth and intuitive.
            </TextAnimate>
            <div className="flex items-center justify-center gap-4">
              <Button
                href="mailto:kushchaudharyog@gmail.com"
                backgroundColor="#3578F7"
                borderColor="#295EC0"
                boxShadow="rgb(140, 194, 255) 0px .6px 0px .6px inset"
                color="white"
              >
                Reach out
              </Button>
              <Button
                href="https://cal.com/kushchaudhary/15min"
                backgroundColor="#E2E2E2"
                borderColor="#E2E2E2"
                boxShadow="rgb(245, 246, 247) 0px .6px 0px .6px inset"
                color="black"
              >
                Book a Call
              </Button>
            </div>
            <Projects />
          </div>
          <Contributions />
          <ReachOut />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
