import luminedgeLogo from '../../../assets/images/brand/Luminage 1.png'
import britishCouncilLogo from '../../../assets/images/brand/britishCouncil.png'
import edvoyLogo from '../../../assets/images/brand/edvoy 1.png'
import idpLogo from '../../../assets/images/brand/IDP 1.png'
import ieltsLogo from '../../../assets/images/brand/IELTS 1.png'

function BrandSection() {
  return (
  <div className="bg-blue-50 py-6 px-4 border-y border-gray-200">

  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-16">

    <p className="text-base md:text-lg text-gray-700 font-semibold whitespace-nowrap">
      Trusted by 500+ students
    </p>

    <img
      src={luminedgeLogo}
      alt="Luminedge"
      className="h-14 md:h-16 object-contain"
    />

    <img
      src={britishCouncilLogo}
      alt="British Council"
      className="h-14 md:h-16 object-contain"
    />

    <img
      src={edvoyLogo}
      alt="Edvoy"
      className="h-14 md:h-16 object-contain"
    />

    <img
      src={idpLogo}
      alt="IDP"
      className="h-14 md:h-16 object-contain"
    />

    <img
      src={ieltsLogo}
      alt="IELTS"
      className="h-14 md:h-16 object-contain"
    />

  </div>
</div>
  )
}

export default BrandSection