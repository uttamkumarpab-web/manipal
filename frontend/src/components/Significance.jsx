"use client";
import React, {useState} from "react";
import ContactForm from "./ContactForm";
import { Sparkles, CreditCard, Globe2, Handshake, X } from "lucide-react";

export default function Significance() {
  const [showForm, setShowForm] = useState(false);
  const features = [
    {
      icon: <Sparkles className="w-12 h-12 text-[#efdbd4]" />,
      title: "Accredited & Recognised",
      description:
        "The university has UGC recognition and is approved by WES, NAAC, and AICTE...",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-[#efdbd4]" />,
      title: "Zero cost EMIs",
      description:
        "The university provides flexible payment schedules and simple financing alternatives so you may pursue a high-quality education...",
    },
    {
      icon: <Globe2 className="w-12 h-12 text-[#efdbd4]" />,
      title: "Strong alumni network",
      description:
        "As a member of the distinguished alumni network, you will have access to valuable interactions and opportunities...",
    },
    {
      icon: <Handshake className="w-12 h-12 text-[#efdbd4]" />,
      title: "Career Support",
      description:
        "The job advisers at the university will assist you in creating excellent resumes and preparing for interviews...",
    },
  ];

  const handleFormSuccess = () => {
    // ✅ Close the form
    setShowForm(false);

    // ✅ Trigger brochure download
    const brochureUrl = "/brochure/OnlineMBA-Brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "OnlineMBA-Brochure.pdf";
    link.click();
  };

  return (
    <section className="w-full bg-[#FBF5EF] py-20 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-[#0C1446] text-center mb-12">
        The <span className="text-[#F15A29]">Significance</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4E9DD] rounded-3xl shadow-md p-8 flex flex-col items-start hover:shadow-lg transition-all"
          >
            <div className="mb-4 bg-gradient-to-br from-[#F15A29] to-[#FF6B3D] p-3 rounded-2xl text-white shadow-sm">
              {item.icon}
            </div>
            <h3 className="text-xl font-extrabold text-[#0C1446] mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-[#1A1A1A] text-[15px] font-medium leading-relaxed opacity-90">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="mt-12 bg-[#F15A29] text-white font-extrabold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#d94c1f] transition-all"
      >
        Download Brochure
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
              <ContactForm onSubmitSuccess={handleFormSuccess} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
