"use client";

import { useState } from "react";

export default function Breakdown() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionData = [
    {
      id: "role-of-design",
      title: "The Role of Design",
      content: {
        left: "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
        right:
          "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.",
      },
    },
    {
      id: "time-for-change",
      title: "Time for Change",
      content: {
        left: "The climate crisis demands immediate action from every industry, and design is no exception. We must fundamentally rethink how we approach our work and the impact it has on the planet.",
        right:
          "This means moving beyond surface-level sustainability to deep, systemic change. We need to question every brief, every material choice, every production method, and every distribution channel.",
      },
    },
    {
      id: "act-with-urgency",
      title: "Act with Urgency",
      content: {
        left: "The window for meaningful climate action is rapidly closing. Every project we take on, every decision we make, must be viewed through the lens of environmental impact and social responsibility.",
        right:
          "We cannot wait for clients to demand sustainable solutions - we must lead by example, educate our clients, and refuse to participate in projects that actively harm our planet and communities.",
      },
    },
  ];

  return (
    <div className="bg-black text-white px-4 py-6 sm:py-8 md:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h2 className="text-lg sm:text-xl font-bold">This is Breakdown</h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Big Text */}
            <div className="mb-6 sm:mb-9">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                The science is settled. We are in an emergency of climate and
                nature. The world is past breaking point; the breakdown has
                begun...
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-0">
              {accordionData.map((item) => (
                <div key={item.id} className="border-b border-gray-500">
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="w-full py-3 sm:py-4 flex justify-between items-center hover:bg-gray-900 transition-colors duration-200"
                  >
                    <span className="text-base sm:text-lg text-gray-300">
                      {item.title}
                    </span>
                    <span className="text-gray-300 text-lg sm:text-xl">
                      {openSection === item.id ? "∧" : "∨"}
                    </span>
                  </button>

                  {openSection === item.id && (
                    <div className="pb-6 sm:pb-8 pt-3 sm:pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-300 leading-relaxed">
                      <p>{item.content.left}</p>
                      <p>{item.content.right}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6 sm:pt-8">
              <button className="w-full sm:w-auto bg-white text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
                View our D! Intro Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
    </div>
  );
}
