import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const menuItems = [
    { label: "HOME", path: "/#" },
    { label: "ABOUT", path: "/#about" },
    { 
      label: "SERVICES", 
      path: "#", 
      submenu: [
        { label: "Loft Insulation", path: "/services/loft-insulation" },
      ]
    },
    { 
      label: "LOCATION", 
      path: "#", 
      submenu: [
        { label: "Leeds", path: "/locations/leeds" },
      ]
    },
    { label: "FAQ", path: "/#faq" },
    { label: "CONTACT", path: "/#contact" },
  ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Force re-render when location changes to update active states
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleDropdownClick = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // Improved Active Logic
  const isActive = (path) => {
    // 1. Handle Home Case
    if (path === "/") {
      return location.pathname === "/" && (location.hash === "" || location.hash === "#");
    }
    
    // 2. Handle Hash Links (e.g., /#about)
    if (path.includes("#") && path !== "#") {
      const [basePath, hash] = path.split("#");
      return location.pathname === basePath && location.hash === `#${hash}`;
    }
    
    // 3. Handle Standard Routes (e.g., /services/...)
    return location.pathname === path;
  };

  return (
    <header ref={navRef} className="w-full border-b border-gray-800 bg-black fixed top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between py-4 px-4 md:px-10 lg:px-20">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img src="/logo1.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-bold tracking-wide text-[14px] whitespace-nowrap">
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              {item.submenu ? (
                /* DROPDOWN TRIGGER */
                <div className="relative group">
                  <button
                    onClick={() => handleDropdownClick(item.label)}
                    className={`flex items-center gap-1 cursor-pointer transition ${
                      openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) 
                      ? "text-red-600" : "text-white hover:text-red-500"
                    }`}
                  >
                    <span className={`h-5 w-[2px] ${
                      openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) 
                      ? "bg-red-600" : "bg-transparent"
                    }`}></span>
                    {item.label} <ChevronDown size={14} />
                  </button>

                  {/* DROPDOWN MENU */}
                  {openDropdown === item.label && (
                    <div className="absolute left-0 mt-4 w-48 bg-black border border-gray-800 flex flex-col z-50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={closeMenus}
                          className={`px-4 py-3 text-left text-[12px] transition ${
                            isActive(sub.path) ? "bg-red-700 text-white" : "text-white hover:bg-red-600"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* STANDARD LINK / HASH LINK */
                <HashLink
                  smooth
                  to={item.path}
                  onClick={closeMenus}
                  className="flex items-center gap-1"
                >
                  <span className={`h-5 w-[2px] ${isActive(item.path) ? "bg-red-600" : "bg-transparent"}`}></span>
                  <span className={`transition ${isActive(item.path) ? "text-red-600" : "text-white hover:text-red-500"}`}>
                    {item.label}
                  </span>
                </HashLink>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT — CONTACT BUTTON */}
        <a
          href="tel:+447590250335"
          className="hidden lg:block bg-red-600 text-white font-bold px-5 py-2 tracking-wide hover:bg-red-700 transition"
        >
          CONTACT
        </a>

        {/* MOBILE — HAMBURGER */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700 px-6 py-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 font-bold text-white tracking-wide">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="flex items-center justify-between w-full py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-4 w-[2px] ${
                          openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) 
                          ? "bg-red-600" : "bg-transparent"
                        }`}></span>
                        <span className={openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) ? "text-red-600" : "text-white"}>
                          {item.label}
                        </span>
                      </div>
                      <ChevronDown size={16} className={openDropdown === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="flex flex-col pl-6 mt-2 gap-3 border-l border-gray-800">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={closeMenus}
                            className={`text-left py-1 ${isActive(sub.path) ? "text-red-500" : "text-gray-400"}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <HashLink
                    smooth
                    to={item.path}
                    onClick={closeMenus}
                    className="flex items-center gap-2 py-2"
                  >
                    <span className={`h-4 w-[2px] ${isActive(item.path) ? "bg-red-600" : "bg-transparent"}`}></span>
                    <span className={isActive(item.path) ? "text-red-600" : "text-white"}>
                      {item.label}
                    </span>
                  </HashLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}