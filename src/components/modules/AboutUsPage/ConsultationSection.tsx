import React from 'react'

function ConsultationSection() {
  return (
    <div>
         <section className="bg-[#f3f3f3] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-white rounded-[16px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">
          <div className="bg-[#08152f] p-10 flex flex-col justify-center min-h-[380px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#2563eb,transparent_60%)]" />

            <div className="relative z-10">
              <h2 className="text-white text-[46px] font-bold leading-[52px]">
                Ready to Start
                <br />
                Your
                <br />
                Journey?
              </h2>

              <p className="text-white/70 text-[14px] leading-[24px] mt-6 max-w-[320px]">
                Whether you're aiming to study abroad or need expert guidance
                on your educational pathway.
              </p>

              <div className="mt-8 space-y-3 text-white/80 text-[14px]">
                <p>✓ Personalized Profile Assessment</p>
                <p>✓ Overseas University Shortlisting</p>
                <p>✓ Visa Strategy Workshop</p>
              </div>
            </div>
          </div>

         
          <div className="p-10 flex items-center">
            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] uppercase text-[#777] font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase text-[#777] font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="text-[11px] uppercase text-[#777] font-medium">
                  Interested Country
                </label>

                <select className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none bg-white">
                  <option>Select a Destination</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>Australia</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="text-[11px] uppercase text-[#777] font-medium">
                  Message (Optional)
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your educational background..."
                  className="w-full mt-2 rounded-md border border-[#ddd] px-4 py-3 text-sm outline-none resize-none"
                />
              </div>

              <button className="mt-7 bg-[#f97316] hover:bg-[#ea580c] transition-colors text-white h-[46px] px-10 rounded-full text-sm font-medium">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ConsultationSection