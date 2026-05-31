import React from "react";
import {
  Award,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function ServicesForStudent() {
  return (
    <section className="bg-[#ececec] px-4 py-14 sm:py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          <h3 className="text-[#F97316] text-[18px] sm:text-[20px] md:text-[22px] font-bold whitespace-nowrap">
            For Students
          </h3>

          <div className="w-full h-[1px] bg-[#d1d5db]" />
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
         
          <Card className="relative overflow-hidden border-0 rounded-[14px] h-[260px] shadow-none">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="School Program"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <CardContent className="absolute bottom-0 left-0 p-6 sm:p-7">
              <h2 className="text-white text-[26px] sm:text-[30px] font-bold">
                School Program
              </h2>

              <p className="text-white/80 text-[13px] leading-[22px] mt-2 max-w-[500px]">
                Early path-finding and foundational support for secondary
                education placement abroad.
              </p>
            </CardContent>
          </Card>

         
          <Card className="bg-[#2563EB] border-0 rounded-[14px] shadow-none min-h-[260px]">
            <CardContent className="p-7 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                <Award className="text-[#ff7a1a]" size={18} />
              </div>

              <div>
                <h2 className="text-white text-[30px] font-bold">PHD</h2>

                <p className="text-white/80 text-[13px] leading-[22px] mt-4">
                  Advanced research mentorship and thesis proposal assistance
                  for doctoral candidates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
         
          <Card className="bg-[#f5f5f5] border border-[#d9d9d9] rounded-[14px] shadow-none">
            <CardContent className="p-7">
              <div className="w-10 h-10 rounded-md bg-[#dbeafe] flex items-center justify-center">
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.241 18.439L4.24097 14.639V8.63896L0.240967 6.43896L11.241 0.438965L22.241 6.43896V14.439H20.241V7.53896L18.241 8.63896V14.639L11.241 18.439ZM11.241 10.139L18.091 6.43896L11.241 2.73896L4.39097 6.43896L11.241 10.139ZM11.241 16.164L16.241 13.464V9.68896L11.241 12.439L6.24097 9.68896V13.464L11.241 16.164Z" fill="#0D9488" stroke="black" stroke-linejoin="bevel"/>
</svg>

              </div>

              <h3 className="text-[#2563EB] text-[24px] font-bold mt-6">
                Bachelor Programs
              </h3>

              <p className="text-[#666] text-[13px] leading-[22px] mt-4">
                Comprehensive guidance for undergraduate admissions across top
                global universities.
              </p>

              <Button
                variant="ghost"
                className="mt-8 p-0 h-auto hover:bg-transparent text-[#2563EB] text-[11px] uppercase tracking-[1px] font-semibold"
              >
                Explore Programs →
              </Button>
            </CardContent>
          </Card>

         
          <Card className="bg-[#f5f5f5] border border-[#d9d9d9] rounded-[14px] shadow-none">
            <CardContent className="p-7">
              <div className="w-10 h-10 rounded-md bg-[#dbeafe] flex items-center justify-center">
             <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 16C5.95 16 5.47917 15.8042 5.0875 15.4125C4.69583 15.0208 4.5 14.55 4.5 14V11H7.5V8.75C6.91667 8.71667 6.3625 8.5875 5.8375 8.3625C5.3125 8.1375 4.83333 7.8 4.4 7.35V6.25H3.25L0 3C0.6 2.23333 1.34167 1.69167 2.225 1.375C3.10833 1.05833 4 0.9 4.9 0.9C5.35 0.9 5.7875 0.933333 6.2125 1C6.6375 1.06667 7.06667 1.19167 7.5 1.375V0H19.5V13C19.5 13.8333 19.2083 14.5417 18.625 15.125C18.0417 15.7083 17.3333 16 16.5 16H6.5ZM9.5 11H15.5V13C15.5 13.2833 15.5958 13.5208 15.7875 13.7125C15.9792 13.9042 16.2167 14 16.5 14C16.7833 14 17.0208 13.9042 17.2125 13.7125C17.4042 13.5208 17.5 13.2833 17.5 13V2H9.5V2.6L15.5 8.6V10H14.1L11.25 7.15L11.05 7.35C10.8167 7.58333 10.5708 7.79167 10.3125 7.975C10.0542 8.15833 9.78333 8.3 9.5 8.4V11ZM4.1 4.25H6.4V6.4C6.6 6.53333 6.80833 6.625 7.025 6.675C7.24167 6.725 7.46667 6.75 7.7 6.75C8.08333 6.75 8.42917 6.69167 8.7375 6.575C9.04583 6.45833 9.35 6.25 9.65 5.95L9.85 5.75L8.45 4.35C7.96667 3.86667 7.425 3.50417 6.825 3.2625C6.225 3.02083 5.58333 2.9 4.9 2.9C4.56667 2.9 4.25 2.925 3.95 2.975C3.65 3.025 3.35 3.1 3.05 3.2L4.1 4.25ZM13.5 13H6.5V14H13.65C13.6 13.85 13.5625 13.6917 13.5375 13.525C13.5125 13.3583 13.5 13.1833 13.5 13ZM6.5 14C6.5 13.85 6.5 13.6917 6.5 13.525C6.5 13.3583 6.5 13.1833 6.5 13C6.5 13.1667 6.5 13.3333 6.5 13.5C6.5 13.6667 6.5 13.8333 6.5 14Z" fill="#0D9488"/>
</svg>

              </div>

              <h3 className="text-[#2563EB] text-[24px] font-bold mt-6">
                Masters Program
              </h3>

              <p className="text-[#666] text-[13px] leading-[22px] mt-4">
                Specialized strategic planning for postgraduate studies and MBA
                placements.
              </p>

              <Button
                variant="ghost"
                className="mt-8 p-0 h-auto hover:bg-transparent text-[#2563EB] text-[11px] uppercase tracking-[1px] font-semibold"
              >
                View Specializations →
              </Button>
            </CardContent>
          </Card>

         
          <Card className="bg-[#f5f5f5] border border-[#d9d9d9] rounded-[14px] shadow-none">
            <CardContent className="p-7">
              <div className="w-10 h-10 rounded-md bg-[#dbeafe] flex items-center justify-center">
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4C8.45 4 7.97917 3.80417 7.5875 3.4125C7.19583 3.02083 7 2.55 7 2C7 1.45 7.19583 0.979167 7.5875 0.5875C7.97917 0.195833 8.45 0 9 0C9.55 0 10.0208 0.195833 10.4125 0.5875C10.8042 0.979167 11 1.45 11 2C11 2.55 10.8042 3.02083 10.4125 3.4125C10.0208 3.80417 9.55 4 9 4ZM6 19V7C5 6.91667 3.98333 6.79167 2.95 6.625C1.91667 6.45833 0.933333 6.25 0 6L0.5 4C1.8 4.35 3.18333 4.60417 4.65 4.7625C6.11667 4.92083 7.56667 5 9 5C10.4333 5 11.8833 4.92083 13.35 4.7625C14.8167 4.60417 16.2 4.35 17.5 4L18 6C17.0667 6.25 16.0833 6.45833 15.05 6.625C14.0167 6.79167 13 6.91667 12 7V19H10V13H8V19H6ZM5 24C4.71667 24 4.47917 23.9042 4.2875 23.7125C4.09583 23.5208 4 23.2833 4 23C4 22.7167 4.09583 22.4792 4.2875 22.2875C4.47917 22.0958 4.71667 22 5 22C5.28333 22 5.52083 22.0958 5.7125 22.2875C5.90417 22.4792 6 22.7167 6 23C6 23.2833 5.90417 23.5208 5.7125 23.7125C5.52083 23.9042 5.28333 24 5 24ZM9 24C8.71667 24 8.47917 23.9042 8.2875 23.7125C8.09583 23.5208 8 23.2833 8 23C8 22.7167 8.09583 22.4792 8.2875 22.2875C8.47917 22.0958 8.71667 22 9 22C9.28333 22 9.52083 22.0958 9.7125 22.2875C9.90417 22.4792 10 22.7167 10 23C10 23.2833 9.90417 23.5208 9.7125 23.7125C9.52083 23.9042 9.28333 24 9 24ZM13 24C12.7167 24 12.4792 23.9042 12.2875 23.7125C12.0958 23.5208 12 23.2833 12 23C12 22.7167 12.0958 22.4792 12.2875 22.2875C12.4792 22.0958 12.7167 22 13 22C13.2833 22 13.5208 22.0958 13.7125 22.2875C13.9042 22.4792 14 22.7167 14 23C14 23.2833 13.9042 23.5208 13.7125 23.7125C13.5208 23.9042 13.2833 24 13 24Z" fill="#0D9488"/>
</svg>
              </div>

              <h3 className="text-[#2563EB] text-[24px] leading-[32px] font-bold mt-6">
                Vocational/technical program
              </h3>

              <p className="text-[#666] text-[13px] leading-[22px] mt-4">
                Direct paths to industry-recognized technical certifications and
                skill-based learning.
              </p>

              <Button
                variant="ghost"
                className="mt-8 p-0 h-auto hover:bg-transparent text-[#2563EB] text-[11px] uppercase tracking-[1px] font-semibold"
              >
                Skill Pathways →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ServicesForStudent;