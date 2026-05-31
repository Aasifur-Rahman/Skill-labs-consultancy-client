import {
  Card,
  CardContent,
} from "@/components/ui/card";

const experts = [
  {
    name: "Ahmed Al-Sayed",
    role: "MANAGING DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    description:
      "Expert in UK and European admission strategies with 15 years experience.",
  },
  {
    name: "Sarah Rohman",
    role: "SENIOR ADMISSIONS LEAD",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    description:
      "Specializing in North American university placements and scholarship guidance.",
  },
  {
    name: "Tanvir Ahmed",
    role: "VISA SPECIALIST",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    description:
      "Deep expertise in Australian and Canadian visa compliance and documentation.",
  },
  {
    name: "Laila Hossain",
    role: "HEAD OF TRAINING",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    description:
      "Certified IELTS trainer dedicated to preparing students for language excellence.",
  },
];

function ExpertsSection() {
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] leading-none font-bold text-[#ff6b00]">
            Meet Our Experts
          </h2>

          <p className="text-[#666] text-[13px] mt-4 max-w-[620px] mx-auto leading-[22px]">
            Behind every success story is a dedicated consultant. Our team
            combines decades of experience in international education.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="rounded-[10px] overflow-hidden border border-[#e7e7e7] bg-white shadow-none p-0"
            >
              {/* image */}
              <div className="h-[270px] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content */}
              <CardContent className="p-[18px]">
                <h3 className="text-[15px] font-semibold text-[#111] leading-none">
                  {expert.name}
                </h3>

                <p className="text-[10px] font-bold tracking-[1.4px] text-[#1e4ed8] uppercase mt-3">
                  {expert.role}
                </p>

                <p className="text-[12px] text-[#666] leading-[20px] mt-4">
                  {expert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertsSection