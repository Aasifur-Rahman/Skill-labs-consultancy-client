import React, { useState } from 'react';
import { 
  Clock, 
  Globe, 
  User, 
  Mail, 
  Layers, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: 'Academic Admissions',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4 sm:p-8 lg:p-16 font-sans">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
       
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            Reserve Your Private Consultation
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed mb-10 max-w-xl">
            Our primary consultations are designed to provide a comprehensive roadmap for your journey. 
            Select your preferred consultant or service area.
          </p>

         
          <div className="space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#BCE2DE] flex items-center justify-center text-[#065F46]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111827]">Flexible Scheduling</h4>
                <p className="text-sm text-[#6B7280]">Appointments available across all global timezones.</p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#BCE2DE] flex items-center justify-center text-[#065F46]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111827]">Multilingual Support</h4>
                <p className="text-sm text-[#6B7280]">Experts fluent in English, Mandarin, Spanish, and Arabic.</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl shadow-gray-200/50 p-6 sm:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      type="text"
                      placeholder="full name"
                      className="w-full bg-[#F3F4F6] text-[#111827] text-sm rounded-lg pl-10 pr-4 py-3 placeholder-[#9CA3AF] border-0 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#F3F4F6] text-[#111827] text-sm rounded-lg pl-10 pr-4 py-3 placeholder-[#9CA3AF] border-0 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>

             
              <div>
                <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                  Service Type
                </label>
                <div className="relative">
                  <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
                  <select
                    className="w-full bg-[#F3F4F6] text-[#111827] text-sm rounded-lg pl-10 pr-10 py-3 appearance-none border-0 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all cursor-pointer"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    <option value="Academic Admissions">Academic Admissions</option>
                    <option value="Visa Consultation">Visa & Immigration Consulting</option>
                    <option value="Career Strategy">Career Strategy Session</option>
                  </select>
                  {/* Custom Arrow Indicator */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#4B5563]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
                    <input
                      type="date"
                      className="w-full bg-[#F3F4F6] text-[#111827] text-sm rounded-lg pl-10 pr-4 py-3 border-0 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
                    <input
                      type="time"
                      className="w-full bg-[#F3F4F6] text-[#111827] text-sm rounded-lg pl-10 pr-4 py-3 border-0 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>

              
              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-xl py-4 px-6 flex items-center justify-center gap-2 transition-colors duration-200 mt-2 shadow-lg shadow-blue-500/20"
              >
                Confirm Booking Request
                <ArrowRight className="w-4 h-4" />
              </button>

              
              <p className="text-center text-[11px] text-[#6B7280] mt-4 font-normal">
                Our team will contact you within 24 hours to confirm your consultation.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}