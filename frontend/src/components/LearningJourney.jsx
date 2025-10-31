"use client";
import React, { useState } from "react";
import {
  GraduationCap,
  BookCopy,
  Network,
  LaptopMinimalCheck,
  X,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function LearningJourney() {
  const [showForm, setShowForm] = useState(false);

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#efdbd4]" />,
      title: "Empowering Higher Studies",
    },
    {
      icon: <BookCopy className="w-12 h-12 text-[#efdbd4]" />,
      title: "Learn with Flexibility",
    },
    {
      icon: <Network className="w-12 h-12 text-[#efdbd4]" />,
      title: "Top-notch Faculty & Mentors",
    },
    {
      icon: <LaptopMinimalCheck className="w-12 h-12 text-[#efdbd4]" />,
      title: "Advanced Digital Learning Platform",
    },
  ];

  return (
    <section className="w-full bg-[#FBF5EF] py-20 flex flex-col items-center relative">
      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-[#0C1446] text-center mb-12">
        Seamless learning <span className="text-[#F15A29]">journey</span>
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4E9DD] rounded-3xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-all"
          >
            {/* Icon with gradient background */}
            <div className="mb-5 bg-gradient-to-br from-[#F15A29] to-[#FF6B3D] p-3 rounded-2xl text-white shadow-sm">
              {item.icon}
            </div>

            {/* Title */}
            <p className="text-lg font-extrabold text-[#0C1446] text-center leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mt-12 bg-[#F15A29] text-white font-extrabold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#d94c1f] transition-all"
      >
        Fees EMI Enquiry
      </button>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Contact Form Component */}
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
}
