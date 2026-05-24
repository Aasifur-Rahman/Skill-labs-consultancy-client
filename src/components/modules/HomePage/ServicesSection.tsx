import service1 from '../../../assets/images/service/service1.png'
import service2 from '../../../assets/images/service/service2.png'
import service3 from '../../../assets/images/service/service3.png'
import service4 from '../../../assets/images/service/service4.png'
import service5 from '../../../assets/images/service/service5.png'
import service6 from '../../../assets/images/service/service6.png'

function ServicesSection() {
  return (
    <div>
        <div className="bg-gray-100 py-12 px-4">

  <p className="text-center text-blue-600 font-semibold uppercase">
    What We Offer
  </p>

  <h2 className="text-center text-4xl font-bold text-orange-500 mb-12">
    Our Core Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <img
          src={service1}
          alt="School Programs"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-700">
          School Programs
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          International school admission support for your bright future.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <img
          src={service2}
          alt="Bachelor Programs"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-700">
          Bachelor Programs
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Top University admission support for bachelor degree programs.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
        <img
          src={service3}
          alt="Masters Programs"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-700">
          Masters Programs
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Find the best masters program and secure your admission.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
        <img
          src={service4}
          alt="Vocational Training"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-700">
          Vocational Training
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Career focused training programs for in-demand skills.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
        <img
          src={service5}
          alt="Worker Programs"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-700">
          Worker Programs
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Work abroad opportunities with complete placement support.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
        <img
          src={service6}
          alt="PhD Programs"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-700">
          PhD Programs
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Research opportunities and scholarships for PhD programs.
        </p>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default ServicesSection