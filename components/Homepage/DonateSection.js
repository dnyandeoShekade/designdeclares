export default function DonateSection() {
  return (
    <div className=" bg-black text-white relative overflow-hidden">
      <section className="py-8 px-4 sm:py-12 sm:px-6 md:px-8 lg:px-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* Left Column - Heading */}
            <div className="lg:sticky lg:top-8 lg:col-span-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-0">
                Donate to D!
              </h2>
            </div>

            {/* Right Column - Content and Buttons */}
            <div className="lg:col-span-8">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                  Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and
                  our passionate community working towards change in the creative industry. Your support can go a long
                  way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe
                  in the work we do, please consider a small donation to help us on our journey for a more equitable and
                  just planet.
                </p>

                {/* Donation Buttons */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="bg-white text-black font-semibold rounded-full px-6 py-3 text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto">
                      Donate £10
                    </button>
                    <button className="bg-white text-black font-semibold rounded-full px-6 py-3 text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto">
                      Donate £20
                    </button>
                    <button className="bg-white text-black font-semibold rounded-full px-6 py-3 text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto">
                      Donate £50
                    </button>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
