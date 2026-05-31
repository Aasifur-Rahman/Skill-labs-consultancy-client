function MalaysiaInfoCards() {
  return (
    <section className="w-full bg-[#f3f3f3] py-8 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">

        <div className=" p-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            
            <div className="bg-[#f8f8f8] border border-[#ececec] rounded-[4px] p-4">
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-[#ff5b5b]"></div>

                <h3 className="text-[13px] font-semibold text-[#ff5b5b]">
                  Deadlines & Slots
                </h3>
              </div>

              <div className="mt-5">
                <p className="text-[8px] uppercase tracking-[1px] text-[#999] font-semibold">
                  September Intake
                </p>

                <h4 className="mt-1 text-[14px] font-semibold text-[#ff5b5b]">
                  Closed
                </h4>
              </div>

              <div className="mt-4 bg-white border border-[#ececec] rounded-[4px] px-3 py-3">
                <p className="text-[8px] uppercase tracking-[1px] text-[#999] font-semibold">
                  October Intake
                </p>

                <h4 className="mt-1 text-[14px] font-semibold text-[#333]">
                  45 Spots Remaining
                </h4>
              </div>
            </div>

           
            <div className="bg-[#f8f8f8] border border-[#ececec] rounded-[4px] p-4">
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-[#2b9cf0]"></div>

                <h3 className="text-[13px] font-semibold text-[#2b9cf0]">
                  Top Institutes
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                
                <div>
                  <h4 className="text-[12px] font-medium text-[#ff6b00]">
                    University of Malaya (UM)
                  </h4>

                  <p className="mt-1 text-[10px] text-[#999]">
                    MY Rank: 1st · 70+ Global
                  </p>
                </div>

                <div>
                  <h4 className="text-[12px] font-medium text-[#ff6b00]">
                    Monash University Malaysia
                  </h4>

                  <p className="mt-1 text-[10px] text-[#999]">
                    120+ Rank · Safe & Modern
                  </p>
                </div>
              </div>
            </div>

            
            <div className="bg-[#2563eb] rounded-[4px] p-4">
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-white"></div>

                <h3 className="text-[13px] font-semibold text-white">
                  Visa Process
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>

                  <p className="text-[11px] text-white/95">
                    EMGS Approval Letter (VAL)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>

                  <p className="text-[11px] text-white/95">
                    Single Entry Visa (SEV)
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 bg-white text-[#2563eb] text-[10px] font-semibold py-3 rounded-[3px] hover:bg-gray-100 transition-all duration-300">
                APPLY FOR MALAYSIA
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MalaysiaInfoCards