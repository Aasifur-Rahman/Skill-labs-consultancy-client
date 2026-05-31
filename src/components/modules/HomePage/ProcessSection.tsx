import React from 'react'

import process1 from '../../../assets/images/process/process1.png'
import process2 from '../../../assets/images/process/process2.png'
import process3 from '../../../assets/images/process/process3.png'
import process4 from '../../../assets/images/process/process4.png'
import process5 from '../../../assets/images/process/process5.png'
import process6 from '../../../assets/images/process/process6.png'

function ProcessSection() {
  return (
 <div className="bg-gray-100 py-12 px-4">

  <p className="text-center text-blue-600 font-medium">
    Our Process
  </p>

  <h2 className="text-center text-4xl font-bold text-orange-500 mb-14">
    Your One-Stop Solution
  </h2>

  <div className="flex flex-wrap justify-center items-start gap-10 lg:gap-0 max-w-7xl mx-auto">

    {/* Card 1 */}
    <div className="flex items-center">
      <div className="text-center w-44 relative">
        
        <div className="relative w-28 h-28 mx-auto rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            1
          </span>

          <img
            src={process1}
            alt="Assessment Service"
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Assessment Service
        </h3>

        <p className="text-xs text-gray-500 mt-2 leading-5">
          We evaluate your profile and suggest the best options.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center">
      <div className="text-center w-44 relative">
        
        <div className="relative w-28 h-28 mx-auto rounded-full bg-green-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            2
          </span>

          <img
            src={process2}
            alt="File Processing"
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          File Processing
        </h3>

        <p className="text-xs text-gray-500 mt-2 leading-5">
          We prepare and verify your documents carefully.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center">
      <div className="text-center w-44 relative">
        
        <div className="relative w-28 h-28 mx-auto rounded-full bg-purple-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            3
          </span>

          <img
            src={process3}
            alt="Visa Processing"
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Visa Processing
        </h3>

        <p className="text-xs text-gray-500 mt-2 leading-5">
          Expert guidance for smooth visa application.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    {/* Card 4 */}
    <div className="flex items-center">
      <div className="text-center w-44 relative">
        
        <div className="relative w-28 h-28 mx-auto rounded-full bg-orange-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            4
          </span>

          <img
            src={process4}
            alt="Processing Updates"
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Processing Updates
        </h3>

        <p className="text-xs text-gray-500 mt-2 leading-5">
          Stay updated with real-time updates on your application.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    {/* Card 5 */}
    <div className="flex items-center">
      <div className="text-center w-44 relative">
        
        <div className="relative w-28 h-28 mx-auto rounded-full bg-pink-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            5
          </span>

          <img
            src={process5}
            alt="SOP Writing"
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          SOP Writing
        </h3>

        <p className="text-xs text-gray-500 mt-2 leading-5">
          Professional SOPs that highlights your strengths.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    {/* Card 6 */}
    <div className="flex items-center">
      <div className="text-center w-44 relative">
        
        <div className="relative w-28 h-28 mx-auto rounded-full bg-green-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            6
          </span>

          <img
            src={process6}
            alt="Scholarship/Waiver"
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Scholarship/Waiver
        </h3>

        <p className="text-xs text-gray-500 mt-2 leading-5">
          We help you get scholarships and fee waivers.
        </p>
      </div>
    </div>

  </div>
</div>
    
  )
}

export default ProcessSection