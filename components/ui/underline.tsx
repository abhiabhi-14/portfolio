"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function Underline() {
  return (
    <div className="h-screen w-screen bg-zinc-950 flex flex-col items-center justify-start overflow-hidden rounded-md">
      <div className="w-full relative">
        {/* Gradients */}
        <div className="relative top-[53vh] left-[-10vw] sm:top-[53vh] sm:left-[5vw] md:top-[55vh] md:left-[8vw] lg:top-[60vh] lg:left-[10vw]">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400}
          className="w-screen h-screen"
          particleColor="#5773ff"
        />

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-zinc-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>
    </div>
  );
}
