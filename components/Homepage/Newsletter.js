"use client";

import Image from "next/image";
import { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    email: "",
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      newsletter: !prev.newsletter,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className="bg-black py-16 px-4 md:px-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column - Heading */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <h2 className="text-white font-bold text-lg ">
                  The Design Declares Newsletter and <br /> Toolkit
                </h2>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-2/3 space-y-8">
              {/* Toolkit Preview Image */}
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden">
                  {/* Toolkit Background with Text Overlay */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-600 to-gray-800">
                    <Image
                      src="/background.webp"
                      width={1200} // or your desired size
                      height={800}
                      alt="Background image"
                    />
                  </div>
                </div>
              </div>

              {/* Description Text */}
              <div className="space-y-4">
                <p className="text-white font-light text-lg leading-relaxed">
                  Subscribe to the Design Declares UK newsletter to receive the
                  latest news and updates. By signing up you will also gain
                  access to The Design Declares Toolkit, a live and evolving
                  Notion site co-created with our community. It is filled with
                  the latest resources and methods to help you on your journey
                  to climate-positive design.
                </p>
                <p className="text-white text-lg leading-relaxed">
                  Every signatory to Design Declares will receive an access link
                  to the Toolkit. If you are unable to declare emergency quite
                  yet, you can still access the Toolkit - just register below.
                </p>
              </div>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email:*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border border-white text-white placeholder-gray-400 px-3 py-4 text-lg focus:outline-none  transition-colors duration-200"
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer ">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="w-6 h-6 border border-white bg-transparent checked:bg-white checked:border-white mt-0.5 flex-shrink-0"
                    />
                    <span className="text-white text-sm leading-relaxed">
                      I would like to be added to the Design Declares!
                      newsletter and receive further updates.
                    </span>
                  </label>
                </div>

                {/* Privacy Policy Link */}
                <div>
                  <a
                    href="#"
                    className="text-white text-sm underline hover:text-sky-400 transition-colors duration-200"
                  >
                    View our Privacy Policy
                  </a>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-white text-black font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom-Right Buttons */}

    </div>
  );
}
