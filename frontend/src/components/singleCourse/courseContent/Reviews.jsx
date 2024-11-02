import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import RatingRatio from "./RatingRatio";
export default function Reviews() {
  const initialData = {
    rating: 4.0,
    totalRatings: 146951,
    ratingRatio: { five: 90, four: 5, three: 2, two: 2, one: 1 },
    comments: [
      {
        id: 1,
        name: "Laura Hipster",
        date: "October 03, 2022",
        text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem...",
      },
      {
        id: 2,
        name: "Laura Hipster",
        date: "October 03, 2022",
        text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem...",
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h3 className="text-lg font-semibold">Comments</h3>

      {/* Rating Summary */}
      <div className="mb-6">
        <div className="flex items-center gap-5 text-md font-semibold mt-2">
          <p className=" font-Dm text-3xl ">4.0</p>
          <div>
            <div className="flex ">
              <IoStar className="text-yellow-400 ml-1 size-5" />
              <IoStar className="text-yellow-400 ml-1 size-5" />
              <IoStar className="text-yellow-400 ml-1 size-5" />
              <IoStar className="text-yellow-400 ml-1 size-5" />
              <IoStarHalf className="text-yellow-400 ml-1 size-5" />
            </div>
            <p className="text-gray-500 ml-2">
              based on {initialData.totalRatings.toLocaleString()} ratings
            </p>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <RatingRatio percentage={initialData.ratingRatio.five} stars={5} />
          <RatingRatio percentage={initialData.ratingRatio.four} stars={4} />
          <RatingRatio percentage={initialData.ratingRatio.three} stars={3} />
          <RatingRatio percentage={initialData.ratingRatio.two} stars={2} />
          <RatingRatio percentage={initialData.ratingRatio.one} stars={1} />
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {initialData.comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt={`${comment.name}'s avatar`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-sm font-semibold">{comment.name}</h4>
                  <span className="text-xs text-gray-500">{comment.date}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700">{comment.text}</p>
            <button className="text-sm text-blue-500 mt-2">Reply</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button className="p-2">❮</button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="p-2 mx-1 border w-10 h-10 text-white bg-gray-800 rounded-full"
          >
            {page}
          </button>
        ))}
        <button className="p-2">❯</button>
      </div>
    </div>
  );
}
