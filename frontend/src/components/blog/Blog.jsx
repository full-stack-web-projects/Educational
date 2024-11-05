import React, { useState } from "react";
import BlogCard from "./BlogCard";

import { FaBars } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Blog() {
  const sampleCourses = [
    {
      title: "Introduction to JavaScript",
      instructor: "Omar Ehab",
      weeks: 8,
      students: 120,
      lessons: 25,
      levels: "Beginner",
      price: 19.99,
    },
    {
      title: "Advanced React Development",
      instructor: "Alice Johnson",
      weeks: 10,
      students: 200,
      lessons: 30,
      levels: "Advanced",
      price: 49.99,
    },
    {
      title: "Python for Data Science",
      instructor: "John Doe",
      weeks: 12,
      students: 150,
      lessons: 40,
      levels: "Intermediate",
      price: 39.99,
    },
    {
      title: "Full Stack Web Development",
      instructor: "Jane Smith",
      weeks: 15,
      students: 75,
      lessons: 50,
      levels: "All Levels",
      price: 59.99,
    },
    {
      title: "Machine Learning Basics",
      instructor: "Dr. Lisa Ray",
      weeks: 20,
      students: 85,
      lessons: 35,
      levels: "Intermediate",
      price: 69.99,
    },
    {
      title: "Introduction to Cloud Computing",
      instructor: "Sara Lee",
      weeks: 10,
      students: 90,
      lessons: 20,
      levels: "Beginner",
      price: 29.99,
    },
  ];

  return (
    <div className="mt-28 ">
      <div className="flex justify-center items-center w-full gap-10">
        <div>
          <div className="flex flex-col gap-4 md:flex-row items-center  md:justify-between">
            <h1 className="text-4xl   font-Dm">All Artical</h1>
            <Input
              className=" w-[300px] border-slate-600"
              placeholder="Search"
            />
          </div>
          <div className="  flex  justify-center  items-center">
            <div className="mt-16 mb-3 p-5 lg:w-[1300px] flex  flex-wrap gap-5   ">
              {sampleCourses.map((c) => {
                return (
                  <Link to={`/singleCourse`}>
                    <BlogCard
                      user={c.instructor}
                      title={c.title}
                      weeks={c.weeks}
                      students={c.students}
                      lessons={c.lessons}
                      levels={c.levels}
                      price={c.price}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
