import React from "react";

export default function InfoCard() {
  return (
    <div className="p-5 bg-secondary md:w-[300px] w-[140px] h-[150px] flex flex-col items-center gap-5 justify-center rounded-2xl">
      <p className=" text-primary text-2xl font-semibold">25K</p>
      <p>Active Students</p>
    </div>
  );
}
