import React from 'react'

import australiaImage from '../../../assets/images/destination/australia.png'
import malaysiaImage from '../../../assets/images/destination/malaysia.png'

function Destinations() {
  return (
    <div className="bg-gray-100 py-12 px-4">

      <p className="text-center text-xs uppercase tracking-widest text-orange-400 font-semibold">
        Popular Destinations
      </p>

      <h2 className="text-center text-3xl font-bold text-orange-500 mb-10">
        Study & Work Destinations
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Australia Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row">

          <div className="md:w-1/2 relative">
            <img
              src={australiaImage}
              alt="Australia"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
              🇦🇺 Australia
            </div>
          </div>

          <div className="md:w-1/2 p-5 flex flex-col justify-between">

            <div className="space-y-3">

              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-500">
                  Highest Slots
                </span>

                <span className="font-semibold text-gray-800">
                  120+
                </span>
              </div>

              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-500">
                  Visa Success
                </span>

                <span className="font-semibold text-gray-800">
                  95%
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Average From
                </span>

                <span className="font-bold text-blue-700">
                  AUD 10,000 / 8,500
                </span>
              </div>
            </div>

            <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition duration-300">
              Explore Now
            </button>

          </div>
        </div>

        {/* Malaysia Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row">

          <div className="md:w-1/2 relative">
            <img
              src={malaysiaImage}
              alt="Malaysia"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
              🇲🇾 Malaysia
            </div>
          </div>

          <div className="md:w-1/2 p-5 flex flex-col justify-between">

            <div className="space-y-3">

              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-500">
                  Application Deadlines
                </span>

                <span className="font-semibold text-gray-800">
                  Open Now
                </span>
              </div>

              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-500">
                  Visa Success
                </span>

                <span className="font-semibold text-gray-800">
                  98%
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Average From
                </span>

                <span className="font-bold text-blue-700">
                  MYR 15,000 / 28,000
                </span>
              </div>
            </div>

            <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition duration-300">
              Explore Now
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Destinations