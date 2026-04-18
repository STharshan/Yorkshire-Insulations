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


const services = [
    {
        icon: Bath,
        title: "Personal Care",
        description:
            "Assistance with daily living activities such as bathing, dressing, grooming, and mobility support.",
        link: "/services/at-home/personal-care",
        img: "/about2.webp",
    },
    {
        icon: Home,
        title: "Domestic Tasks",
        description:
            "Help with household tasks including cleaning, laundry, and meal preparation to maintain a safe and comfortable living environment.",
        link: "/services/at-home/domestic-tasks",
        img: "/logo.png",
    },
    {
        icon: BedDouble,
        title: "Respite Care",
        description:
            "Short-term relief for primary caregivers, providing temporary care for loved ones.",
        link: "/services/at-home/respite-care",
        img: "/logo.png",
    },
    {
        icon: HeartHandshake,
        title: "Live-In Support",
        description:
            "24/7 in-home care services for individuals requiring continuous support and supervision.",
        link: "/services/at-home/live-in-support",
        img: "/logo.png",
    },
    {
        icon: Brain,
        title: "Specialist Care",
        description:
            "Specialised care tailored to individuals with complex conditions including dementia, cancer, diabetes, stroke recovery, and neuromuscular disorders.",
        link: "/services/complex/specialist-care",
        img: "/logo.png",
    },
    {
        icon: Users,
        title: "Companionship",
        description:
            "Engaging companionship and social interaction to enhance emotional well-being and reduce feelings of loneliness.",
        link: "/services/at-home/companionship-social-visits",
        img: "/logo.png",
    },
];

export function WhatWeDo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % services.length);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <section className="overflow-hidden bg-[var(--brand-offwhite)] py-12 md:py-20" id="services">
            <div className="container mx-auto max-w-7xl px-4">

                <div className="mb-10 space-y-4 text-center md:mb-16">
                    <span className="heading-font inline-block rounded-md bg-[var(--brand-blue)]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                        • Our Services
                    </span>
                    <h2 className="heading-font px-2 text-2xl font-bold text-[var(--brand-text)] sm:text-3xl md:text-4xl">
                        Compassionate care, tailored to every individual
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
                                                        src={service.img}
                                                        alt={service.title}
                                                        className="h-[200px] w-full object-cover"
                                                    />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[16px] bg-white px-6 py-2 shadow-sm">
                                                        <Link
                                                            to={service.link}
                                                            className="heading-font flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-text)] transition-colors hover:text-[var(--brand-blue)]"
                                                        >
                                                            Read More
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
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex gap-5"
                            animate={{
                                x: `calc(-${currentIndex * 50}% - ${currentIndex * 0.625}rem)`,
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            style={{ width: "100%" }}
                        >
                            <div className="min-w-[calc(50%-0.625rem)] shrink-0" />

                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive = index === currentIndex;

                                return (
                                    <div key={index} className="min-w-[calc(50%-0.625rem)] shrink-0">
                                        <div
                                            className={`brand-card h-full flex flex-col rounded-[28px] border transition-all duration-500 ${isActive
                                                    ? "border-[var(--brand-blue)]/20 bg-white scale-100 opacity-100 shadow-2xl"
                                                    : "border-[var(--brand-border)] bg-white opacity-40 scale-95"
                                                }`}
                                        >
                                            <div className="mb-5 flex justify-center pt-8">
                                                <Icon
                                                    className={`h-7 w-7 transition-colors duration-500 ${isActive ? "text-[var(--brand-blue)]" : "text-[var(--brand-muted)]"
                                                        }`}
                                                />
                                            </div>

                                            <h3
                                                className={`heading-font px-6 text-center text-lg font-semibold transition-colors duration-500 ${isActive ? "text-[var(--brand-blue)]" : "text-[var(--brand-text)]"
                                                    }`}
                                            >
                                                {service.title}
                                            </h3>

                                            <p
                                                className={`mt-3 px-6 text-center text-sm leading-relaxed transition-opacity duration-500 ${isActive
                                                        ? "text-[var(--brand-muted)] opacity-100"
                                                        : "opacity-0"
                                                    }`}
                                            >
                                                {service.description}
                                            </p>

                                            <div className="relative mt-auto p-3">
                                                <div className="relative overflow-hidden rounded-[20px]">
                                                    <img
                                                        src={service.img}
                                                        alt={service.title}
                                                        className="h-[200px] w-full object-cover"
                                                    />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[16px] bg-white px-6 py-2 shadow-sm">
                                                        <Link
                                                            to={service.link}
                                                            className="heading-font flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-text)] transition-colors hover:text-[var(--brand-blue)]"
                                                        >
                                                            Read More
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="min-w-[calc(50%-0.625rem)] shrink-0" />
                        </motion.div>
                    </div>

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
                                                            src={service.img}
                                                            alt={service.title}
                                                            className="h-[220px] w-full object-cover"
                                                        />
                                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                                                            <Link
                                                                to={service.link}
                                                                className="group/btn flex items-center gap-3 rounded-xl bg-white px-8 py-3 pt-9 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:bg-[var(--brand-offwhite)]"
                                                            >
                                                                <span className="heading-font text-[12px] font-black uppercase tracking-[0.15em] text-[var(--brand-text)]">
                                                                    Read More
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
