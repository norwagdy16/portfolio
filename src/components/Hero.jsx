/** @format */

import React from "react";
import r from "../assets/r.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2b1055] via-[#6a0572] to-[#120078] text-white"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-0">
        
        {/* النص */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-pink-400">Raneem Magdy</span>
          </h1>
          <p className="mb-6 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 text-gray-100">
            UI/UX Designer — Designing isn’t just my job, it's how I bring ideas
            to life. I create sleek and engaging digital experiences that
            connect users with your brand.
          </p>
          <a
            href="#portfolio"
            className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 hover:scale-105 transform transition-all duration-300"
          >
            See My Work
          </a>
        </div>

        {/* الصورة */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={r}
            alt="Raneem Magdy"
            className="w-64 sm:w-72 md:w-96 h-auto rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.2)] object-cover transform md:translate-y-10 md:translate-x-6 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
