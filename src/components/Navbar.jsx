import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("ABOUT");
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", id: "about" },
    { label: "OUR TRAINING", id: "training" },
    { label: "TIMETABLE", id: "timetable" },
    { label: "WHY CHOOSE", id: "whychoose" },
    { label: "TESTIMONIAL", id: "testimonials" },
    { label: "GALLERY", id: "gallery" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="w-full border-b border-gray-800 bg-black fixed top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between py-4 px-4 md:px-10 lg:px-20">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo1.png" alt="Boxing Academy" className="h-20 w-auto " />

          
        </div>

        {/* DESKTOP NAV (show from lg upward) */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-bold tracking-wide text-[14px] whitespace-nowrap">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActive(item.label);
                scrollToSection(item.id);
              }}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span
                className={`h-5 w-[2px] ${
                  active === item.label ? "bg-red-600" : "bg-transparent"
                }`}
              ></span>

              <span className={`${active === item.label ? "text-red-600" : "text-white"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* RIGHT — CONTACT BUTTON (desktop only) */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-red-600 text-white font-bold px-5 py-2 tracking-wide hover:bg-red-700 transition"
        >
          CONTACT
        </button>

        {/* MOBILE — HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700 px-6 py-4">
          <nav className="flex flex-col gap-4 font-bold text-white tracking-wide">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 py-2"
              >
                <span
                  className={`h-4 w-[2px] ${
                    active === item.label ? "bg-red-600" : "bg-transparent"
                  }`}
                ></span>

                <span className={`${active === item.label ? "text-red-600" : "text-white"}`}>
                  {item.label}
                </span>
              </button>
            ))}

            {/* MOBILE CONTACT BUTTON */}
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileOpen(false);
              }}
              className="bg-red-600 text-white font-bold px-6 py-3 tracking-wide mt-2"
            >
              CONTACT
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}