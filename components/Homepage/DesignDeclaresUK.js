import ScrollProgress from "./ScrollProgress";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-8 lg:p-12 relative overflow-hidden">
      <ScrollProgress />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full ">
        {/* Left side - Large stacked text */}
        <div className="flex flex-col justify-start items-start h-full mt-10">
          <h1
            className="
            font-[__druk_ba9c3a,__druk_Fallback_ba9c3a,__Inter_d65c78,__Inter_Fallback_d65c78,Helvetica,sans-serif]
            font-extrabold
            text-[#E7E7E7]
            text-[clamp(60px,9vw,220px)]
            leading-[0.75]
            tracking-tight
            scale-y-140
            uppercase
            w-full
            text-left
            justify-items-stretch
            m-0
            p-0
          "
          >
            DESIGN
            <br />
            DECLARES
            <br />
            <span className="text-[#FF5630]">UK</span>
          </h1>
        </div>

        {/* Right side - Content and buttons */}
        <div className="flex flex-col justify-between">
          {/* Top right - Paragraph text */}
          <div className="max-w-md ml-auto">
            <p
              className="
                font-sans
                font-normal
                text-base leading-relaxed
                text-gray-300
                w-full
              "
            >
              Design Declares is a growing group of designers, design studios,
              agencies and institutions here to declare a climate and ecological
              emergency. As part of the global declaration movement, we commit
              to harnessing the tools of our industry to reimagine, rebuild and
              heal our world.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom-Right Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col w-48">
        <button className="bg-white text-black hover:bg-gray-100 border border-gray-300 font-medium text-base h-12  flex items-center justify-between transition-colors duration-200">
          Menu
          <span className="text-xl font-light pl-3 border-l border-gray-300">
            +
          </span>
        </button>
        <button className="bg-white text-black hover:bg-gray-100 border border-gray-300 font-medium text-base h-12  flex items-center justify-center transition-colors duration-200">
          Declare Now
        </button>
      </div>
    </div>
  );
}
