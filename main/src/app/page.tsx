import Image from "next/image";
import React from "react";
import { EnhancedThemeToggle } from "./components/ThemeToggle";
import Projects from "./components/Projects";

export default function page() {
  return (
    <main className="min-h-screen">
      <section className="max-w-3xl z-[99999] relative select-none mx-auto h-screen flex items-center justify-center">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="h-40 w-40 overflow-hidden border rounded-3xl">
              <Image
                alt="Me"
                src={"/me.jpg"}
                height={400}
                width={400}
                className="object-contain grayscale"
              />
            </div>
            <div className="flex justify-center gap-2">
              {["/x.svg", "/linkedin.svg", "/github.svg"].map((src) => (
                <button key={src} className="h-6 w-6">
                  <Image
                    alt="Me"
                    src={src}
                    height={400}
                    width={400}
                    className="dark:invert-[1] cursor-pointer"
                  />
                </button>
              ))}
              <EnhancedThemeToggle />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-semibold">Hi I'm Kush Chaudhary</h1>
            <h2 className="text-neutral-400">
              20 | Software Engineer | Open Source Contributor | Tech Enthusiast
            </h2>
          </div>
        </div>
      </section>
      <Projects />
    </main>
  );
}
