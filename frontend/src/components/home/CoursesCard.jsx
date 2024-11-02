import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import course1 from "../../assets/Rectangle 139.png";
import { Badge } from "@/components/ui/badge";
export default function ({ instructor, title, weeks, students, price, type }) {
  return (
    <Card className=" md:w-[400px] h-[460px]   rounded-3xl  hover:text-primary hover:shadow-lg hover:-translate-y-4 duration-200 hover:shadow-slate-300">
      <div className="flex relative flex-col justify-center items-center gap-5 w-full">
        <img src={course1} alt="" className="w-full h-[240px]" />
        <Badge variant="secondary" className={"absolute top-2 left-5 "}>
          {type}
        </Badge>
      </div>

      <CardContent>
        <div className="flex flex-col mt-2 gap-3 w-full">
          <div className="flex gap-5 w-full">
            <p>
              by <strong>{instructor}</strong>
            </p>
          </div>
          <div className=" w-[230px] font-semibold text-lg">
            <p>{title}</p>
          </div>
          <div className="flex gap-3 w-full items-center">
            <img src="/time.png" alt="" />
            <p>{weeks} Week</p>
            <img src="/students.png" alt="" />
            <p>{students} Student</p>
          </div>
          <hr />
          <div className="flex justify-between gap-3 w-full items-center">
            <p className="text-slate-500 text-lg">${price}</p>
            <Button variant="outline">View More</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
