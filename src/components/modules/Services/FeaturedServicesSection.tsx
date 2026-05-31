import React from "react";

function FeaturedServicesSection() {
  return (
    <section className="bg-[#ececec] py-14 sm:py-16 md:py-20 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-[#2563EB] text-[10px] sm:text-[11px] md:text-[12px] tracking-[2px] uppercase font-medium">
          Expert Guidance
        </p>

        <h2 className="mt-3 sm:mt-4 text-[30px] sm:text-[40px] md:text-[52px] leading-tight md:leading-none font-bold text-[#111]">
          Our Featured{" "}
          <span className="text-[#F97316]">Services</span>
        </h2>

        <p className="max-w-[600px] mx-auto mt-4 sm:mt-5 md:mt-6 text-[#666] text-[13px] sm:text-[14px] md:text-[15px] leading-[24px] sm:leading-[26px] md:leading-[28px] px-2">
          Comprehensive support for students and professionals aiming for
          global excellence through tailored educational and career pathways.
        </p>
      </div>
    </section>
  );
}

export default FeaturedServicesSection;