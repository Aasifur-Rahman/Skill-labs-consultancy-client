import React from 'react'
import ratingStar from '../../../assets/images/ratingStar.png'

function ReviewsSection() {
  return (
    <div className="bg-gray-100 py-10 px-4">
         <p className="text-[10px] text-center sm:text-xs font-bold tracking-[3px] uppercase text-[#2563EB] mb-2">
            Student Stories
          </p>
      <h2 className="text-center text-orange-500 text-2xl font-bold mb-8">
        What our Students say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-black rounded-full"></div>

            <div>
              <h3 className="font-semibold text-sm">Siam Rohman</h3>
              <p className="text-xs text-gray-500">Malaysia 🇲🇾</p>
            </div>
          </div>

         <div className="flex items-center gap-1 mb-3">
  {[...Array(5)].map((_, index) => (
    <img
      key={index}
      src={ratingStar}
      alt="star"
      className="w-5 h-5 object-contain"
    />
  ))}
</div>

          <p className="text-sm text-gray-600">
            Skills made my study abroad journey so smooth and easy, got my visa in 3 weeks.
            YAYAYAYAYAY YAAAAAAA!!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-black rounded-full"></div>

            <div>
              <h3 className="font-semibold text-sm">Siam Rohman</h3>
              <p className="text-xs text-gray-500">Malaysia 🇲🇾</p>
            </div>
          </div>
<div className="flex items-center gap-1 mb-3">
  {[...Array(5)].map((_, index) => (
    <img
      key={index}
      src={ratingStar}
      alt="star"
      className="w-5 h-5 object-contain"
    />
  ))}
</div>

          <p className="text-sm text-gray-600">
            Skills made my study abroad journey so smooth and easy, got my visa in 3 weeks.
            YAYAYAYAYAY YAAAAAAA!!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-black rounded-full"></div>

            <div>
              <h3 className="font-semibold text-sm">Siam Rohman</h3>
              <p className="text-xs text-gray-500">Malaysia 🇲🇾</p>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-3">
  {[...Array(5)].map((_, index) => (
    <img
      key={index}
      src={ratingStar}
      alt="star"
      className="w-5 h-5 object-contain"
    />
  ))}
</div>

          <p className="text-sm text-gray-600">
            Skills made my study abroad journey so smooth and easy, got my visa in 3 weeks.
            YAYAYAYAYAY YAAAAAAA!!
          </p>
        </div>

      </div>
    </div>
  )
}

export default ReviewsSection