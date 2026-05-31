import Consultant1 from "@/assets/images/consultants/expertCounsellers/Consultant1.png"
import Consultant2 from "@/assets/images/consultants/expertCounsellers/Consultant2.png"
import Consultant3 from "@/assets/images/consultants/expertCounsellers/Consultant3.png"
import tickIcon from "@/assets/images/consultants/expertCounsellers/TickIcon.png"

function ExpertCounsellors() {
  const counsellors = [
    {
      image: Consultant1,
      name: "Dr. Sarah Chen",
      role: "Senior Academic Advisor",
      description:
        "Ex-Admissions Officer with 15+ years experience in Ivy League placements and research grants.",
      tags: ["STEM", "PhD Programs"],
    },
    {
      image: Consultant2,
      name: "Marcus Thorne",
      role: "Visa & Immigration Lead",
      description:
        "Specializing in Tier 1 and O-1 visa categories for high-skilled professionals and founders.",
      tags: ["Immigration", "Legal"],
    },
    {
      image: Consultant3,
      name: "Elena Rodriguez",
      role: "Career Strategist",
      description:
        "Helping international graduates secure Fortune 500 placements through strategic networking.",
      tags: ["Placement", "Global Tips"],
    },
  ]

  return (
   <div className="w-full min-h-screen bg-[#ececec]  py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {counsellors.map((person, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full max-w-[380px] mx-auto w-full"
          >
            
            <div className="relative h-[400px] w-full overflow-hidden">
              <img 
                src={person.image} 
                alt={person.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

           
            <div className="p-6 flex flex-col flex-grow justify-between bg-white">
              <div>
               
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[#1A56DB] text-xl font-semibold tracking-tight">
                    {person.name}
                  </h3>
                  <img src={tickIcon} className="w-5 h-5 text-[#059669] fill-[#059669] stroke-white" />
                </div>

                
                <p className="text-[#EA580C] text-xs font-medium uppercase tracking-wide mb-4">
                  {person.role}
                </p>

                
                <p className="text-[#4B5563] text-[14px] leading-relaxed mb-6 font-normal">
                  {person.description}
                </p>
              </div>

              
              <div className="flex flex-wrap gap-2 pt-2">
                {person.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-[#EBF5FF] text-[#2563EB] text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  )
}

export default ExpertCounsellors