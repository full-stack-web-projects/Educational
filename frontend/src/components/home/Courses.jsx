import React, { useMemo } from "react";
import CoursesCard from "./CoursesCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Courses = React.memo(function Courses() {
  // Memoize the list of courses
  const courses = useMemo(
    () => [
      {
        instructor: "Omar Ehab",
        title: "Create an LMS Website with LearnPress",
        weeks: "3",
        students: 54,
        price: 29.9,
        type: "Photography",
        img: "/Group0.png",
      },
      {
        instructor: "Omar Ehab",
        title: "Create an LMS Website with LearnPress",
        weeks: "3",
        students: 54,
        price: 29.9,
        type: "Photography",
        img: "/Group0.png",
      },
      {
        instructor: "Omar Ehab",
        title: "Create an LMS Website with LearnPress",
        weeks: "3",
        students: 54,
        price: 29.9,
        type: "Photography",
        img: "/Group0.png",
      },
      {
        instructor: "Omar Ehab",
        title: "Create an LMS Website with LearnPress",
        weeks: "3",
        students: 54,
        price: 29.9,
        type: "Photography",
        img: "/Group0.png",
      },
      {
        instructor: "Omar Ehab",
        title: "Create an LMS Website with LearnPress",
        weeks: "3",
        students: 54,
        price: 29.9,
        type: "Photography",
        img: "/Group0.png",
      },
      {
        instructor: "Omar Ehab",
        title: "Create an LMS Website with LearnPress",
        weeks: "3",
        students: 54,
        price: 29.9,
        type: "Photography",
        img: "/Group0.png",
      },
      // Add other courses as needed...
    ],
    []
  );

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-col lg:flex-row lg:w-[1300px] mt-10 items-center text-center lg:text-start justify-between gap-3 mx-5 lg:mx-0">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">Featured Courses</h2>
            <p>Explore our Popular Courses</p>
          </div>
          <Link to="/allCourses">
            <Button
              variant="outline"
              className="rounded-full lg:px-10 lg:mr-0 mr-4"
            >
              All Courses
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex  justify-center items-center  mt-10 w-full">
        <div className="md:w-[1400px] justify-center flex gap-6 flex-wrap">
          {courses.map((course, index) => (
            <Link to="/singleCourse" key={index}>
              <CoursesCard
                instructor={course.instructor}
                title={course.title}
                weeks={course.weeks}
                students={course.students}
                price={course.price}
                type={course.type}
                img={course.img}
              />
            </Link>
          ))}
        </div>{" "}
      </div>
    </>
  );
});

export default Courses;
