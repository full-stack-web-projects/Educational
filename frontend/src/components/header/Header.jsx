import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5"; // or any icon library
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Scrolling down and past 100px, hide navbar
      setIsVisible(false);
    } else {
      // Scrolling up, show navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-lg w-full z-10 lg:z-20 font-Dm fixed top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">
                <img loading="lazy" src="/LOGO.png" alt="Logo" />
              </h1>
            </Link>
          </div>
          {/* Menu button for small screens */}
          <div className="flex md:hidden">
            <Button
              onClick={toggleMenu}
              className="text-white hover:bg-primary-foreground"
            >
              <IoMenu size={24} />
            </Button>
          </div>
          {/* Links for desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 hover:bg-slate-300 px-4 py-2 duration-200 rounded-xl"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-gray-900 hover:bg-slate-300 px-4 py-2 duration-200 rounded-xl"
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-gray-900 hover:bg-slate-300 px-4 py-2 duration-200 rounded-xl"
            >
              Blog
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900 hover:bg-slate-300 px-4 py-2 duration-200 rounded-xl"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 font-Dm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/Courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Courses
            </Link>
            <Link
              to="/Blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
