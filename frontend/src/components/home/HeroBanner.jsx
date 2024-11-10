import React from "react";
import { Link } from "react-router-dom";

// Memoize the component to avoid unnecessary re-renders
const HeroBanner = React.memo(function HeroBanner() {
  return (
    <div className="lg:block relative">
      {window.innerWidth >= 1024 && (
        <img
          src="/heroBanner.webp"
          alt="Hero Banner"
          width="1600"
          height="600"
          className="w-full h-auto"
          loading="lazy"
        />
      )}
      <div className="lg:absolute mt-20 lg:mt-0 text-center lg:text-start lg:left-52 lg:top-1/2 transform lg:-translate-y-1/2">
        <p className="lg:text-6xl text-4xl font-Dm">Build Skills with</p>
        <p className="lg:text-6xl text-4xl font-Dm">Online Course</p>
        <div className="w-full lg:w-[600px] mt-6">
          <p className="text-lg">
            We believe in the power of knowledge to inspire and empower every
            learner to reach their potential.
          </p>
        </div>
        <Link to="/courses">
          <button className="px-12 py-3 mt-5 rounded-full text-white bg-primary hover:bg-primary-foreground duration-100">
            Explore Course
          </button>
        </Link>
      </div>
    </div>
  );
});

export default HeroBanner;
