"use client";
import React from "react";
import img1 from "../public/lpsc2_campus.png";
import img2 from "../public/About/iiitkota_campus.jpeg";
import img3 from "../public/About/lpsc_campus.jpeg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function About2() {
  return (
    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10">
          <h2 className="bg-black text-gray-300 rounded-full text-sm w-fit px-4 py-1 mb-4">
            {item.badge}
          </h2>

          <p className={twMerge("text-xl mb-4")}>{item.title}</p>

          <div className="text-sm text-gray-300  prose prose-sm dark:prose-invert">
            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}

const dummyContent = [
  {
    title: "",
    description: (
      <>
        <p>
          I completed my Class 10 from Lucknow Public School and College,
          Vinamra Khand branch, under the CBSE board, securing an aggregate of
          92.8%. My subjects included Science, Mathematics, Social Science,
          English, Hindi, and Information Technology. Throughout the year, I
          maintained a strong academic record and developed a solid foundation
          in both theoretical and practical concepts. This phase helped me
          cultivate discipline, analytical thinking, and effective communication
          skills, which continue to support my academic and personal growth.
        </p>
      </>
    ),
    badge: "Class X",
    image: img3,
  },
  {
    title: "",
    description: (
      <>
        <p>
          I completed my Class 12 from Lucknow Public School and College,
          Vinamra Khand branch, under the CBSE board, securing 93.6% with a
          focus on the Science stream. My subjects included Physics, Chemistry,
          Mathematics, English, and Computer Science. This phase deepened my
          analytical and problem-solving skills, especially through core
          subjects like Physics and Math, while Computer Science sparked my
          interest in programming and technology. The strong academic foundation
          I built in Class 12 played a key role in shaping my journey in
          Computer Science and Engineering.
        </p>
      </>
    ),
    badge: "Class XII",
    image: img3,
  },
  {
    title: "",
    description: (
      <>
        <p>
          I am currently pursuing a B.Tech in Computer Science and Engineering
          at IIIT Kota, with a cumulative CGPA of 8.35 till the 5th semester.
          Over the course of my studies, I’ve gained a strong grasp of core
          computer science subjects such as Data Structures and Algorithms
          (DSA), Object-Oriented Programming (OOP), Computer Networks, and
          Database Management Systems (DBMS). Additionally, I’ve explored
          interdisciplinary subjects like Circuit Theory, Fundamentals of
          Electrical Engineering, and Digital Design, which have broadened my
          understanding of hardware-software integration.
        </p>
      </>
    ),
    badge: "College",
    image: img2,
  },
];
