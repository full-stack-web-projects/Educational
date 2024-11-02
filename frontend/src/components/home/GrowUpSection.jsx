import React from "react";
import { Button } from "../ui/button";

export default function GrowUpSection() {
  return (
    <div className="flex justify-center p-2 mx-auto gap-16 mt-20 flex-col lg:flex-row lg:w-[1300px]">
      <img loading="lazy" src="/humans.png" alt="humans.png" />
      <div className="flex flex-col lg:py-20 text-center lg:text-start justify-center items-center p-5 lg:justify-start lg:items-start">
        <p className="text-3xl lg:text-4xl font-semibold w-[350px]">
          Grow us your skill with LearnPress LMS
        </p>
        <p className="mt-10 text-gray-600">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>
        <p className="mt-10">
          <span>&#10003;</span> Certification
        </p>
        <Button variant="default" size={"lg"} className={"lg:mt-16 mt-5"} >Explorer course</Button>
      </div>
    </div>
  );
}
