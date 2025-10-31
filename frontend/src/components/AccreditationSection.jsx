import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ugc from "../assets/ugc.png";
import aicte from "../assets/aicte.png";
import icas from "../assets/icas.png";
import ices from "../assets/ices.png";
import naac from "../assets/naac.png";
import wes from "../assets/wes.png";
import iqas from "../assets/iqas.png";

export default function AccreditationSection() {
  const cards = [
    { logo: wes, title: "World Education Services (WES)" },
    { logo: icas, title: "International Credential Assessment Service of Canada" },
    { logo: ices, title: "International Credential Evaluation Service (ICES)" },
    { logo: ugc, title: "University Grants Commission (UGC)" },
    { logo: naac, title: "National Assessment and Accreditation Council (NAAC)" },
    { logo: iqas, title: "International Qualifications Assessment Service (IQAS)" },
    { logo: aicte, title: "All India Council for Technical Education (AICTE)" },
  ];

  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.offsetWidth;
      const scrollAmount = containerWidth * 0.9;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 bg-[#FBF5EF] overflow-hidden flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C1446] text-center mb-12">
        Recognised <span className="text-[#F15A29]">&amp; Accredited</span>
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#F15A29] hover:bg-[#d94c1f] text-white p-3 rounded-full shadow-lg z-20"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F15A29] hover:bg-[#d94c1f] text-white p-3 rounded-full shadow-lg z-20"
      >
        <ChevronRight />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto scroll-smooth hide-scrollbar px-8 space-x-8 justify-start max-w-6xl"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#F4E9DD] rounded-3xl shadow-md w-[270px] h-[320px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F15A29] to-[#FF6B3D] flex items-center justify-center mb-6 shadow-md">
              <img
                src={card.logo}
                alt={card.title}
                className="w-20 h-20 object-contain bg-white rounded-full p-2"
              />
            </div>
            <p className="text-[#0C1446] font-semibold text-sm md:text-base px-4 leading-snug">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar CSS */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          @media (max-width: 1024px) {
            .hide-scrollbar > div {
              min-width: 230px;
              height: 280px;
            }
          }

          @media (max-width: 640px) {
            .hide-scrollbar > div {
              min-width: 220px;
              height: 260px;
            }
          }
        `}
      </style>
    </section>
  );
}
