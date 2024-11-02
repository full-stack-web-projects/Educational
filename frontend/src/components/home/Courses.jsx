import React from "react";
import CoursesCard from "./CoursesCard";
import { Button } from "@/components/ui/button";

export default function Courses() {
  return (
    <>
      <div className="flex lg:ml-[300px] lg:w-[1300px] mt-10 lg:text-start items-center text-center justify-between gap-3 ">
        <div className="text-start mx-5   lg:mx-0">
          <h2 className="text-2xl  lg:text-3xl  font-bold ">
            Featured courses
          </h2>
          <p>Explore our Popular Courses</p>
        </div>
        <Button
          variant="outline"
          className=" rounded-full lg:mr-0 mr-4  lg:px-10"
        >
          All Courses
        </Button>
      </div>
      <div className="flex mx-auto lg:w-[1400px] justify-center  items-center gap-6 mt-10 flex-wrap">
        <CoursesCard
          instructor={"Omar Ehab"}
          title={"Create an LMS Website with LearnPress"}
          weeks={"3"}
          students={54}
          price={29.9}
          type={"Photography"}
          img="/Group0.png"
        />
        <CoursesCard
          instructor={"Omar Ehab"}
          title={"Create an LMS Website with LearnPress"}
          weeks={"3"}
          students={54}
          price={29.9}
          type={"Photography"}
          img="/Group0.png"
        />
        <CoursesCard
          instructor={"Omar Ehab"}
          title={"Create an LMS Website with LearnPress"}
          weeks={"3"}
          students={54}
          price={29.9}
          type={"Photography"}
          img="/Group0.png"
        />
        <CoursesCard
          instructor={"Omar Ehab"}
          title={"Create an LMS Website with LearnPress"}
          weeks={"3"}
          students={54}
          price={29.9}
          type={"Photography"}
          img="/Group0.png"
        />
        <CoursesCard
          instructor={"Omar Ehab"}
          title={"Create an LMS Website with LearnPress"}
          weeks={"3"}
          students={54}
          price={29.9}
          type={"Photography"}
          img="/Group0.png"
        />
        <CoursesCard
          instructor={"Omar Ehab"}
          title={"Create an LMS Website with LearnPress"}
          weeks={"3"}
          students={54}
          price={29.9}
          type={"Photography"}
          img="/Group0.png"
        />
      </div>
    </>
  );
}
