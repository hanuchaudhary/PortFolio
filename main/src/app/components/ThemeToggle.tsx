"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { Sun, Moon } from "lucide-react";

export function EnhancedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";

    // Animate the button
    gsap.to(buttonRef.current, {
      rotate: 360,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3,
        });
      },
    });

    // Create a new timeline for each animation
    const tl = gsap.timeline({
      onComplete: () => {
        setTheme(newTheme);
        setIsAnimating(false);

        // Reset the circle position for next animation
        gsap.set(circleRef.current, {
          y: newTheme === "light" ? "100vh" : "-100vh",
          scale: 0.1,
          opacity: 0,
        });
      },
    });

    gsap.set(circleRef.current, {
      y: newTheme === "light" ? "100vh" : "-100vh",
      scale: 0.1,
      opacity: 0,
      backgroundColor: newTheme === "light" ? "#ffffff" : "#0a0a0a",
    });
    tl.to(circleRef.current, {
      opacity: 1,
      duration: 0.3,
    }).to(circleRef.current, {
      y: "0vh",
      scale: 25,
      duration: 1.2,
      ease: "circ.inOut",
    });
  };

  if (!mounted) return null;

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleTheme}
        className="relative z-40 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        aria-label="Toggle theme"
        disabled={isAnimating}
      >
        {theme === "light" ? (
          <Moon className="h-6 w-6" />
        ) : (
          <Sun className="h-6 w-6" />
        )}
      </button>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-30 pointer-events-none overflow-hidden"
      >
        <div
          ref={circleRef}
          className="z-20 absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
        />
      </div>
    </>
  );
}
