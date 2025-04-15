import { useState } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

function Hero() {
  return (
    <div>
      <section id="Home" className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <WavyBackground
          backgroundFill="rgb(9 9 11)"
          className="absolute inset-0 w-full max-w-[100vw] overflow-hidden -z-10"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[10]">
          <div className="text-amber-50 text-lg">Welcome !! I'm </div>
          <TypewriterEffectSmooth
            className="text-amber-50 text-5xl"
            words={[{ text: "ABHISHEK" }, { text: "PANT" }]}
          />
          <div className="text-amber-50 text-sm w-1/2 text-center">
            a Computer Science student at IIIT Kota and a passionate full stack
            developer with over a year of experience in the MERN stack. I love
            building responsive web applications that solve real-world problems.
            I’m also a Student Placement Coordinator and have a keen interest in
            competitive programming, constantly sharpening my problem-solving
            skills through challenges and contests.
          </div>
        </div>
        <div className="relative top-[80vh] flex justify-center items-center flex-col lg:flex-row ">
          <button className="p-[3px] relative z-100 mr-0 mb-5 lg:mr-10 lg:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1on3shiPBPicgDE-cfsKWaS8zXQNtmalc/view?usp=sharing"
              >
                View CV
              </a>
            </div>
          </button>

          <button className="p-[3px] relative z-100 ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <a href="../public/Resume/Abhishek_Pant_Resume.pdf" download>
                Download CV
              </a>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
