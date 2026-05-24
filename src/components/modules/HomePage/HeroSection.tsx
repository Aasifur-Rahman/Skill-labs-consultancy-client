/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown, UserRound } from "lucide-react";

import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HeroSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="w-full min-h-screen  bg-[#f5f7fb] flex items-center justify-center">
      <div
        className="relative  w-full min-h-screen  md:h-0 lg:min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580537782437-8d6a0ca13de6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute  inset-0 bg-white/55 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative mt-14 container mx-auto z-10 grid grid-cols-1 lg:grid-cols-2  gap-10 h-full p-6 md:p-14">
          {/* Left Content */}
          <div className="flex w-full items-start  flex-col justify-center">
            <h1 className="text-[#2563ff]  text-5xl text-center lg:text-start md:text-6xl font-extrabold leading-[1.20]">
              Start Your
              <br />
              Global Career
              <br />
              Journey Today
            </h1>

            <p className="mt-8 text-[#1f2937] text-lg md:text-xl max-w-xl leading-relaxed ">
              From choosing the right program to securing your visa, we support
              you at every step of your journey.
            </p>

            {/* Buttons */}
            <div className="flex flex-col mx-auto lg:mx-0 md:mx-0 sm:flex-row gap-5 mt-10">
              <Button className="p-8 bg-btn-gradient hover:opacity-90 transition-opacity ease-in-out rounded-2xl font-semibold shadow-md ">
                Get Free Consultation
              </Button>
              <Button className="bg-white p-8 border border-[#f59e0b] hover:bg-orange-50 transition-all duration-300 text-[#1f2937]  rounded-2xl  font-semibold shadow-md">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex w-full items-center  justify-end ">
            <div className="w-full max-w-[520px] bg-white rounded-[32px] shadow-2xl p-8 md:p-10">
              <h2 className="text-4xl font-bold text-[#1f2a44] mb-10">
                Book a consultant
              </h2>

              {/* Name */}
              <div className="mb-7">
                <label className="block text-[#374151] font-medium mb-3">
                  Name
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full outline-none text-gray-700 bg-transparent"
                  />

                  <UserRound className="text-[#14b8a6]" size={22} />
                </div>
              </div>

              {/* Services */}
              <div className="mb-7">
                <label className="block text-[#374151] font-medium mb-3">
                  Services
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                  <select className="w-full outline-none text-gray-700 bg-transparent appearance-none">
                    <option>Select a service</option>
                    <option>Student Visa</option>
                    <option>Career Consultation</option>
                    <option>University Admission</option>
                  </select>

                  <ChevronDown className="text-[#14b8a6]" size={22} />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="mb-10">
                <label className="block text-[#374151] font-medium mb-3">
                  Preferred Time
                </label>

                <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:border-[#2563ff] transition-all duration-300">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: any) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select a date"
                    className="w-full outline-none text-gray-700 bg-transparent"
                  />

                  <CalendarDays
                    className="text-[#14b8a6] flex-shrink-0"
                    size={22}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#ff6b00] hover:bg-[#ea580c] transition-all duration-300 text-white py-4 rounded-2xl text-2xl font-semibold shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
