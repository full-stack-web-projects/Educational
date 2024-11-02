import React from "react";
import CategroyCard from "./CategroyCard";

export default function Category() {
  return (
    <>
      <div className="flex lg:ml-[300px] mt-10 lg:text-start text-center flex-col gap-3 ">
        <h1 className="text-3xl font-bold ">Top Categories</h1>
        <p>Explore our Popular Categories</p>
      </div>
      <div className="flex mx-auto lg:w-[1400px] justify-center  items-center gap-6 mt-10 flex-wrap">
        <CategroyCard title={"Art & Design"} img="/Group0.png" />
        <CategroyCard title={"Development"} img="/Group.png" />
        <CategroyCard title={"Communitcation"} img="/Group1.png" />
        <CategroyCard title={"Videography"} img="/Group2.png" />
        <CategroyCard title={"Photography"} img="/Group3.png" />
        <CategroyCard title={"Markting"} img="/Group4.png" />
        <CategroyCard title={"Content Writing"} img="/Group5.png" />
        <CategroyCard title={"Finance"} img="/Group6.png" />
        <CategroyCard title={"Science"} img="/Group7.png" />
        <CategroyCard title={"Network"} img="/Group0.png" />
      </div>
    </>
  );
}
