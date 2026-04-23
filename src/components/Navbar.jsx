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
      submenu: servicePaths.map((service) => ({
        label: service.title,
        path: service.path,
      }))
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

  const handleDropdownClick = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // Improved Active Logic
  const isActive = (path) => {
    if (typeof path !== "string" || path.length === 0) {
      return false;
    }

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
      className="fixed top-0 left-0 z-50 w-full border-b border-[var(--brand-dark-border)] bg-[var(--brand-navbar-bg)]"
    >
      <div className="mx-auto flex items-center justify-between py-1 px-4 md:px-10 lg:px-20">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img src="/logo1.png" alt="Logo" className="h-25 w-auto" />
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
                      ? "text-[var(--brand-accent)]" : "text-white hover:text-[var(--brand-accent)]"
                    }`}
                  >
                    <span className={`h-5 w-[2px] ${
                      openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) 
                      ? "bg-[var(--brand-accent)]" : "bg-transparent"
                    }`}></span>
                    {item.label} <ChevronDown size={14} />
                  </button>

                  {/* DROPDOWN MENU */}
                  {openDropdown === item.label && (
                    <div className="absolute left-0 z-50 mt-4 flex w-48 flex-col border border-[var(--brand-dark-border)] bg-[var(--brand-dark-surface-strong)]">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={closeMenus}
                          className={`px-4 py-3 text-left text-[12px] transition ${
                            isActive(sub.path)
                              ? "bg-[var(--brand-blue)] text-white"
                              : "text-white hover:bg-[var(--brand-accent)] hover:text-[var(--brand-navy)]"
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
                  <span className={`h-5 w-[2px] ${isActive(item.path) ? "bg-[var(--brand-accent)]" : "bg-transparent"}`}></span>
                  <span className={`transition ${isActive(item.path) ? "text-[var(--brand-accent)]" : "text-white hover:text-[var(--brand-accent)]"}`}>
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
          className="hidden bg-[var(--brand-accent)] px-5 py-2 font-bold tracking-wide text-[var(--brand-navy)] transition hover:bg-[var(--brand-accent-hover)] lg:block"
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
        <div className="max-h-[80vh] overflow-y-auto border-t border-[var(--brand-dark-border)] bg-[var(--brand-navbar-bg)] px-6 py-4 lg:hidden">
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
                          ? "bg-[var(--brand-accent)]" : "bg-transparent"
                        }`}></span>
                        <span className={openDropdown === item.label || item.submenu.some(sub => isActive(sub.path)) ? "text-[var(--brand-accent)]" : "text-white"}>
                          {item.label}
                        </span>
                      </div>
                      <ChevronDown size={16} className={openDropdown === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-2 flex flex-col gap-3 border-l border-[var(--brand-dark-border)] pl-6">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={closeMenus}
                            className={`py-1 text-left ${isActive(sub.path) ? "text-[var(--brand-accent)]" : "text-[var(--brand-light-muted)]"}`}
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
                    <span className={`h-4 w-[2px] ${isActive(item.path) ? "bg-[var(--brand-accent)]" : "bg-transparent"}`}></span>
                    <span className={isActive(item.path) ? "text-[var(--brand-accent)]" : "text-white"}>
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
