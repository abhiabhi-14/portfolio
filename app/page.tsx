"use client";
import { useEffect } from "react";
import NavMenu from "../components/NavMenu";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Slider3 } from "../components/Slider3";
import { POR } from "../components/POR";
import { About2 } from "../components/About2";
import { Underline } from "@/components/ui/underline";
import { TracingBeam } from "../components/ui/tracing-beam";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  useEffect(() => {
    console.log("Hydration check:", document.body.innerHTML);
  });
  return (
    <div className="overflow-x-hidden box-border bg-zinc-950 ">
      {/* Navbar Section */}
      <div className="relative w-full">
        <NavMenu />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Background */}
      <div className="bg-zinc-950 h-20 "></div>
      <div className="bg-zinc-950 overflow-hidden">
        <div
          id="Edu"
          className="flex flex-col justify-center items-center h-screen"
        >
          <TypewriterEffectSmooth
            className="absolute"
            words={[{ text: "Educational Background" }]}
          />{" "}
          <Underline />
        </div>
        <TracingBeam className="px-6">
          <About2 />
        </TracingBeam>
      </div>

      {/*slider*/}
      <div className="bg-zinc-950 h-10 "></div>
      <div className="bg-zinc-950 ">
        <div
          id="Slider"
          className="flex flex-col justify-center items-center h-screen"
        >
          <TypewriterEffectSmooth
            className="absolute"
            words={[{ text: "Projects and Experiences" }]}
          />
          <Underline />
        </div>
        <Slider3 />
      </div>

      <div className="bg-zinc-950 h-20 "></div>
      <div className="bg-zinc-950 ">
        <div
          id="por"
          className="flex flex-col justify-center items-center h-screen"
        >
          <TypewriterEffectSmooth
            className="absolute"
            words={[{ text: "Position of Responsibility" }]}
          />
          <Underline />
        </div>
        <div className="bg-zinc-950 h-[25vh] "></div>
        <POR />
        <div className="bg-zinc-950 h-[25vh] "></div>
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}
