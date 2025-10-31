import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import headerlogo from "../assets/headerlogo.png";

function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top - offset <= 0) current = id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sectionIds = ["home", "courses", "accreditation", "significance", "learningjourney"];
  const active = useScrollSpy(sectionIds, 70);

  const links = [
    { to: "home", name: "Home" },
    { to: "courses", name: "Courses" },
    { to: "accreditation", name: "Accreditations" },
    { to: "significance", name: "Significance" },
    { to: "learningjourney", name: "Learning Journey" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto w-full px-4 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer select-none h-full">
          <img
            src={headerlogo}
            alt="Online Manipal"
            className="max-h-[140px] w-auto object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className={`cursor-pointer font-medium ${
                  active === link.to
                    ? "text-[#F97316] font-semibold border-b-2 border-[#F97316]"
                    : "text-gray-700 hover:text-[#F97316]"
                }`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {links.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className={`cursor-pointer font-medium ${
                    active === link.to
                      ? "text-[#F97316] font-semibold"
                      : "text-gray-700 hover:text-[#F97316]"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
