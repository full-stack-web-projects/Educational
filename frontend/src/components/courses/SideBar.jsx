import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import CheckBoxName from "./CheckBoxName ";
import { FaStar } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Input } from "@/components/ui/input";
export default function SideBar({ toggleSidebar }) {
  return (
    <div>
      <div className="flex md:justify-start justify-between items-center">
        <p className=" text-xl font-Dm">Course category</p>
        <div>
          <button
            className="lg:hidden p-2 text-xl text-gray-700"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Scrollable area on mobile view */}
      <ScrollArea className="mt-4 w-[300px] max-h-[600px] overflow-y-auto md:max-h-full">
        <div className="flex flex-col gap-4 font-Dm  text-slate-400">
          <Input
            className=" block md:hidden md:w-[300px] border-slate-600"
            placeholder="Search"
          />
          <CheckBoxName>Commercial</CheckBoxName>
          <CheckBoxName>Office</CheckBoxName>
          <CheckBoxName>Shop</CheckBoxName>
          <CheckBoxName>Educate</CheckBoxName>
          <CheckBoxName>Academy</CheckBoxName>
          <CheckBoxName>Single family home</CheckBoxName>
          <CheckBoxName>Studio</CheckBoxName>
          <CheckBoxName>Educate</CheckBoxName>
        </div>

        {/* Price section */}
        <p className="text-xl font-Dm mt-5">Price</p>
        <div className="mt-4 flex flex-col gap-4 font-Dm text-slate-400">
          <CheckBoxName>All</CheckBoxName>
          <CheckBoxName>Paid</CheckBoxName>
          <CheckBoxName>Free</CheckBoxName>
        </div>

        {/* Levels section */}
        <p className="text-xl font-Dm mt-5">Levels</p>
        <div className="mt-4 flex flex-col gap-4 font-Dm text-slate-400">
          <CheckBoxName>All Levels</CheckBoxName>
          <CheckBoxName>Beginner</CheckBoxName>
          <CheckBoxName>Intermidiate</CheckBoxName>
          <CheckBoxName>Expert</CheckBoxName>
        </div>

        {/* Rating section */}
        <p className="text-xl font-Dm mt-5">Rating</p>
        <div className="mt-4 flex flex-col gap-4 font-Dm text-slate-400">
          <CheckBoxName>
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </CheckBoxName>
          <CheckBoxName>
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </CheckBoxName>
          <CheckBoxName>
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </CheckBoxName>
          <CheckBoxName>
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
            </div>
          </CheckBoxName>
          <CheckBoxName>
            <div className="flex gap-1">
              <FaStar />
            </div>
          </CheckBoxName>
        </div>
      </ScrollArea>
    </div>
  );
}
