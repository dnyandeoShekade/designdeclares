"use client";
import { useState, useEffect } from "react";

export default function GlobalSupporters() {
  const [count, setCount] = useState(0);
  // Sample signatory data - in a real app this would come from an API
  const signatories = [
    "2LK",
    "21st Brands",
    "21% Studio",
    "3 Sided Cube",
    "A2 Design",
    "AEIOU",
    "Alias Aligned",
    "Alpha Websites",
    "APRE - A Creative",
    "Archetype Studio",
    "Active Medial",
    "Agile",
    "Airside",
    "Alchemystic",
    "Almodóvar Design Agency",
    "Aloof Design",
    "Altern Design Ltd",
    "Alan Dempsey",
    "Alexander Boxill",
    "Alexander Kent",
    "Alexander Lam Studio",
    "Alexander Tochilovsky",
    "Alexis Sommer",
    "Almo Sartori",
    "Aloof Design",
    "Andrew Carr",
    "Andy Fletcher",
    "Andy Potts",
    "Anja Dohse",
    "Annabelle Vella",
    "Antidote",
    "Applied Works",
    "Archetype Associates",
    "Archetype Studio",
    "Ariel Aguilera",
    "Avery & Brown",
    "BA (Hons) Graphic Design",
    "BA (Hons) Graphic Art",
    "Arts University",
    "Bournemouth",
    "Barnbrook Design",
    "Bergman School of Art",
    "Beatrice Lessi",
    "Ben Chatfield",
    "Barbara Chandler",
    "Barbara Chandler",
    "Barbara Chandler",
    "Barth Worlds",
    "Baxter & Bailey",
    "Baxter & Bailey",
    "Beau",
    "Ben Chatfield",
    "Ben Chatfield",
    "Ben Jessop",
    "Blackstock Limited",
    "Blackstock Limited",
    "Brita Design Office",
    "Bill Bragg",
    "Bill Bragg",
    "Big Motive",
    "Big Motive",
    "Big Motive",
  ];

  // Add more signatories to demonstrate the full layout
  const allSignatories = [
    ...signatories,
    "Bloomsbury Innovation Lab",
    "Design by Mondial",
    "Francis Rowland",
    "Isadora",
    "Morphography Studio",
    "Olivia Studio Ltd",
    "Sheffield Hallam University",
    "The Manufacturing",
    "Blok",
    "Design Council",
    "Frankie Ratford",
    "Jack Bancroft",
    "Moritz",
    "Olivia Studio Ltd",
    "Simons Coop",
    "Technology Centre",
    "Blue State Digital",
    "Design for Joy",
    "Future Generations at",
    "James Aldred",
    "Moritz Cai Studio",
    "Olive Kittredge",
    "Social Change",
    "ThinkUp",
    "Boyles & Plants",
    "Design for Joy",
    "Future Generations at",
    "James Aldred",
    "Moritz Cai Studio",
    "Olive Kittredge",
    "Social Change",
    "ThinkUp",
    "Brand Sympathy",
    "Design Indaba",
    "Glow Collective",
    "James Greenfield",
    "Moss Editions Ltd",
    "Oli Kellett",
    "Sophie Blackmore",
    "Thirteen05 Consulting",
    "Brandalism",
    "Design Thinc",
    "Fullstop",
    "James Greenfield",
    "Moss Editions Ltd",
    "Oli Kellett",
    "Sophie Blackmore",
    "Thirteen05 Consulting",
    "Brandalism",
    "Design Thinc",
    "Fullstop Ltd",
    "James Greenfield",
    "Moss Editions Ltd",
    "Oli Kellett",
    "Sophie Blackmore",
    "Thirteen05 Consulting",
    "Brandalism",
    "Design Thinc",
    "Fullstop Ltd",
    "James Greenfield",
    "Moss Editions Ltd",
    "Oli Kellett",
    "Sophie Blackmore",
    "Thirteen05 Consulting",
    "ACRE - A Creative",
    "Design Works Ltd",
    "Future Brand",
    "James Greenfield",
    "Moss Editions Ltd",
    "Oli Kellett",
    "Sophie Blackmore",
    "Thirteen05 Consulting",
    "Active Medial",
    "Bright Signals Ltd",
    "Gemma Griffith",
    "GH Creative",
    "INTERROBANG",
    "ORCA",
    "Sniff Design",
    "Thane Reach",
    "Agile",
    "Bright Signals Ltd",
    "Gemma Griffith",
    "Green Nest Ltd",
    "Martin Hopkins",
    "Odin",
    "Sniff Design",
    "The Framestore & Co",
    "Airside",
    "Bright Signals Ltd",
    "Gemma Griffith",
    "Green Nest Ltd",
    "Martin Hopkins",
    "Odin",
    "Sniff Design",
    "The Framestore & Co",
  ];

  useEffect(() => {
    const targetCount = 668;
    const duration = 2000; // 2 seconds
    const stepTime = 10; // milliseconds per step
    const totalSteps = duration / stepTime;
    const increment = Math.ceil(targetCount / totalSteps);

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount > targetCount) {
        currentCount = targetCount;
        clearInterval(timer);
      }
      setCount(currentCount);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="bg-black py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Left Corner - Count and Header */}
          <div className="mb-12">
            <div className="space-y-2">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light">
                #{count}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm md:text-base">
                  Global Supporters
                </span>
              </div>
            </div>
          </div>

          {/* Full Width Signatories List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-1 text-sm">
            {allSignatories.map((signatory, index) => (
              <div
                key={index}
                className="text-white hover:text-gray-300 transition-colors duration-200 py-1"
              >
                {signatory}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Bottom-Right Buttons */}
    </div>
  );
}
