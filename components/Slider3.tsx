"use client";

import Carousel from "@/components/ui/carousel";
import img1 from "../public/Projects/Website1.png";
export function Slider3() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: img1,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: img1,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: img1,
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: img1,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
