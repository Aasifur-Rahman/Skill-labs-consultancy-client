function DestinationCTA() {
  return (
    <section className="w-full   bg-[#f3f3f3]">
      <div className="max-w-full mx-auto">
        
        <div className="relative overflow-hidden rounded-[2px] bg-gradient-to-r from-[#1f5eff] to-[#ff7a00]  py-7">
          
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            
            <h2 className="text-white text-[20px] sm:text-[28px] font-bold leading-none">
              Ready to start your journey?
            </h2>

            <p className="mt-3 text-white/80 text-[11px] sm:text-[13px]">
              Book a free consultation with our experts today!
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              
              <button className="bg-[#2f5bff] hover:bg-[#244df0] text-white text-[11px] sm:text-[12px] font-semibold px-7 py-3 rounded-[4px] shadow-lg transition-all duration-300">
                BOOK A FREE CONSULTATION
              </button>

              <button className="bg-[#9f4b17] hover:bg-[#8d4213] text-white text-[11px] sm:text-[12px] font-semibold px-7 py-3 rounded-[4px] shadow-lg transition-all duration-300">
                VIEW ALL DESTINATIONS
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationCTA