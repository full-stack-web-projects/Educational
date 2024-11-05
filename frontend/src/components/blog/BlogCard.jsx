import React from "react";
import img1 from "../../assets/Image.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
export default function BlogCard({
  user,
  title,
  weeks,
  students,
  lessons,
  levels,
  price,
}) {
  return (
    <div className="w-full flex ">
      <Card className=" md:w-[400px] h-[430px]   rounded-3xl  hover:text-primary hover:shadow-lg hover:-translate-y-4 duration-200 hover:shadow-slate-300">
        <div className="flex relative flex-col justify-center items-center gap-5 w-full">
          <img src={img1} alt="" className="w-full h-[240px]" />
        </div>

        <CardContent>
          <div className="flex flex-col mt-4 gap-3 w-full">
            <div className=" w-[330px] font-semibold text-lg">
              <p>{title}</p>
            </div>

            <hr />
            <div className="flex justify-between gap-3 w-full items-center">
              <p className="text-slate-500 text-lg">
                Looking for an amazing & well-functional LearnPress WordPress
                Theme?...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
