import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
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
        <Link to="/courses">
          <Button variant="default" size={"lg"} className={"lg:mt-16 mt-5"}>
            Explorer courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
