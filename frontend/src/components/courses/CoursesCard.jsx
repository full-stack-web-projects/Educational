import React from "react";
import img1 from "../../assets/Image.png";
import { Button } from "../ui/button";

export default function CoursesCard({
  instructor,
  title,
  weeks,
  students,
  lessons,
  levels,
  price,
}) {
  return (
    <div className="flex flex-col  md:flex-row hover:text-primary hover:-translate-y-2 duration-200 border-slate-300 border-2 w-[330px] md:w-[900px] rounded-3xl overflow-hidden">
      <div className="w-[360px] rounded-l-3xl overflow-hidden ">
        <img src={img1} alt="" />
      </div>
      <div className="p-5">
        <div>
          <p className="text-md">by {instructor}</p>
          <p className="text-xl font-Dm">{title}</p>
        </div>

        <div className="flex mt-4 gap-3  flex-wrap w-full ">
          <div className="flex gap-3 items-center">
            <img src="/time.png" alt="" />
            <p>{weeks} Week</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/students.png" alt="" />
            <p>{students} Student</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/levels.png" alt="" />
            <p>{levels}</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/lessons.png" alt="" />
            <p>{lessons} Lessons</p>
          </div>
        </div>
        <div className="mt-3">
          <hr />
          <div className="flex mt-4 justify-between w-[500px]   items-center">
            <p className="text-slate-500 text-lg">$ {price}</p>
            <Button variant="outline">View More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
