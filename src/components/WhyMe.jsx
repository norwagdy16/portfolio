/** @format */

import React from "react";
import { Sparkles, Zap, Heart, Rocket } from "lucide-react";

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="py-20 bg-gradient-to-r from-[#fdf2f8] via-[#f3d9ff] to-[#d8b4fe]"
    >
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Why <span className="text-pink-600">Choose Me?</span>
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            I bring a blend of{" "}
            <span className="font-semibold text-purple-700">
              creativity, logic, and passion
            </span>{" "}
            into every project. My mission is to craft{" "}
            <span className="text-pink-500 font-medium">
              pixel-perfect designs
            </span>{" "}
            and seamless experiences that truly represent your brand.
          </p>

          <a
            href="#portfolio"
            className="mt-8 inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-10 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore My Work
          </a>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white/95 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 border border-pink-100">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-pink-500 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Creative Design
            </h3>
            <p className="text-gray-600 text-sm">
              I design with imagination and precision to make your brand stand
              out.
            </p>
          </div>

          <div className="p-6 bg-white/95 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 border border-pink-100">
            <div className="flex justify-center mb-4">
              <Zap className="text-purple-500 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-gray-600 text-sm">
              Delivering projects quickly while maintaining top-notch quality.
            </p>
          </div>

          <div className="p-6 bg-white/95 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 border border-pink-100">
            <div className="flex justify-center mb-4">
              <Heart className="text-red-500 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Passion & Dedication
            </h3>
            <p className="text-gray-600 text-sm">
              Every project is crafted with care, love, and full attention to
              detail.
            </p>
          </div>

          <div className="p-6 bg-white/95 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 border border-pink-100">
            <div className="flex justify-center mb-4">
              <Rocket className="text-indigo-500 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovative Ideas
            </h3>
            <p className="text-gray-600 text-sm">
              I turn creative visions into beautiful, functional digital
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
