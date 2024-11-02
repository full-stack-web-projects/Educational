import React from "react";
import { Button } from "../ui/button";
export default function WordpressSection() {
  return (
    <div className="flex   relative justify-center lg:w-[1400px] items-center mx-auto  mt-16  ">
      <img
        loading="lazy"
        src="/Mask.png"
        alt=""
        className=" h-[300px] w-full md:h-[400px] blur-sm"
      />
      <div className="flex-1 absolute md:w-full w-[300px] text-center items-center">
        <h2 className="text-lg font-Dm md:text-xl font-bold text-gray-700 mb-2">
          PROVIDING AMAZING
        </h2>
        <h1 className="text-2xl font-Dm md:text-4xl font-bold text-gray-800">
          Education wordpress theme
        </h1>
        <p className="text-lg font-Dm text-gray-900 md:text-gray-500 mt-2  ">
          The next level of LMS WordPress Theme. Learn anytime and anywhere.
        </p>
        {/* Explore Course Button */}
        <button className="mt-2  px-5 py-1 md:px-6 md:py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-foreground transition-all">
          Explore Course
        </button>
      </div>
    </div>
  );
}
