/** @format */

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-gray-800 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="mb-6 md:mb-0 text-center md:text-left font-medium">
          © 2025 Raneem Magdy. All rights reserved.
        </p>

        <div className="flex gap-8">
          {/* Gmail */}
          <a
            href="mailto:Raneemmagdy2@gmail.com"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-red-500"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.065L0 5.25v13.5h24V5.25l-12 7.815zM12 11.28L24 3H0l12 8.28z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/raneem-magdy-585979368/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-600"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.77 24h20.46C23.207 24 24 23.226 24 22.271V1.728C24 .774 23.207 0 22.23 0zM7.08 20.452H3.555V9h3.525v11.452zM5.318 7.577a2.038 2.038 0 1 1 0-4.077 2.038 2.038 0 0 1 0 4.077zM20.452 20.452h-3.526v-5.605c0-1.336-.027-3.055-1.86-3.055-1.86 0-2.145 1.454-2.145 2.956v5.704h-3.527V9h3.388v1.561h.047c.472-.895 1.63-1.837 3.356-1.837 3.592 0 4.256 2.365 4.256 5.441v6.287z" />
            </svg>
          </a>

          {/* Behance */}
          <a
            href="https://www.behance.net/ranemmagdy"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.317 10.433c0 6.182-4.8 11.2-10.717 11.2-5.918 0-10.718-5.018-10.718-11.2C1.882 4.25 6.682-.768 12.6-.768c5.918 0 10.717 5.018 10.717 11.2zm-10.717-6.434c-3.424 0-6.209 2.833-6.209 6.433s2.785 6.433 6.209 6.433c3.425 0 6.209-2.833 6.209-6.433s-2.784-6.433-6.209-6.433zM9.36 8.04h2.56c1.09 0 1.56.44 1.56 1.13 0 .63-.46 1.08-1.44 1.08h-2.68V8.04zm0 3.3h2.84c1.26 0 2.08.57 2.08 1.47 0 .91-.88 1.45-2.12 1.45H9.36v-2.92z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
