/** @format */

import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-pink-500"> Portfolio</div>

        <ul className="flex gap-6 text-lg font-medium text-gray-700">
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="relative cursor-pointer hover:text-pink-500 transition-colors"
              activeClass="text-pink-500 after:w-full"
              spy={true}
              offset={-80}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-pink-500 transition-all duration-300"></span>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="relative cursor-pointer hover:text-pink-500 transition-colors"
              activeClass="text-pink-500 after:w-full"
              spy={true}
              offset={-80}
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-pink-500 transition-all duration-300"></span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              className="relative cursor-pointer hover:text-pink-500 transition-colors"
              activeClass="text-pink-500 after:w-full"
              spy={true}
              offset={-80}
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-pink-500 transition-all duration-300"></span>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="what-i-do"
              smooth={true}
              duration={500}
              className="relative cursor-pointer hover:text-pink-500 transition-colors"
              activeClass="text-pink-500 after:w-full"
              spy={true}
              offset={-80}
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-pink-500 transition-all duration-300"></span>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
