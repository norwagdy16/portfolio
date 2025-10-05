/** @format */

import React from "react";

export default function WhatIDo() {
  const services = [
    {
      id: 1,
      title: "User Research",
      desc: "Understand user needs and behaviors through interviews, surveys, and usability testing to create human-centered designs.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Wireframing & Prototyping",
      desc: "Create clear wireframes and interactive prototypes to visualize user flows and test ideas before development.",
      icon: "🧩",
    },
    {
      id: 3,
      title: "UI Design",
      desc: "Design clean, consistent, and visually appealing interfaces that align with brand identity and enhance user experience.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Usability Testing",
      desc: "Conduct usability tests to identify pain points and ensure the product is intuitive, accessible, and enjoyable to use.",
      icon: "🧠",
    },
    {
      id: 5,
      title: "Interaction Design",
      desc: "Design smooth interactions and animations that guide users seamlessly and make the experience feel natural and engaging.",
      icon: "✨",
    },
    {
      id: 6,
      title: "Design Systems",
      desc: "Build scalable design systems to maintain consistency, speed up development, and ensure cohesive brand experiences.",
      icon: "🧱",
    },
  ];

  return (
    <section id="what-i-do" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
