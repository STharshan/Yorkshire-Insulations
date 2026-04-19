import { useState } from "react";
import {
    HeartHandshake,
    Bath,
    Home,
    Users,
    BedDouble,
    Brain,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { Building2, Wind, Layers, Shield, Hammer } from 'lucide-react';

const services = [
    {
        icon: Home,
        title: "Loft Insulation",
        description:
            "The most cost-effective way to reduce heat loss in your home. We install loft insulation across Yorkshire quickly and cleanly - with most jobs completed in a single day.",
        link: "/services/loft-insulation",
        img: "/loft.webp", // Update path as needed
    },
    {
        icon: Building2,
        title: "Cavity Wall Insulation",
        description:
            "We drill small holes in the outer wall and inject insulation material directly into the cavity - minimal disruption, maximum impact. Ideal for Yorkshire terraces and semis built between 1920 and 1980.",
        link: "/services/cavity-wall",
        img: "/cavity.webp",
    },
    {
        icon: Wind,
        title: "Spray Foam Insulation",
        description:
            "A highly effective solution for hard-to-insulate spaces. Spray foam expands to fill every gap, creating an airtight seal that dramatically reduces heat loss and damp.",
        link: "/services/spray-foam",
        img: "/spray.webp",
    },
    {
        icon: Layers,
        title: "Underfloor Insulation",
        description:
            "Cold floors are a sign of significant heat loss. We install insulation beneath your floorboards to keep warmth in and energy bills down - particularly effective in older Yorkshire properties.",
        link: "/services/underfloor-insulation",
        img: "/underfloor.webp",
    },
    {
        icon: Shield,
        title: "External Wall Insulation",
        description:
            "For solid-walled properties with no cavity, external wall insulation is the most effective solution. We clad the outside of your home with insulation boards, improving appearance and performance.",
        link: "/services/external-wall",
        img: "/external.webp",
    },
    {
        icon: Hammer,
        title: "Solid Wall Insulation",
        description:
            "Pre-1920s stone-built Yorkshire homes require a different approach. Our solid wall insulation solutions are designed specifically for older properties where cavity wall simply isn't an option.",
        link: "/services/solid-wall",
        img: "/solid-wall.webp",
    },
];

export function WhatWeDo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % services.length);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <section className="overflow-hidden bg-[var(--brand-offwhite)] py-5" id="services">
            <div className="container mx-auto max-w-7xl px-4">

                <div className="mb-10 space-y-4 text-center md:mb-16">
                    <span className="heading-font inline-block rounded-md bg-[var(--brand-blue)]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                        • OUR SERVICES
                    </span>
                    <h2 className="heading-font px-2 text-2xl font-bold text-[var(--brand-text)] sm:text-3xl md:text-4xl">
                        Insulation Solutions for Every Yorkshire Home
                    </h2>
                </div>

                <div className="block md:hidden">
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="min-w-full px-2"
                                    >
                                        <div className="brand-card flex flex-col rounded-[24px] border border-[var(--brand-border)] pt-8 text-center shadow-xl">
                                            <div className="mb-4 flex justify-center">
                                                <Icon className="h-7 w-7 text-[var(--brand-blue)]" />
                                            </div>

                                            <h3 className="heading-font px-6 text-lg font-semibold text-[var(--brand-blue)]">
                                                {service.title}
                                            </h3>

                                            <p className="mt-3 px-6 text-sm leading-relaxed text-[var(--brand-muted)]">
                                                {service.description}
                                            </p>

                                            <div className="relative mt-2 p-3">
                                                <div className="relative overflow-hidden rounded-[20px]">
                                                    <img
                                                        src="/logo.png"
                                                        alt={service.title}
                                                        className="h-58 w-full object-cover"
                                                    />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[16px] bg-white px-6 py-2 shadow-sm">
                                                        <Link
                                                            //to={service.link}
                                                            className="heading-font flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-text)] transition-colors hover:text-[var(--brand-blue)]"
                                                        >
                                                            Find Out More
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-5">
                        <button
                            onClick={prevSlide}
                            className="rounded-full border border-[var(--brand-blue)]/20 p-3 text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div className="flex gap-2">
                            {services.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-[var(--brand-blue)]" : "w-2 bg-[var(--brand-blue)]/20"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="rounded-full border border-[var(--brand-blue)]/20 p-3 text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="hidden md:block lg:hidden">
                    <div className="relative overflow-hidden px-2">
                        <motion.div
                            className="flex gap-4 md:gap-5"
                            animate={{
                                x: `-${currentIndex * 100}%`,
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive = index === currentIndex;

                                return (
                                    <div
                                        key={index}
                                        className="w-full md:w-1/2 shrink-0 px-2"
                                    >
                                        <div
                                         className={`brand-card h-full flex flex-col rounded-[28px] border transition-all duration-500 ${
    isActive
        ? "border-[var(--brand-blue)] bg-white scale-105 opacity-100 shadow-2xl z-10"
        : "border-[var(--brand-border)] bg-white opacity-30 scale-90"
}`}
                                        >
                                            {/* Icon */}
                                            <div className="mb-5 flex justify-center pt-8">
                                                <Icon
                                                    className={`h-7 w-7 transition-colors duration-500 ${isActive
                                                            ? "text-[var(--brand-blue)]"
                                                            : "text-[var(--brand-muted)]"
                                                        }`}
                                                />
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className={`heading-font px-6 text-center text-lg font-semibold transition-colors duration-500 ${isActive
                                                        ? "text-[var(--brand-blue)]"
                                                        : "text-[var(--brand-text)]"
                                                    }`}
                                            >
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className={`mt-3 px-6 text-center text-sm leading-relaxed transition-opacity duration-500 ${isActive
                                                        ? "text-[var(--brand-muted)] opacity-100"
                                                        : "opacity-0"
                                                    }`}
                                            >
                                                {service.description}
                                            </p>

                                            {/* Image */}
                                            <div className="relative mt-auto p-3">
                                                <div className="relative overflow-hidden rounded-[20px]">
                                                    <img
                                                        src="/logo.png"
                                                        alt={service.title}
                                                        className="h-[200px] w-full object-cover"
                                                    />

                                                    {/* CTA */}
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[16px] bg-white px-6 py-2 shadow-sm">
                                                        <Link
                                                            to={service.link}
                                                            className="heading-font flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-text)] transition-colors hover:text-[var(--brand-blue)]"
                                                        >
                                                            Find Out More
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Controls */}
                    <div className="mt-10 flex items-center justify-center gap-5">
                        <button
                            onClick={prevSlide}
                            className="rounded-full border border-[var(--brand-blue)]/20 p-3 text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div className="flex gap-2">
                            {services.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i
                                            ? "w-8 bg-[var(--brand-blue)]"
                                            : "w-2 bg-[var(--brand-blue)]/20"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="rounded-full border border-[var(--brand-blue)]/20 p-3 text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center justify-center overflow-visible">
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: `calc(-${currentIndex * 33.333}% - ${currentIndex * 1.5}rem)`,
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                style={{ width: "100%" }}
                            >
                                <div className="min-w-[calc(33.333%-1rem)]" />

                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    const isActive = index === currentIndex;

                                    return (
                                        <div key={index} className="min-w-[calc(33.333%-1rem)]">
                                            <div
                                                className={`brand-card h-full flex flex-col rounded-[32px] border transition-all duration-500 ${isActive
                                                    ? "border-[var(--brand-blue)]/20 bg-white scale-105 z-20 opacity-100 shadow-2xl"
                                                    : "border-[var(--brand-border)] bg-white opacity-40 scale-95"
                                                    }`}
                                            >
                                                <div className="mb-6 flex justify-center pt-10">
                                                    <Icon
                                                        className={`h-8 w-8 transition-colors duration-500 ${isActive ? "text-[var(--brand-blue)]" : "text-[var(--brand-muted)]"
                                                            }`}
                                                    />
                                                </div>

                                                <h3
                                                    className={`heading-font px-6 text-center text-xl font-semibold transition-colors duration-500 ${isActive ? "text-[var(--brand-blue)]" : "text-[var(--brand-text)]"
                                                        }`}
                                                >
                                                    {service.title}
                                                </h3>

                                                <p
                                                    className={`mt-4 px-8 text-center text-sm leading-relaxed transition-opacity duration-500 ${isActive
                                                        ? "text-[var(--brand-muted)] opacity-100"
                                                        : "opacity-0"
                                                        }`}
                                                >
                                                    {service.description}
                                                </p>

                                                <div className="relative mt-auto p-4">
                                                    <div className="relative overflow-hidden rounded-[24px]">
                                                        <img
                                                            src="/logo.png"
                                                            alt={service.title}
                                                            className="h-65 w-full object-cover"
                                                        />
                                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                                                            <Link
                                                                to={service.link}
                                                                className="group/btn flex items-center gap-3 rounded-xl w-55 mx-auto bg-white px-8 py-3 pt-9 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:bg-[var(--brand-offwhite)]"
                                                            >
                                                                <span className="heading-font text-[12px] font-black uppercase tracking-[0.15em] text-[var(--brand-text)]">
                                                                    Find Out More
                                                                </span>
                                                                <ArrowRight className="h-4 w-4 text-[var(--brand-text)] transition-transform group-hover/btn:translate-x-1" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className="min-w-[calc(33.333%-1rem)]" />
                            </motion.div>
                        </div>

                        <div className="mt-16 flex items-center justify-center gap-6">
                            <button
                                onClick={prevSlide}
                                className="rounded-full border border-[var(--brand-blue)]/20 p-3 text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <div className="flex gap-2">
                                {services.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-[var(--brand-blue)]" : "w-2 bg-[var(--brand-blue)]/20"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="rounded-full border border-[var(--brand-blue)]/20 p-3 text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
                                aria-label="Next"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
