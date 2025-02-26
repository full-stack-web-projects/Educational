import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CategroyCard = React.memo(function CategroyCard({ title, img }) {
  return (
    <Card className="md:w-[240px] h-[230px] p-3 rounded-lg w-[160px] hover:text-primary hover:shadow-lg hover:-translate-y-4 duration-200 hover:shadow-slate-300">
      <CardHeader>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <Avatar>
            <AvatarImage src={img} alt={`${title} image`} loading="lazy" />{" "}
            {/* Lazy load the image */}
            <AvatarFallback>{title.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-center text-md md:text-lg">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <p>38 Courses</p>{" "}
         
        </div>
      </CardContent>
    </Card>
  );
});

export default CategroyCard;
