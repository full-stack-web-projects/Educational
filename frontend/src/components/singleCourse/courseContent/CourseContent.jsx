import React, { useState } from "react";
import CourseNavbar from "./CourseNavbar";

import Curriculum from "./Curriculum";
import OverView from "./OverView";
import Instructor from "./Instructor";
import FAQs from "./FAQs";
import Reviews from "./Reviews";

export default function CourseContent() {
  const [content, setContent] = useState("Overview");
  const handleClick = (section) => {
    setContent(section);
    console.log(section);
  };
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className=" border border-input w-[330px] mb-20 md:w-[800px] bg-gray-100 rounded-xl">
        <CourseNavbar handleClick={handleClick} />
        {/* Add your course content here */}
        {content == "Overview" ? (
          <OverView />
        ) : content == "Curriculum" ? (
          <Curriculum />
        ) : content == "Instructor" ? (
          <Instructor />
        ) : content == "FAQs" ? (
          <FAQs />
        ) : content == "Reviews" ? (
          <Reviews />
        ) : (
          ""
        )}
      </div>
      {/* Add your Comments here */}
      <div className="flex justify-center items-center  w-full flex-col mb-20 ">
        <div className="flex flex-col gap-3 w-[330px] md:w-[800px] ">
          <p className="font-Dm text-xl">Leave a comment</p>
          <p className="font-Dm text-gray-600">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="flex gap-5 w-[330px] md:w-[800px] flex-wrap">
            <div className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="Name *"
                className="border border-gray-500 px-4 p-2 w-full rounded-lg"
              />
              <input
                type="text"
                placeholder="Email *"
                className="border border-gray-500 px-4 p-2 w-full rounded-lg"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Comment"
              className="border border-gray-500 text-gray-500 px-4 p-2 w-full h-[100px] flex  rounded-lg"
            ></textarea>
          </div>
          <button className="py-3 bg-primary w-[150px]  text-white rounded-full">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
