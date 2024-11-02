import React from "react";
import { Button } from "./ui/button";

export default function NotFound() {
  return (
    <div className="w-full flex-col flex justify-center items-center h-full">
      <h1 className="text-primary text-6xl font-bold">404</h1>
      <h2 className="text-primary text-2xl font-semibold">Page Not Found</h2>
      <img
        src="/notFound.png"
        alt="notFound"
        className=" w-[800px] mb-10 p-10"
      />
    </div>
  );
}
