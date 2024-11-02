import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import course1 from "../../../assets/Rectangle 139.png";
import { Button } from "@/components/ui/button";
export default function Head({ title, lessons, weeks, students, levels }) {
  return (
    <div className="w-full lg:h-[240px] bg-black p-5 text-white flex items-center justify-center md:gap-28 lg:flex-row flex-col   mb-20  ">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center ">
          <Badge variant={"secondary"} className={"rounded-md p-2"}>
            Photography
          </Badge>
          <div className="flex gap-2">
            <p>by</p>
            <p>{title} omarehab</p>
          </div>
        </div>
        <p className=" font-Dm text-2xl md:text-3xl  md:w-[700px]">
          The Ultimate Guide to the best WordPress LMS Plugin
        </p>
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
            <p>{levels}All levels</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/lessons.png" alt="" />
            <p>{lessons} Lessons</p>
          </div>
        </div>
      </div>
      {/* card content */}
      <Card className=" md:w-[300px] mt-10 rounded-3xl  hover:text-primary hover:shadow-lg overflow-hidden hover:-translate-y-4 duration-200 hover:shadow-slate-300">
        <div className="flex relative flex-col justify-center items-center gap-5 w-full">
          <img src={course1} alt="" className="w-full " />
        </div>
        <CardContent>
          <div className="flex flex-col mt-2 gap-3 w-full">
            <div className="flex justify-between gap-3 w-full items-center">
              <p className="text-slate-500 text-lg">$29.99</p>
              <Button className={"rounded-full"}>Start Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
