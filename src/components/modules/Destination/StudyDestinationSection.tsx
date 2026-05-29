import { Card } from "@/components/ui/card"
import { MapPin, GraduationCap } from "lucide-react"
import australiaDestinationImage from "../../../assets/images/destination/australia-destination.png"

function StudyDestinationSection() {
  return (
    <div>
        <section className="w-full bg-[#f3f3f3]  px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden border-0 shadow-none bg-[#f3f3f3]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
           
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14">
              
              <p className="text-xs font-semibold uppercase tracking-[3px] text-blue-500">
                Oceania Region
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-orange-500 sm:text-4xl">
                Study in Australia
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Australia offers a world-class education system with a lifestyle
                that is second to none. Home to top universities, it provides a
                perfect blend of academic excellence and professional networking.
              </p>

             
              <div className="mt-8 grid grid-cols-2 gap-4">
                
                <div className="rounded-2xl border bg-gray-50 p-5">
                  <MapPin className="mb-3 h-6 w-6 text-teal-500" />

                  <p className="text-sm text-gray-500">
                    Top Tier Universities
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    43+
                  </h3>
                </div>

                <div className="rounded-2xl border bg-gray-50 p-5">
                  <GraduationCap className="mb-3 h-6 w-6 text-teal-500" />

                  <p className="text-sm text-gray-500">
                    Annual Openings
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    1,250+
                  </h3>
                </div>
              </div>
            </div>

           
            <div className="relative min-h-[320px] sm:min-h-[450px] lg:min-h-full">
              <img
                src={australiaDestinationImage}
                alt="Australia"
                className="object-cover"
              />

              
              <div className="absolute bottom-5 left-5 rounded-2xl p-4 shadow-2xl backdrop-blur">
               

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default StudyDestinationSection