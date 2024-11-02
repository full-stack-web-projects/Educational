import React from "react";
import FeedBackCard from "./FeedBackCard";

export default function StudentFeedBack() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-20 mb-20">
      <p className="text-4xl font-Dm "> Student FeedBack</p>
      <p className="text-xl text-center  text-slate-600">
        What Students Say About Academy LMS
      </p>
      <div className="flex gap-5 mt-5 flex-wrap justify-center items-center ">
      <FeedBackCard />
      <FeedBackCard />
      <FeedBackCard />
      <FeedBackCard />
      </div>
    </div>
  );
}
