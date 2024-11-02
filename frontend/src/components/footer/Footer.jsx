import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">EduPress</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:text-orange-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-orange-500">
                Latest Articles
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-orange-500">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PROGRAMS</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/programs/art-design" className="hover:text-orange-500">
                Art & Design
              </Link>
            </li>
            <li>
              <Link to="/programs/business" className=" hover:text-orange-600">
                Business
              </Link>
            </li>
            <li>
              <Link
                to="/programs/it-software"
                className="hover:text-orange-500"
              >
                IT & Software
              </Link>
            </li>
            <li>
              <Link to="/programs/languages" className="hover:text-orange-500">
                Languages
              </Link>
            </li>
            <li>
              <Link
                to="/programs/programming"
                className="hover:text-orange-500"
              >
                Programming
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <p className="text-sm">
            Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
          </p>
          <p className="text-sm mt-2">Tel: +1 (123) 2500-567-898</p>
          <p className="text-sm">
            Mail:{" "}
            <a
              href="mailto:supportlms@gmail.com"
              className="hover:text-orange-500"
            >
              supportlms@gmail.com
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <Link to="#">
              <i className=" hover:text-orange-500">
                <FaFacebook />
              </i>
            </Link>
            <Link to="#">
              <i className="fab fa-pinterest hover:text-orange-500">
                <FaPinterestSquare />
              </i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter hover:text-orange-500">
                <FaSquareTwitter />
              </i>
            </Link>
            <Link to="#">
              <i className="fab fa-youtube hover:text-orange-500">
                <FaYoutube />
              </i>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t pt-4 text-center text-gray-500">
        <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
      </div>
    </footer>
  );
}
