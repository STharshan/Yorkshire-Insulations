import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { HashLink, HashLink as Link } from "react-router-hash-link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    // Smooth scroll offset for fixed header
    const scrollWithOffset = (el) => {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-[var(--brand-footer-border)] bg-[var(--brand-footer-bg)] font-inter text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* GRID */}
                <div className="grid grid-cols-1 gap-15 border-b border-[var(--brand-dark-border)] pb-12 md:grid-cols-4">
                    {/* Column 1 - Brand */}
                    <div>
                        <h2 className="heading-font text-[28px] font-bold tracking-[-0.02em] text-white">
                            Yorkshire<span className="text-[var(--brand-accent)]"> Insulations</span>
                        </h2>
                        <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-[var(--brand-footer-text)]">
                            Based in Yorkshire and working nationwide, our experienced team delivers a range of services including loft and garage insulation, new build insulation projects, spray foam removal, and certified pest control packages.
                        </p>
                    </div>

                    {/* Column 2 - Contact */}
                    <div>
                        <h4 className="heading-font mb-5 text-[18px] font-semibold text-white">Contact</h4>
                        <ul className="space-y-3 text-sm text-[var(--brand-footer-text)]">
                            <li className="flex items-center gap-3 transition-colors hover:text-[var(--brand-accent)]">
                                <Phone size={18} className="text-[var(--brand-accent)]" />
                                <a href="tel:+447590250335">07590 250 335</a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[var(--brand-footer-text)]">
                                <Mail
                                    size={18}
                                    className="mt-1 shrink-0 text-[var(--brand-accent)]"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:info@yorkshireinsulationsolutions.co.uk"
                                    className="wrap-break-word w-full leading-snug hover:text-[var(--brand-accent)]"
                                >
                                    info@yorkshireinsulationsolutions.co.uk
                                </a>
                            </li>
                            <li className="flex items-start gap-3 transition-colors hover:text-[var(--brand-accent)]">
                                <MapPin size={18} className="mt-1 text-[var(--brand-accent)]" />
                                <a href="https://maps.app.goo.gl/kiuKFGLaznq5CiWe9" target="_blank" rel="noopener noreferrer">
                                    Yorkshire, United Kingdom
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h4 className="heading-font mb-5 text-[18px] font-semibold text-white">Our Service</h4>
                        <ul className="space-y-3 text-sm text-[var(--brand-footer-text)]">
                            {[
                                { name: "Loft Insulation", path: "/services/loft-insulation" },
                            ].map((service) => (
                                <li
                                    key={service.name}
                                    className="cursor-pointer transition-colors hover:text-[var(--brand-accent)]"
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
                        <h4 className="heading-font mb-5 text-[18px] font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-[var(--brand-footer-text)]">
                            {[
                                { name: "Home", href: "/#" },
                                { name: "About", href: "/#about" },
                                { name: "Services", href: "/#services" },
                                { name: "FAQ", href: "/#faq" },
                                { name: "Contact", href: "/#contact" },
                            ].map((link) => (
                                <li
                                    key={link.name}
                                    className="cursor-pointer transition-colors hover:text-[var(--brand-accent)]"
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
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-[var(--brand-footer-muted)] md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Yorkshire Insulations. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            //href="https://web.facebook.com/p/AutoPlus-Nottingham-100092195330520"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--brand-footer-border)] p-2 transition hover:bg-[var(--brand-blue)] hover:text-white"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            //href="https://www.instagram.com/Autoplusnottingham/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--brand-footer-border)] p-2 transition hover:bg-[var(--brand-blue)] hover:text-white"
                        >
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>

                {/* Powered by Ansely */}
                <div className="mt-2 flex flex-col items-center justify-center gap-3 text-center font-semibold text-[var(--brand-footer-muted)] sm:flex-row">
                    {/* Left: Terms & Privacy */}
                    <div className="flex gap-4 text-sm">
                        <Link
                            to="/terms"
                            className="text-[var(--brand-footer-muted)] transition duration-300 hover:text-[var(--brand-accent)]"
                        >
                            Terms & Conditions
                        </Link>
                        <span className="text-[var(--brand-footer-muted)]">|</span>
                        <Link
                            to="/privacy"
                            className="text-[var(--brand-footer-muted)] transition duration-300 hover:text-[var(--brand-accent)]"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Center: Powered by Ansely (unchanged) */}
                    <p className="text-center font-semibold text-[var(--brand-footer-muted)]">
                        Powered by{" "}
                        <a
                            href="https://www.ansely.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--brand-accent)] hover:underline"
                        >
                            Ansely
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
