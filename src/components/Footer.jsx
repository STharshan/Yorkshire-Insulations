import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";
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
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#1A1A1A] pb-12">
                    {/* Column 1 - Brand */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Auto<span className="text-[#FF3B3B]">Plus</span>
                        </h2>
                        <p className="text-[#CCCCCC] text-sm mt-4 leading-relaxed max-w-[260px]">
                            Professional mobile auto electricians providing expert diagnostics,
                            key programming, and electrical repairs across Nottinghamshire.
                        </p>
                    </div>

                    {/* Column 2 - Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-white">Contact</h4>
                        <ul className="space-y-3 text-[#CCCCCC] text-sm">
                            <li className="flex items-center gap-3 hover:text-[#FF3B3B] transition-colors">
                                <Phone size={18} color={accent} />
                                <a href="tel:+447495159438">+44 7495 159438</a>
                            </li>
                            <li className="flex gap-3 items-start text-sm text-[#CCCCCC]">
                                <Mail
                                    size={18}
                                    className="mt-1 text-[#FF3B3B] shrink-0"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:info@autoplusnottingham.co.uk"
                                    className="hover:text-[#FF3B3B] break-words leading-snug w-full"
                                >
                                    info@autoplusnottingham.co.uk
                                </a>
                            </li>
                            <li className="flex items-start gap-3 hover:text-[#FF3B3B] transition-colors">
                                <MapPin size={18} color={accent} className="mt-1" />
                                <span>Nottinghamshire, United Kingdom</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-white">Our Services</h4>
                        <ul className="space-y-3 text-[#CCCCCC] text-sm">
                            {[
                                "Auto Electrical Repairs",
                                "Diagnostics",
                                "Key Cutting",
                                "Key Programming",

                            ].map((service) => (
                                <li
                                    key={service}
                                    className="hover:text-[#FF3B3B] transition-colors cursor-pointer"
                                >
                                    <Link smooth to="/#services" scroll={scrollWithOffset}>
                                        {service}
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
                                { name: "Home", href: "/#home" },
                                { name: "Services", href: "/#services" },
                                { name: "FAQ", href: "/#faq" },
                                { name: "Contact", href: "/#contact" },
                                { name: "Why Choose Us", href: "/#whychooseus" },
                                { name: "Review", href: "/#review" },
                            ].map((link) => (
                                <li
                                    key={link.name}
                                    className="hover:text-[#FF3B3B] transition-colors cursor-pointer"
                                >
                                    <Link smooth to={link.href} scroll={scrollWithOffset}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}

                            {/* Legal Links */}
                            <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                                <a href="/terms-conditions">Terms & Conditions</a>
                            </li>
                            <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-[#777777] gap-4">
                    <p>
                        © {new Date().getFullYear()} AutoPlus Nottingham. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://web.facebook.com/p/AutoPlus-Nottingham-100092195330520"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            href="https://www.instagram.com/Autoplusnottingham/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
                        >
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>

                {/* Powered by Ansely */}
                <div className="mt-6 text-center text-xs text-[#777777]">
                    <span>
                        Powered by{" "}
                        <a
                            href="https://www.ansely.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF3B3B] font-semibold tracking-wide hover:underline hover:text-[#ff5c5c] transition-colors duration-300"
                        >
                            Ansely
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}