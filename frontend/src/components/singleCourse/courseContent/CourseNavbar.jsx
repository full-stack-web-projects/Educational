import { Button } from "@/components/ui/button";
import React from "react";

export default function CourseNavbar({ handleClick }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center ">
      <Button
        variant={"outline"}
        className={"rounded-l-lg rounded-b-none  p-6 rounded-r-none w-full "}
        onClick={() => handleClick("Overview")}
      >
        Overview
      </Button>
      <Button
        variant={"outline"}
        className="rounded-none p-6 w-full"
        onClick={() => handleClick("Curriculum")}
      >
        Curriculum
      </Button>
      <Button
        variant={"outline"}
        className="rounded-none p-6 w-full"
        onClick={() => handleClick("Instructor")}
      >
        Instructor
      </Button>
      <Button
        variant={"outline"}
        className="rounded-none p-6 w-full"
        onClick={() => handleClick("FAQs")}
      >
        FAQs
      </Button>
      <Button
        variant={"outline"}
        className={"rounded-r-lg rounded-b-none  rounded-l-none p-6 w-full"}
        onClick={() => handleClick("Reviews")}
      >
        Reviews
      </Button>
    </div>
  );
}
