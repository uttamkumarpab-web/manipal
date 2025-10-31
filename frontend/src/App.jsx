import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router";
import Hero from "./components/HeroSection";
import Courses from "./components/Courses";
import LearningJourney from "./components/LearningJourney";
import Significance from "./components/Significance";
import AccreditationSection from "./components/AccreditationSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const isPrivacyPage = location.pathname === "/privacy-policy";

  // 🧠 Auto popup on every visit or refresh
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-root font-sans text-gray-800 overflow-x-hidden">
      {/* ✅ Navbar (hidden on privacy policy page) */}
      {!isPrivacyPage && <Navbar />}

      {/* ✅ Main Content */}
      {!isPrivacyPage && (
        <main className="pt-20">
          <section id="home">
            <Hero />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="accreditation">
            <AccreditationSection />
          </section>
          <section id="significance">
            <Significance />
          </section>
          <section id="learningjourney">
            <LearningJourney />
          </section>

          {/* ✅ Footer */}
          <footer className="bg-[#0C1446] text-white text-center py-8 px-4 relative">
            <div className="max-w-6xl mx-auto space-y-4 font-bold">
              <p className="text-sm leading-relaxed">
                <span className="text-yellow-400 font-semibold">Disclaimer:</span>{" "}
                We act as an enquiry service or marketing partner only.
                Manipal University or Online Manipal holds full rights to request
                change or removal of any irrelevant content. Icons or images used
                are illustrative.
              </p>

              <p className="text-sm mt-4">
                © {new Date().getFullYear()} All rights reserved — CP |{" "}
                <Link
                  to="/privacy-policy"
                  className="underline text-yellow-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </footer>
        </main>
      )}

      {/* ✅ Contact Form Popup */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
         <ContactForm onSubmitSuccess={() => setShowModal(false)} />
      </Modal>

      {/* ✅ Privacy Policy Route */}
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* 📞 Floating Call Now Button */}
      {!isPrivacyPage && (
        <a
          href="tel:+919876543210"
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#F97316] text-white font-semibold px-4 py-3 rounded-l-lg shadow-lg hover:bg-[#ea580c] transition-all z-50 flex items-center justify-center"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "translateY(-50%) rotate(180deg)",
          }}
        >
          Call Now
          <span
            style={{
              display: "inline-block",
              transform: "rotate(330deg)",
            }}
          >
            📞
          </span>
        </a>
      )}
    </div>
  );
}
