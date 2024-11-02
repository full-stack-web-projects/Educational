import React from "react";
import CategroyCard from "./CategroyCard";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <>
      <div className="flex lg:ml-[300px] mt-10 lg:text-start text-center flex-col gap-3 ">
        <h1 className="text-3xl font-bold ">Top Categories</h1>
        <p>Explore our Popular Categories</p>
      </div>
      <div className="flex mx-auto lg:w-[1400px] justify-center  items-center gap-6 mt-10 flex-wrap">
        <Link to="/courses">
          <CategroyCard title={"Art & Design"} img="/Group0.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Development"} img="/Group.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Communitcation"} img="/Group1.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Videography"} img="/Group2.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Photography"} img="/Group3.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Markting"} img="/Group4.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Content Writing"} img="/Group5.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Finance"} img="/Group6.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Science"} img="/Group7.png" />
        </Link>
        <Link to="/courses">
          <CategroyCard title={"Network"} img="/Group0.png" />
        </Link>
      </div>
    </>
  );
}
