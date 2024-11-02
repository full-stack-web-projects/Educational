import React, { useState } from "react";
import CoursesCard from "./CoursesCard";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Courses() {
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mt-28">
      <div className="flex gap-10">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl ml-6 lg:m-0 font-Dm">All Courses</h1>
            <Input
              className=" hidden md:block md:w-[300px] border-slate-600"
              placeholder="Search"
            />
            <button
              className="lg:hidden p-2 mr-2 text-xl text-gray-700"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>
          <div className="mt-16 mb-3 flex flex-col gap-5 justify-center items-center md:justify-start md:items-start">
            {sampleCourses.map((c) => {
              return (
                <Link to={`/singleCourse`}>
                  <CoursesCard
                    instructor={c.instructor}
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

        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } lg:block fixed top-0 right-0 h-full z-10 bg-white p-4 shadow-lg lg:relative lg:h-auto lg:shadow-none`}
        >
          <SideBar toggleSidebar={toggleSidebar} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden z-0"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
}
