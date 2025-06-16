// export default function DonateSection() {
//     return (
//         <div className="min-h-screen bg-black text-white p-8 lg:p-12 relative overflow-hidden">

//       <section className="max-w-10xl bg-black py-12 px-1 md:px-12">
//         <div className=" mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ">
//             {/* Left Column - Heading */}
//             <div className="sticky top-8 max-w-xl">
//               <h2 className="text-2xl md:text-3xl font-bold text-white">Donate to D!</h2>
//             </div>

//             {/* <div className="sticky top-8">
//               <h2 className="text-white font-bold text-sm md:text-base">Declare Emergency Now</h2>
//             </div> */}

//             {/* Right Column - Content and Buttons */}
//             <div className="text-center md:text-left">
//               {/* Paragraph */}
//               <p className="text-2xl text-gray-300 leading-relaxed max-w-7xl">
//                 Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our
//                 passionate community working towards change in the creative industry. Your support can go a long way, and
//                 helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work
//                 we do, please consider a small donation to help us on our journey for a more equitable and just planet.
//               </p>
  
//               {/* Donation Buttons */}
//               <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-8">
//                 <button className="bg-white text-black font-semibold rounded-full px-6 py-3">Donate £10</button>
//                 <button className="bg-white text-black font-semibold rounded-full px-6 py-3">Donate £20</button>
//                 <button className="bg-white text-black font-semibold rounded-full px-6 py-3">Donate £50</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//     )
//   }
export default function DonateSection() {
    return (
      <div className="min-h-screen bg-black text-white p-8 lg:p-12 relative overflow-hidden">
        <section className="max-w-10xl bg-black py-12 px-1 md:px-12">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              {/* Left Column - Heading */}
              <div className="sticky top-8 max-w-xl md:col-span-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Donate to D!</h2>
              </div>
  
              {/* Right Column - Content and Buttons */}
              <div className="text-center md:text-left md:col-span-8">
                <p className="text-2xl text-gray-300 leading-relaxed max-w-7xl">
                  Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our
                  passionate community working towards change in the creative industry. Your support can go a long way, and
                  helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work
                  we do, please consider a small donation to help us on our journey for a more equitable and just planet.
                </p>
  
                <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-8">
                  <button className="bg-white text-black font-semibold rounded-full px-6 py-3">Donate £10</button>
                  <button className="bg-white text-black font-semibold rounded-full px-6 py-3">Donate £20</button>
                  <button className="bg-white text-black font-semibold rounded-full px-6 py-3">Donate £50</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  