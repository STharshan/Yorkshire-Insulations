import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { HashLink, HashLink as Link } from "react-router-hash-link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const accent = "#FF3B3B";

    // Smooth scroll offset for fixed header
    const scrollWithOffset = (el) => {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#000000] text-white font-inter border-t border-[#1A1A1A]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-15 border-b border-[#1A1A1A] pb-12">
                    {/* Column 1 - Brand */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Yorkshire<span className="text-[#FF3B3B]"> Insulations</span>
                        </h2>
                        <p className="text-[#CCCCCC] text-sm mt-4 leading-relaxed max-w-[260px]">
                            Based in Yorkshire and working nationwide, our experienced team delivers a range of services including loft and garage insulation, new build insulation projects, spray foam removal, and certified pest control packages.
                        </p>
                    </div>

                    {/* Column 2 - Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-white">Contact</h4>
                        <ul className="space-y-3 text-[#CCCCCC] text-sm">
                            <li className="flex items-center gap-3 hover:text-[#FF3B3B] transition-colors">
                                <Phone size={18} color={accent} />
                                <a href="tel:+447590250335">07590 250 335</a>
                            </li>
                            <li className="flex gap-3 items-start text-sm text-[#CCCCCC]">
                                <Mail
                                    size={18}
                                    className="mt-1 text-[#FF3B3B] shrink-0"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:info@yorkshireinsulationsolutions.co.uk"
                                    className="hover:text-[#FF3B3B] wrap-break-word leading-snug w-full"
                                >
                                    info@yorkshireinsulationsolutions.co.uk
                                </a>
                            </li>
                            <li className="flex items-start gap-3 hover:text-[#FF3B3B] transition-colors">
                                <MapPin size={18} color={accent} className="mt-1" />
                                <a href="https://maps.app.goo.gl/kiuKFGLaznq5CiWe9" target="_blank" rel="noopener noreferrer">
                                    Yorkshire, United Kingdom
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-white">Our Service</h4>
                        <ul className="space-y-3 text-[#CCCCCC] text-sm">
                            {[
                                { name: "Loft Insulation", path: "/services/loft-insulation" },
                            ].map((service) => (
                                <li
                                    key={service.name}
                                    className="hover:text-[#FF3B3B] transition-colors cursor-pointer"
                                >
                                    <Link to={service.path}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Column 4 - Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-[#CCCCCC] text-sm">
                            {[
                                { name: "Home", href: "/#" },
                                { name: "About", href: "/#about" },
                                { name: "Services", href: "/#services" },
                                { name: "FAQ", href: "/#faq" },
                                { name: "Contact", href: "/#contact" },
                            ].map((link) => (
                                <li
                                    key={link.name}
                                    className="hover:text-[#FF3B3B] transition-colors cursor-pointer"
                                >
                                    <HashLink smooth to={link.href} scroll={scrollWithOffset}>
                                        {link.name}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-[#777777] gap-4">
                    <p>
                        © {new Date().getFullYear()} Yorkshire Insulations. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            //href="https://web.facebook.com/p/AutoPlus-Nottingham-100092195330520"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            //href="https://www.instagram.com/Autoplusnottingham/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
                        >
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>

                {/* Powered by Ansely */}
                <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
                    {/* Left: Terms & Privacy */}
                    <div className="flex gap-4 text-sm">
                        <Link
                            to="/terms"
                            className="text-gray-400 hover:text-red-500 transition duration-300"
                        >
                            Terms & Conditions
                        </Link>
                        <span className="text-gray-500">|</span>
                        <Link
                            to="/privacy"
                            className="text-gray-400 hover:text-red-500 transition duration-300"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Center: Powered by Ansely (unchanged) */}
                    <p className="text-center font-semibold text-gray-400">
                        Powered by{" "}
                        <a
                            href="https://www.ansely.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 hover:underline"
                        >
                            Ansely
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}