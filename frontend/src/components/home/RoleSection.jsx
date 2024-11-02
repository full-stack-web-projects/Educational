import React from "react";

export default function RoleSection() {
  return (
    <div className="relative justify-center lg:w-[1400px] h-[300px] mx-auto mt-16 mb-20">
      {/* Background Image */}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex md:flex-row justify-center gap-5 flex-col items-center md:justify-between px-4 md:px-20 bg-gradient-to-r from-blue-100 to-purple-200 rounded-xl">
        {/* Left Side Content */}
        <div className="flex items-center  space-x-4">
          {/* Icon */}
          <div className="bg-white p-5 item rounded-full">
            <img loading="lazy" src="/student.png" alt="Student Icon" className=" h-6 w-6  md:h-14 md:w-14" />
          </div>
          {/* Text */}
          <h2 className="text-2xl font-semibold text-gray-800">
            Let's Start With Academy LMS
          </h2>
        </div>

        {/* Right Side Buttons */}
        <div className="flex md:flex-row  flex-col gap-5 justify-center items-center">
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
            I’m A Student
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Become An Instructor
          </button>
        </div>
      </div>
    </div>
  );
}
