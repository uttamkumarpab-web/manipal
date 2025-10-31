"use client";
import React, {useState } from "react";
import headerlogo from "../assets/headerlogo.png";
import ContactForm from "./ContactForm";
import { Clock, X } from "lucide-react";

export default function Courses() {
  const [showForm, setShowForm] = useState(false);
  const courses = [
    {
      code: "Online MBA",
      title: "Master of Business Administration",
      duration: "24 months",
      points: ["UGC-entitled online degree", "NAAC A+ rated university"],
    },
    {
      code: "Online MA–JMC",
      title: "MA in Journalism & Mass Communication",
      duration: "24 months",
      points: ["UGC-entitled online degree", "NAAC A+ accredited"],
    },
    {
      code: "Online MCA",
      title: "Master of Computer Applications",
      duration: "24 months",
      points: ["UGC-entitled online degree", "NAAC A+ accredited"],
    },
  ];

  return (
    <section
      className="w-full bg-[#FBF5EF] py-16 flex flex-col items-center"
      id="courses"
    >
      <h2 className="text-3xl font-extrabold text-[#0C1446] text-center mb-12">
        Courses <span className="text-[#F15A29]">Offered</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#F4E9DD] rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <h4 className="text-[#0C1446] text-lg font-bold mb-1">
                {course.code}
              </h4>
              <h3 className="text-2xl font-extrabold text-[#121212] leading-snug mb-3">
                {course.title}
              </h3>

              <div className="flex items-center text-gray-600 mb-3">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-base font-medium">{course.duration}</span>
              </div>

              <ul className="text-gray-800 font-semibold space-y-2 mb-6">
                {course.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              <img
                src={headerlogo}
                alt="Manipal University Jaipur"
                className="w-40 h-auto mb-6"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#F15A29] text-white font-bold px-5 py-2 rounded-md shadow-md hover:bg-[#d94c1f] transition"
              >
                ENQUIRE NOW
              </button>
              {/* Modal */}
              {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                  <div className="relative">
                    {/* Contact Form */}
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
                </div>
              )}
             <button
  onClick={() => (window.location.href = "/")}
  className="text-[#0C1446] font-semibold hover:text-[#F15A29] transition"
>
  VIEW COURSE &gt;
</button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowForm(true)}
         className="mt-12 bg-[#F15A29] text-white font-extrabold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#d94c1f] transition-all"
      >
        Talk To Expert
      </button>
       {/* Modal */}
              {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                  <div className="relative">
                    {/* Contact Form */}
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
                </div>
              )}
    </section>
  );
}
