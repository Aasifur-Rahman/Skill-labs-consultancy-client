import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-darknavy text-gray-400 px-12 pt-14 pb-6">
  <div className="grid grid-cols-4 gap-10 mb-10">
 

    <div>
      <div className="text-lg font-black text-white mb-0.5"><span className="text-primary">Skills Lab</span></div>
      <div className="text-[11.5px] text-gray-500 font-medium mb-3.5">Consultancy</div>
      <p className="text-[12.5px] text-gray-500 leading-7 mb-5">Your trusted partner for global education and career success.</p>
      <div className="flex gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#1a1a4e] flex items-center justify-center text-[13px] cursor-pointer hover:bg-primary transition-colors">f</div>
        <div className="w-8 h-8 rounded-full bg-[#1a1a4e] flex items-center justify-center text-[13px] cursor-pointer hover:bg-primary transition-colors">w</div>
        <div className="w-8 h-8 rounded-full bg-[#1a1a4e] flex items-center justify-center text-[12px] cursor-pointer hover:bg-primary transition-colors">📷</div>
        <div className="w-8 h-8 rounded-full bg-[#1a1a4e] flex items-center justify-center text-[12px] cursor-pointer hover:bg-primary transition-colors">🐦</div>
        <div className="w-8 h-8 rounded-full bg-[#1a1a4e] flex items-center justify-center text-[13px] cursor-pointer hover:bg-primary transition-colors">in</div>
      </div>
    </div>
 

    <div>
      <div className="text-[13px] font-extrabold text-white uppercase tracking-wider mb-4">Quick Links</div>
      <div className="flex flex-col gap-2">
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Home</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">About Us</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Our Services</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Consultants</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Training</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Contact</a>
      </div>
    </div>
 
    <div>
      <div className="text-[13px] font-extrabold text-white uppercase tracking-wider mb-4">Our Services</div>
      <div className="flex flex-col gap-2">
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Study Abroad</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Work Abroad</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Visa Assistance</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">Career Counseling</a>
        <a href="#" className="text-[12.5px] text-gray-500 hover:text-white transition-colors">SOP Writing</a>
      </div>
    </div>

    <div>
      <div className="text-[13px] font-extrabold text-white uppercase tracking-wider mb-4">Contact Info</div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-start gap-2 text-[12.5px] text-gray-500 leading-relaxed">
          <span>📞</span> +880 1234 567890
        </div>
        <div className="flex items-start gap-2 text-[12.5px] text-gray-500 leading-relaxed">
          <span>✉</span> info@skillslab.com
        </div>
        <div className="flex items-start gap-2 text-[12.5px] text-gray-500 leading-relaxed">
          <span>🏠</span> House 12, Road 5, Dhanmondi,<br />Dhaka 1205, Bangladesh.
        </div>
      </div>
    </div>
 
  </div>
 
  <div className="border-t border-[#1e1e4e] pt-5 text-center text-[12px] text-gray-600">
    © 2024 Skills Lab Consultancy. All rights reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer