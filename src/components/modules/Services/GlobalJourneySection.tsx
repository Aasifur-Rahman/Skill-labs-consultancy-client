import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import globalJourneyImage from '../../../assets/images/aboutUs/globalJourneyImage.png'

function GlobalJourneySection() {
  return (
    <div>
         <section className="w-full bg-[#ececec]  py-10 md:px-6 lg:px-8">
      <Card className="overflow-hidden ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="flex flex-col justify-center  p-6 sm:p-8 md:p-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Ready to start your{" "}
                <span className="text-blue-600">global journey?</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                Join 500+ successful students and workers who have achieved
                their dreams with SBL.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="h-12 rounded-xl bg-blue-600 px-6 text-sm font-semibold hover:bg-blue-700">
                  Book a Consultation
                </Button>

                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-blue-600 px-6 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>

         
          <div className="relative min-h-[280px] sm:min-h-[400px] lg:min-h-full">
            <img
              src={globalJourneyImage}
              alt="okk"
              className="object-cover"
            />
          </div>
        </div>
      </Card>
    </section>
    </div>
  )
}

export default GlobalJourneySection