import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ProfileDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileDescRef = useRef<HTMLDivElement>(null);

  const splitTextToWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="inline-block opacity-0">
        {word}
      </span>
    ));
  };

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const words = profileDescRef.current?.querySelectorAll("span");
        if (words) {
          gsap.to(words, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: "power1.out",
          });
        }

        gsap.to(".icon-rotate", {
          rotate: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        // Gentle float animation for icons
        gsap.to(".icon-float", {
          y: "10px",
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Subtle scale pulse for MongoDB logo
        gsap.to(".mongodb-logo", {
          scale: 1.05,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="px-4 md:px-20 relative overflow-hidden pb-20 "
    >
      {/* SVG icons with subtle animations */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="absolute top-4 left-[15%] w-16 h-16 opacity-20 icon-float"
          src="/nodejs.svg"
          alt="Node.js logo"
        />
        <img
          className="absolute top-52 left-[20%] w-12 h-12 opacity-20 icon-rotate"
          src="/typescript.svg"
          alt="TypeScript logo"
        />
        <img
          className="absolute top-56 left-[15%] w-10 h-10 opacity-20 icon-float"
          src="/js.svg"
          alt="JavaScript logo"
        />
        <img
          className="absolute top-40 -right-20 w-[500px] opacity-10 icon-rotate"
          src="/react.svg"
          alt="React logo"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-20">
        <div className="space-y-8 flex gap-4">
          <h1 className="text-6xl md:text-8xl font-bold text-beige tracking-tight">
            Kush
          </h1>

          <div className="max-w-2xl">
            <div
              ref={profileDescRef}
              className="text-beige text-lg leading-relaxed"
            >
              {splitTextToWords(`Welcome to my world of code, where ideas take shape and problems
              get solved elegantly. I'm passionate about crafting clean, efficient
              solutions that make a real impact. From modern frameworks to
              timeless principles, every project is an opportunity to excel.`)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-6xl md:text-8xl font-bold text-beige tracking-tight">
          Ch
          <img
            className="h-20 w-20 mongodb-logo"
            src="/mongodb.svg"
            alt="MongoDB logo"
          />
          udhary
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
