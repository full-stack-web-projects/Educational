import React from "react";

export default function Instructor() {
  return (
    <div className="flex flex-col gap-5 p-5 w-[330px]  md:w-[800px]">
      <div className="flex flex-col md:flex-row justify-center  items-start gap-4">
        <div className=" w-full h-[150px] md:w-[300px]  md:h-[150px] bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-4xl font-bold">¶</span>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-dm">ThimPress</h2>
          <p className="text-gray-500">
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
            This is one of the best WordPress LMS Plugins which can be used to
            easily create & sell courses online.
          </p>
          {/* Stats */}
          <div className="flex items-center gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <img src="/students.png" alt="" />
              <span>156 Students</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/lessons.png" alt="" />
              <span>20 Lessons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 mt-4">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4 mt-4 text-gray-500">
        <span className="text-gray-400">Follow:</span>
      </div>
    </div>
  );
}
