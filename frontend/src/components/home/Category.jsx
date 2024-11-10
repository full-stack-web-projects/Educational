import React from "react";
import CategroyCard from "./CategroyCard";
import { Link } from "react-router-dom";

// Memoize CategroyCard if it doesn’t change with different props
const MemoizedCategoryCard = React.memo(CategroyCard);

export default function Category() {
  const categories = [
    { title: "Art & Design", img: "/Group0.png" },
    { title: "Development", img: "/Group.png" },
    { title: "Communication", img: "/Group1.png" },
    { title: "Videography", img: "/Group2.png" },
    { title: "Photography", img: "/Group3.png" },
    { title: "Marketing", img: "/Group4.png" },
    { title: "Content Writing", img: "/Group5.png" },
    { title: "Finance", img: "/Group6.png" },
    { title: "Science", img: "/Group7.png" },
    { title: "Network", img: "/Group0.png" },
  ];

  return (
    <>
      <div className="flex flex-col mx-auto lg:w-[1400px] justify-center items-center gap-3 mt-10 flex-wrap">
        <h1 className="text-3xl font-bold">Top Categories</h1>
        <p>Explore our Popular Categories</p>
      </div>
      <div className="flex mx-auto lg:w-[1400px] justify-center items-center gap-6 mt-10 flex-wrap">
        {categories.map((category, index) => (
          <Link to="/courses" key={index}>
            <MemoizedCategoryCard title={category.title} img={category.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
