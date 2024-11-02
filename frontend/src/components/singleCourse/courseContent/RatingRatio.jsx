import React from "react";
import { IoStar } from "react-icons/io5";

export default function RatingRatio({ percentage, stars }) {
  function star(stars) {
    return Array(stars)
      .fill()
      .map((_, i) => (
        <IoStar key={i} className="inline-block text-yellow-400" />
      ));
  }

  return (
    <div>
      <div className="flex items-center">
        <span className="text-sm w-[100px] font-semibold mr-2">
          {star(stars)}
        </span>
        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
          <div
            className="bg-yellow-400 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
    </div>
  );
}
