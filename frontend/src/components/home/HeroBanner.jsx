import React from "react";
import { Link } from "react-router-dom";
export default function HeroBanner() {
  return (
    <div className=" lg:block relative">
      <img
        src="/heroBanner.png"
        alt=""
        className="hidden lg:block w-full h-auto"
      />
      <div className="lg:absolute mt-20 lg:mt-0 text-center lg:text-start  lg:left-52 lg:top-1/2 transform lg:-translate-y-1/2">
        <p className="lg:text-6xl text-4xl font-Dm">Build Skills with </p>
        <p className="lg:text-6xl text-4xl font-Dm">Online Course</p>
        <div className="w-full lg:w-[600px] mt-6">
          <p className=" text-lg">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
        </div>
        <Link to={"/courses"}>
          <button className="px-12 py-3 mt-5 rounded-full text-white bg-primary hover:bg-primary-foreground duration-100">
            Explore Course
          </button>
        </Link>
      </div>
    </div>
  );
}
