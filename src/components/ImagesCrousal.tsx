import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ImagesCarousel({wallpapers}:{wallpapers :  string[]}) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handlePrev() {
    setActiveIndex((prev) => (prev - 1 + wallpapers.length) % wallpapers.length);
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % wallpapers.length);
  }

  return (
    <div className="relative w-full">
      <div className="w-full bg-black overflow-hidden relative">
        <div className="flex aspect-video relative">
          {wallpapers.map((wallpaper, idx) => (
            <motion.div
              key={idx}
              initial={{ x: "100%" }}
              animate={{
                x: idx === activeIndex ? "0%" : idx < activeIndex ? "-100%" : "100%",
              }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute"
            >
              <img
                src={wallpaper}
                alt={`Wallpaper ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            className="bg-stone-800 cursor-pointer text-white p-2 rounded-full"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-stone-800 cursor-pointer text-white p-2 rounded-full"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
