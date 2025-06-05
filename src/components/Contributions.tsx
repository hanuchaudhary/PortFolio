import React from "react";

export function Contributions() {
  return (
    <div className="w-full font-farro flex flex-col items-start max-w-2xl mx-auto gap-4 space-y-7">
      <div className="text-left w-full pb-4 border-b-2 border-dashed">
        <span className="text-2xl font-gloria font-semibold ">
          More about me
        </span>
        <div className="flex items-center gap-2 mt-4">
          <img
            className="h-12 w-12 rounded-full"
            src="/images/logo.png"
            alt="Kush Chaudhary"
          />
          <div>
            <a
              href="https://kushchaudhary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline hover:text-primary/80"
            >
              kushchaudhary.com
            </a>
            <p className="text-muted-foreground text-sm">
              Visit my personal website to know more about me, my work, and my
              interests.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl text-left font-gloria font-semibold mb-4">
          Recent Work
        </h3>
        <div className="text-left flex items-center gap-2 border-b-2 border-dashed w-full pb-4">
          <img
            className="h-12 w-12 rounded-full"
            src="/images/100xDevs.png"
            alt=""
          />
          <div>
            <a
              className="text-primary hover:underline hover:text-primary/80"
              href="https://github.com/code100x/photo-ai/pull/36"
              target="_blank"
              rel="noopener noreferrer"
            >
              100xDevs | PhotoAi
            </a>
            <p className="text-sm text-muted-foreground">
              Merged 3 Pull Requests for saving transaction in Database,
              refactoring the whole dashboard User Interface and theme mode. .
            </p>
          </div>
        </div>
        <div className="text-left flex items-center gap-2 border-b-2 border-dashed w-full pb-4">
          <img className="h-12 w-12 rounded-full" src="/images/LC.png" alt="" />
          <div>
            <a
              className="text-primary hover:underline hover:text-primary/80"  
              href="https://github.com/hanuchaudhary/Leetcode-Journal"
              target="_blank"
              rel="noopener noreferrer"
            >
              SWOC2025 | Leetcode Journal
            </a>
            <p className="text-muted-foreground text-sm">
              Social Winter of Code 2025 Project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
