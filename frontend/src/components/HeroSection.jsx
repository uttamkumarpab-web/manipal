import React from "react";
import hero from "../assets/hero.png";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay for subtle tint */}
      <div className="absolute inset-0 bg-[#fef6f2]/50"></div>

      {/* Left Text Content */}
      <div className="relative z-10 max-w-2xl px-6 md:px-12 py-16 md:py-24 text-left">
        <div className="bg-[#F97316] inline-block px-4 py-2 rounded-sm mb-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Industry Leading <br /> Online MBA Degree
          </h2>
        </div>

        <p className="text-[#111827] font-extrabold text-2xl md:text-3xl leading-tight">
          Online MBA, M.COM, MCA, <br /> MA–JMC, BCA, BBA, B.COM
        </p>
      </div>

      {/* Enquiry Form */}
       <div className="relative z-10 md:mr-8 mt-12 md:mt-24 translate-y-50 translate-x-50 transition-all duration-300">
<ContactForm />
</div>
    </section>
  );
}
