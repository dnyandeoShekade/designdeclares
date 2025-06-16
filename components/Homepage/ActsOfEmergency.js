export default function ActsOfEmergency() {
  const acts = [
    {
      number: 1,
      title: "Sound the Alarm",
      description:
        "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
    },
    {
      number: 2,
      title: "Start the Journey",
      description:
        "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
    },
    {
      number: 3,
      title: "Bring Clients with Us",
      description:
        "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
    },
    {
      number: 4,
      title: "Measure What We Make",
      description:
        "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
    },
    {
      number: 5,
      title: "Redefine 'Good'",
      description:
        "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
    },
    {
      number: 6,
      title: "Educate, Accelerate",
      description:
        "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
    },
    {
      number: 7,
      title: "Design for Justice",
      description:
        "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
    },
    {
      number: 8,
      title: "Act with Urgency",
      description:
        "Recognise that we are in an emergency and act accordingly. The window for meaningful action is rapidly closing, and every decision we make must reflect this reality.",
    },
  ];

  return (
    <section className="bg-black py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column - Heading */}
          <div className="md:w-1/3">
            <h2 className="font-bold text-white text-lg md:text-xl mb-4 md:mb-0">
              8 Acts of Emergency
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3">
            {/* Introduction Paragraph */}
            <p className="text-white text-base leading-relaxed mb-8">
              What does it take to Declare? It's accepting we are in an
              emergency of climate and nature, and a commitment to do something
              about it. Here are eight places to start:
            </p>

            {/* Acts List */}
            <div className="space-y-0">
              {acts.map((act) => (
                <div
                  key={act.number}
                  className="bg-gray-200 text-black border-t border-b border-black"
                >
                  {/* Top section: Number and Title, with a vertical and a common bottom border */}
                  <div className="flex items-stretch w-full border-b border-black">
                    <span
                      className="
                      text-[36px] font-normal text-black flex-shrink-0
                      px-6 py-4 border-r border-black
                      flex items-center justify-center
                    "
                    >
                      {act.number}
                    </span>
                    <h3 className="text-5xl font-normal text-black px-6 py-4 flex-grow">
                      {act.title}
                    </h3>
                  </div>
                  {/* Bottom section: Description */}
                  <p className="text-base text-gray-700 leading-relaxed px-6 py-4">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
