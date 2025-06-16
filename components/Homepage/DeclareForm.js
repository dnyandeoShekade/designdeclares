"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function DeclareForm() {
  const [declarationType, setDeclarationType] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [discipline, setDiscipline] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isDisciplineOpen, setIsDisciplineOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const countries = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Other",
  ];

  const disciplines = [
    "Industrial Design",
    "Digital Design",
    "Product Design",
    "Fashion Design",
    "Communication Design",
    "Service Design",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Declare Emergency Now</h1>
          </div>

          {/* Right Column - Form */}
          <div>
            <p className="text-xl text-gray-300 mb-8">
              Design Declares is open to individuals and institutions working in
              industrial, digital, graphic, communication and service design. To
              declare here, you must be a company with an office in the UK
              employing at least one full-time designer. We also welcome
              declarations from practising freelance designers who are
              registered as self-employed in the UK, and global supporters from
              other countries. All declarations will be named and published on
              this site.
            </p>
            <div
              className={`border border-gray-700 p-8 rounded-lg w-full transform transition-all duration-700 ease-out ${
                showForm
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <h2 className="text-4xl font-light mb-8">
                I am Declaring Emergency
              </h2>

              <form className="space-y-6">
                {/* Declaration Type */}
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {[
                    { value: "business", label: "As a business" },
                    { value: "individual", label: "As an individual" },
                    { value: "institution", label: "As a public institution" },
                    { value: "team", label: "As a team or department" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          id={option.value}
                          name="declarationType"
                          value={option.value}
                          checked={declarationType === option.value}
                          onChange={(e) => setDeclarationType(e.target.value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-12 h-12 border-2 cursor-pointer border-white ${
                            declarationType === option.value
                              ? "bg-white"
                              : "bg-black"
                          }`}
                          onClick={() => setDeclarationType(option.value)}
                        >
                          {declarationType === option.value && (
                            <svg
                              className="w-10 h-10 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <label
                        htmlFor={option.value}
                        className="text-sm cursor-pointer"
                        onClick={() => setDeclarationType(option.value)}
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Combined Input Block */}
                <div className="border border-gray-400 rounded-lg overflow-hidden">
                  {/* Website */}
                  <div className="px-3 py-4 border-b border-gray-400">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Website:*</span>
                      <input
                        type="text"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="flex-grow bg-black text-white focus:outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="relative px-3 py-4 border-b border-gray-400">
                    <button
                      type="button"
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      className="w-full bg-black text-white text-left focus:outline-none flex justify-between items-center"
                    >
                      <div className="flex items-center flex-grow">
                        <span className="text-gray-400">
                          Country:*{" "}
                          <span className="text-white">{country}</span>
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isCountryOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isCountryOpen && (
                      <div className="absolute z-10 w-full left-0 mt-1 bg-black border border-gray-400 rounded-b-lg shadow-lg">
                        {countries.map((countryOption) => (
                          <button
                            key={countryOption}
                            type="button"
                            onClick={() => {
                              setCountry(countryOption);
                              setIsCountryOpen(false);
                            }}
                            className="w-full px-3 py-2 text-left hover:bg-gray-800 text-white"
                          >
                            {countryOption}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Discipline */}
                  <div className="relative px-3 py-4 border-b border-gray-400">
                    <button
                      type="button"
                      onClick={() => setIsDisciplineOpen(!isDisciplineOpen)}
                      className="w-full bg-black text-white text-left focus:outline-none flex justify-between items-center"
                    >
                      <div className="flex items-center flex-grow">
                        <span className="text-gray-400">
                          Discipline:*{" "}
                          <span className="text-white">
                            {discipline || "Select discipline"}
                          </span>
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isDisciplineOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDisciplineOpen && (
                      <div className="absolute z-10 w-full left-0 mt-1 bg-black border border-gray-400 rounded-b-lg shadow-lg">
                        {disciplines.map((disciplineOption) => (
                          <button
                            key={disciplineOption}
                            type="button"
                            onClick={() => {
                              setDiscipline(disciplineOption);
                              setIsDisciplineOpen(false);
                            }}
                            className="w-full px-3 py-2 text-left hover:bg-gray-800 text-white"
                          >
                            {disciplineOption}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="px-3 py-4 border-b border-gray-400">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Email:*</span>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow bg-black text-white focus:outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="px-3 py-4">
                    <textarea
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={5}
                      placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                      className="w-full bg-black text-white placeholder:text-gray-400 focus:outline-none resize-none border-none"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-12 h-12 border-2 cursor-pointer ${
                          agreeToTerms
                            ? "border-white bg-white"
                            : "border-white"
                        }`}
                        onClick={() => setAgreeToTerms(!agreeToTerms)}
                      >
                        {agreeToTerms && (
                          <svg
                            className="w-10 h-10 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label
                      htmlFor="terms"
                      className="text-xs leading-relaxed cursor-pointer"
                      onClick={() => setAgreeToTerms(!agreeToTerms)}
                    >
                      I consent for my data to be used for the purpose of this
                      Declaration, and for my name and reasons for joining to be
                      used on the promotion of the Declaration in the UK and
                      beyond our social channels.
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={subscribeToNewsletter}
                        onChange={(e) =>
                          setSubscribeToNewsletter(e.target.checked)
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-12 h-12 border-2 cursor-pointer ${
                          subscribeToNewsletter
                            ? "border-white bg-white"
                            : "border-white"
                        }`}
                        onClick={() =>
                          setSubscribeToNewsletter(!subscribeToNewsletter)
                        }
                      >
                        {subscribeToNewsletter && (
                          <svg
                            className="w-10 h-10 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label
                      htmlFor="newsletter"
                      className="text-xs leading-relaxed cursor-pointer"
                      onClick={() =>
                        setSubscribeToNewsletter(!subscribeToNewsletter)
                      }
                    >
                      I would like to be added to the Design Declares newsletter
                      and receive further updates.
                    </label>
                  </div>
                </div>

                {/* Privacy Policy Link */}
                <div>
                  <a
                    href="#"
                    className="text-xs text-gray-400 underline hover:text-white"
                  >
                    View our Privacy Policy
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 font-medium px-8 py-2 rounded-full transition-colors"
                >
                  Declare Emergency Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
