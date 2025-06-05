import React from "react";
import { Button } from "./button";

export function ReachOut() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* <p className="text-center text-lg font-semibold mt-10">
        Building Smart Solutions with Code Craftsmanship and User Needs in Focus
      </p> */}
      <div className="bg-white rounded-3xl shadow-[10px] p-8 mt-10 flex flex-col items-center justify-between gap-10">
        <div className="w-20">
          <img src="/images/calander.png" alt="" />
        </div>
        <div className="">
          <p className="md:text-3xl text-xl md:w-96 text-center mx-auto pb-4">
            Let's build something awesome together
          </p>
          <p className="text-sm max-w-md text-center mx-auto pb-4">
            I'm excited to hear about what you're building. Reach out below to
            get the ball rolling, and potentially build something really special
            together.
          </p>
          <div className="mt-4">
            <Button
              href="mailto:kushchaudharyog@gmail.com"
              backgroundColor="#3578F7"
              borderColor="#295EC0"
              boxShadow="rgb(140, 194, 255) 0px .6px 0px .6px inset"
              color="white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
