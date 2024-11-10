import React from "react";
import { Link } from "react-router-dom";

// Memoized component to avoid unnecessary re-renders
const AddsOn = React.memo(function AddsOn() {
  return (
    <>
      {/* Desktop view */}
      <div className="md:flex hidden relative justify-center md:w-[1400px] items-center mx-auto mt-16 mb-20">
        <img
          src="/addsOn.webp"
          alt="Add-On Feature"
          width="1400"
          height="400"
          className="h-[300px] w-full md:h-[400px]"
          loading="lazy"
        />
        <div className="absolute left-2 md:left-20">
          <h2 className="text-sm md:text-xl font-bold text-gray-700 mb-2">
            GET MORE POWER FROM
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            LearnPress Add-Ons
          </h1>
          <p className="text-xs md:text-lg text-gray-900 md:text-gray-500 mt-2 w-[180px] md:w-[400px]">
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          <Link to="/courses">
            <Button>Explore Course</Button>
          </Link>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex justify-center items-center mx-auto mt-12 mb-20">
        <div className="relative w-full h-[200px] flex items-center bg-gradient-to-r from-green-200 via-gray-100 to-red-100 rounded-xl shadow-md p-6">
          <div>
            <h2 className="text-sm font-bold text-gray-700 mb-2">
              GET MORE POWER FROM
            </h2>
            <h1 className="text-2xl font-bold text-gray-800">
              LearnPress Add-Ons
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              The next level of LearnPress - LMS WordPress Plugin. More
              Powerful, Flexible and Magical Inside.
            </p>
            <Link to="/courses">
              <Button>Explore Course</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

// Shared button style for consistency
const Button = ({ children }) => (
  <button className="mt-2 md:mt-4 px-5 py-1 md:px-6 md:py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-foreground transition-all">
    {children}
  </button>
);

export default AddsOn;
