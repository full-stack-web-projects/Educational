import React from "react";

export default function AddsOn() {
  return (
    <>
      <div className="md:flex hidden  relative justify-center md:w-[1400px] items-center mx-auto  mt-16 mb-20">
        <img
          src="/addsOn.png"
          alt=""
          className=" h-[300px] w-full md:h-[400px]"
        />
        <div className="flex-1 absolute left-2 md:left-20">
          <h2 className="text-sm md:text-xl font-bold text-gray-700 mb-2">
            GET MORE POWER FROM
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            LearnPress Add-Ons
          </h1>
          <p className="text-xs md:text-lg text-gray-900 md:text-gray-500 mt-2 w-[180px] md:w-[400px]">
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          {/* Explore Course Button */}
          <button className="mt-2 px-5 py-1 md:px-6 md:py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-foreground transition-all">
            Explore Course
          </button>
        </div>
      </div>

      {/* mobile container */}
      <div className="md:hidden  flex justify-center md:w-[1400px] items-center mx-auto mt-12 mb-20">
        {/* Main container */}
        <div className="relative w-full h-[200px] md:h-[400px] flex items-center bg-gradient-to-r from-green-200 via-gray-100 to-red-100 rounded-xl shadow-md p-6">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-sm md:text-xl font-bold text-gray-700 mb-2">
              GET MORE POWER FROM
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              LearnPress Add-Ons
            </h1>
            <p className="text-xs md:text-lg text-gray-500 mt-2">
              The next level of LearnPress - LMS WordPress Plugin. More
              Powerful, Flexible and Magical Inside.
            </p>
            {/* Explore Course Button */}
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all">
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
