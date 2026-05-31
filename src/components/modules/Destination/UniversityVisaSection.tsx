import { Card } from "@/components/ui/card"
import {
  GraduationCap,
  FileText,
  ShieldCheck,
  Plane,
  CheckCircle2,
} from "lucide-react"

export default function UniversityVisaSection() {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">

        <Card className="rounded-3xl border-0 bg-white p-6 shadow-sm lg:col-span-2">
          
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />

            <h2 className="text-lg font-bold text-blue-600">
              Top Institutions & Estimated Fees
            </h2>
          </div>

         
          <div className="space-y-6">

            
            <div className="flex items-start justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold text-orange-500">
                  University of Melbourne
                </h3>

                <p className="text-sm text-gray-500">
                  Global Rank: #14
                </p>
              </div>

              <p className="text-sm font-medium text-teal-500">
                AUD 35k – 45k <br /> per year
              </p>
            </div>

            
            <div className="flex items-start justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold text-orange-500">
                  Australian National University
                </h3>

                <p className="text-sm text-gray-500">
                  Global Rank: #34
                </p>
              </div>

              <p className="text-sm font-medium text-teal-500">
                AUD 32k – 42k <br /> per year
              </p>
            </div>

          
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-orange-500">
                  University of Sydney
                </h3>

                <p className="text-sm text-gray-500">
                  Global Rank: #19
                </p>
              </div>

              <p className="text-sm font-medium text-teal-500">
                AUD 38k – 50k <br /> per year
              </p>
            </div>
          </div>
        </Card>

       
        <Card className="rounded-3xl border-0 bg-blue-600 p-6 text-white shadow-sm">

          <div className="mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5" />

            <h2 className="text-lg font-bold">
              Visa Process
            </h2>
          </div>

          <div className="space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4" />
              <p>Subclass 500 Student Visa</p>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4" />
              <p>English Proficiency (IELTS/PTE)</p>
            </div>

            <div className="flex items-center gap-3">
              <Plane className="h-4 w-4" />
              <p>GTE (Genuine Temporary Entrant)</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4" />
              <p>OSHC Medical Insurance</p>
            </div>
          </div>

          
          <button className="mt-8 w-full rounded-xl bg-white py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-100">
            DOWNLOAD CHECKLIST
          </button>
        </Card>
      </div>
    </section>
  )
}