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
        <section className="py-12 md:py-20 bg-background overflow-hidden" id="services">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Header */}
                <div className="text-center space-y-4 mb-10 md:mb-16">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        • Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
                        Compassionate care, tailored to every individual
                    </h2>
                </div>

                {/* ── MOBILE SLIDER (< md) ── */}
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
                                        <div className="flex flex-col text-center pt-8 rounded-[24px] border border-primary/20 shadow-xl bg-card">
                                            {/* Icon */}
                                            <div className="flex justify-center mb-4">
                                                <Icon className="h-7 w-7 text-primary" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-bold text-lg px-6 text-primary">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm px-6 mt-3 leading-relaxed text-muted-foreground">
                                                {service.description}
                                            </p>

                                            {/* Image */}
                                            <div className="relative p-3 mt-2">
                                                <div className="relative rounded-[20px] overflow-hidden">
                                                    <img
                                                        src={service.img}
                                                        alt={service.title}
                                                        className="w-full h-[200px] object-cover"
                                                    />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-b-[16px] shadow-sm">
                                                        <Link
                                                            to={service.link}
                                                            className="text-[11px] font-bold uppercase tracking-widest text-foreground flex items-center gap-2 hover:text-primary transition-colors whitespace-nowrap"
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

                    {/* Mobile Controls */}
                    <div className="flex items-center justify-center gap-5 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
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
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-primary/20"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* ── TABLET SLIDER (md → lg) ── */}
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
                            {/* Leading spacer */}
                            <div className="min-w-[calc(50%-0.625rem)] shrink-0" />

                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive = index === currentIndex;

                                return (
                                    <div key={index} className="min-w-[calc(50%-0.625rem)] shrink-0">
                                        <div
                                            className={`h-full flex flex-col text-center pt-8 rounded-[28px] border transition-all duration-500 ${isActive
                                                    ? "border-primary/20 shadow-2xl bg-card scale-100 opacity-100"
                                                    : "border-border bg-card opacity-40 scale-95"
                                                }`}
                                        >
                                            <div className="flex justify-center mb-5">
                                                <Icon
                                                    className={`h-7 w-7 transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground"
                                                        }`}
                                                />
                                            </div>

                                            <h3
                                                className={`font-bold text-lg px-6 transition-colors duration-500 ${isActive ? "text-primary" : "text-foreground"
                                                    }`}
                                            >
                                                {service.title}
                                            </h3>

                                            <p
                                                className={`text-sm px-6 mt-3 leading-relaxed transition-opacity duration-500 ${isActive
                                                        ? "text-muted-foreground opacity-100"
                                                        : "opacity-0"
                                                    }`}
                                            >
                                                {service.description}
                                            </p>

                                            <div className="relative p-3 mt-auto">
                                                <div className="relative rounded-[20px] overflow-hidden">
                                                    <img
                                                        src={service.img}
                                                        alt={service.title}
                                                        className="w-full h-[200px] object-cover"
                                                    />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-b-[16px] shadow-sm">
                                                        <Link
                                                            to={service.link}
                                                            className="text-[11px] font-bold uppercase tracking-widest text-foreground flex items-center gap-2 hover:text-primary transition-colors whitespace-nowrap"
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

                            {/* Trailing spacer */}
                            <div className="min-w-[calc(50%-0.625rem)] shrink-0" />
                        </motion.div>
                    </div>

                    {/* Tablet Controls */}
                    <div className="flex items-center justify-center gap-5 mt-10">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
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
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-primary/20"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* ── DESKTOP SLIDER (≥ lg) — original layout preserved ── */}
                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="flex justify-center items-center overflow-visible">
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
                                                className={`h-full flex flex-col text-center pt-10 rounded-[32px] border transition-all duration-500 ${isActive
                                                        ? "border-primary/20 shadow-2xl bg-card scale-105 z-20 opacity-100"
                                                        : "border-border bg-card opacity-40 scale-95"
                                                    }`}
                                            >
                                                <div className="flex justify-center mb-6">
                                                    <Icon
                                                        className={`h-8 w-8 transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground"
                                                            }`}
                                                    />
                                                </div>

                                                <h3
                                                    className={`font-bold text-xl px-6 transition-colors duration-500 ${isActive ? "text-primary" : "text-foreground"
                                                        }`}
                                                >
                                                    {service.title}
                                                </h3>

                                                <p
                                                    className={`text-sm px-8 mt-4 leading-relaxed transition-opacity duration-500 ${isActive
                                                            ? "text-muted-foreground opacity-100"
                                                            : "opacity-0"
                                                        }`}
                                                >
                                                    {service.description}
                                                </p>

                                                <div className="relative p-4 mt-auto">
                                                    <div className="relative rounded-[24px] overflow-hidden">
                                                        <img
                                                            src={service.img}
                                                            alt={service.title}
                                                            className="w-full h-[220px] object-cover"
                                                        />
                                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                                                            <Link
                                                                to={service.link}
                                                                className="bg-white px-8 py-3 pt-9 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 hover:bg-gray-50 transition-all group/btn"
                                                            >
                                                                <span className="text-[12px] font-black uppercase tracking-[0.15em] text-gray-800">
                                                                    Read More
                                                                </span>
                                                                <ArrowRight className="h-4 w-4 text-gray-800 transition-transform group-hover/btn:translate-x-1" />
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

                        {/* Desktop Controls */}
                        <div className="flex items-center justify-center gap-6 mt-16">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
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
                                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-primary/20"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
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