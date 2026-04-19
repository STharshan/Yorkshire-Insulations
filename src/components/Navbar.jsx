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
    <header
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full border-b border-[var(--brand-navbar-border)] bg-[var(--brand-navbar-bg)]"
    >
      <div className="mx-auto flex items-center justify-between py-4 px-4 md:px-10 lg:px-20">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img src="/logo1.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="heading-font hidden items-center gap-8 whitespace-nowrap text-[15px] font-medium tracking-[0.12em] text-[var(--brand-navbar-text)] lg:flex">
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              {item.submenu ? (
                /* DROPDOWN TRIGGER */
                <div className="relative group">
                  <button
                    onClick={() => handleDropdownClick(item.label)}
                    className={`flex items-center gap-1 cursor-pointer transition ${
                      openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) 
                      ? "text-[var(--brand-navbar-hover)]" : "text-[var(--brand-navbar-text)] hover:text-[var(--brand-navbar-hover)]"
                    }`}
                  >
                    <span className={`h-5 w-[2px] ${
                      openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) 
                      ? "bg-[var(--brand-navbar-hover)]" : "bg-transparent"
                    }`}></span>
                    {item.label} <ChevronDown size={14} />
                  </button>

                  {/* DROPDOWN MENU */}
                  {openDropdown === item.label && (
                    <div className="absolute left-0 z-50 mt-4 flex w-48 flex-col overflow-hidden rounded-[10px] border border-[var(--brand-navbar-border)] bg-[var(--brand-navbar-menu-bg)] shadow-[0_16px_40px_rgba(26,44,91,0.12)]">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={closeMenus}
                          className={`px-4 py-3 text-left text-[12px] transition ${
                            isActive(sub.path)
                              ? "bg-[var(--brand-blue)] text-white"
                              : "text-[var(--brand-navbar-text)] hover:bg-[var(--brand-navbar-menu-hover)] hover:text-[var(--brand-navbar-hover)]"
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
                  <span className={`h-5 w-[2px] ${isActive(item.path) ? "bg-[var(--brand-navbar-hover)]" : "bg-transparent"}`}></span>
                  <span className={`transition ${isActive(item.path) ? "text-[var(--brand-navbar-hover)]" : "text-[var(--brand-navbar-text)] hover:text-[var(--brand-navbar-hover)]"}`}>
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
          className="heading-font hidden rounded-[6px] bg-[var(--brand-blue)] px-5 py-3 text-[15px] font-semibold tracking-[0.18em] text-white transition hover:bg-[var(--brand-navy)] lg:block"
        >
          CONTACT
        </a>

        {/* MOBILE — HAMBURGER */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[var(--brand-navbar-text)] lg:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-[var(--brand-navbar-border)] bg-[var(--brand-navbar-bg)] px-6 py-4 lg:hidden">
          <nav className="heading-font flex flex-col gap-4 text-[15px] font-medium tracking-[0.1em] text-[var(--brand-navbar-text)]">
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
                          ? "bg-[var(--brand-navbar-hover)]" : "bg-transparent"
                        }`}></span>
                        <span className={openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) ? "text-[var(--brand-navbar-hover)]" : "text-[var(--brand-navbar-text)]"}>
                          {item.label}
                        </span>
                      </div>
                      <ChevronDown size={16} className={openDropdown === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-2 flex flex-col gap-3 border-l border-[var(--brand-navbar-border)] pl-6">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={closeMenus}
                            className={`py-1 text-left text-[14px] ${isActive(sub.path) ? "text-[var(--brand-navbar-hover)]" : "text-[var(--brand-muted)]"}`}
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
                    <span className={`h-4 w-[2px] ${isActive(item.path) ? "bg-[var(--brand-navbar-hover)]" : "bg-transparent"}`}></span>
                    <span className={isActive(item.path) ? "text-[var(--brand-navbar-hover)]" : "text-[var(--brand-navbar-text)]"}>
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
