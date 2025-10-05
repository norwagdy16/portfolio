/** @format */

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // أيقونات الهامبرجر والإغلاق

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">Portfolio</div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-700">
          {["hero", "about", "portfolio", "what-i-do"].map((section, i) => (
            <li key={i}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                className="relative cursor-pointer hover:text-pink-500 transition-colors"
                activeClass="text-pink-500 after:w-full"
                spy={true}
                offset={-80}
              >
                {section === "hero"
                  ? "Home"
                  : section === "about"
                  ? "About"
                  : section === "portfolio"
                  ? "Projects"
                  : "Services"}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-pink-500 transition-all duration-300"></span>
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button (for mobile) */}
        <button
          className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-pink-100">
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium text-gray-700">
            {["hero", "about", "portfolio", "what-i-do"].map((section, i) => (
              <li key={i}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-pink-500 transition-colors"
                  spy={true}
                  offset={-80}
                  onClick={() => setMenuOpen(false)} // يقفل المينيو بعد الضغط
                >
                  {section === "hero"
                    ? "Home"
                    : section === "about"
                    ? "About"
                    : section === "portfolio"
                    ? "Projects"
                    : "Services"}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
