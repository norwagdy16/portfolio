/** @format */

import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "kenz-Aliakhtilafat",
      img: p1,
      link: "https://www.behance.net/gallery/215730165/GAME-(-kenz-Aliakhtilafat)",
    },
    {
      id: 2,
      title: "News-App",
      img: p2,
      link: "https://www.behance.net/gallery/216240309/News-App",
    },
    {
      id: 3,
      title: "Elfakh",
      img: p3,
      link: "https://www.behance.net/gallery/215731409/GAME-(Elfakh)",
    },
    {
      id: 4,
      title: "Reminder-App",
      img: p4,
      link: "https://www.behance.net/gallery/219112329/Hala-Raya-App-Landing-Page",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-16 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
