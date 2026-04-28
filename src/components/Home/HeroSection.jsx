import { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    { image: "/heroimage-1.jpg" },
    { image: "/heroimage-2.jpg" },
    { image: "/heroimage-3.jpg" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.2,
        },
    },
};

const textRevealVariants = {
    hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function HeroSlider() {
    const containerRef = useRef(null);
    
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, -150]);
    
    const yText = useTransform(scrollY, [0, 500], [0, -300]);

    return (
        <div ref={containerRef} id="/#" className="relative h-screen w-full overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="overflow-hidden">
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                <Motion.div
                                    style={{ 
                                        backgroundImage: `url(${slide.image})`,
                                        y: yBg 
                                    }}
                                    className="absolute inset-0 bg-cover bg-center h-[120%]"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(26,44,91,0.86),rgba(46,79,163,0.62),rgba(28,28,28,0.45))]"></div>

                                <Motion.div 
                                    style={{ y: yText }}
                                    className="relative z-10 flex h-full items-center"
                                >
                                    <Motion.div
                                        className="px-4 sm:px-6 lg:px-14"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate={isActive ? "visible" : "hidden"}
                                    >
                                        <Motion.p
                                            variants={textRevealVariants}
                                            className="heading-font mt-30 mb-4 text-[13px] font-bold uppercase tracking-[0.28em] text-[var(--brand-gold)] md:text-sm"
                                        >
                                            Yorkshire's Trusted Insulation Specialists
                                        </Motion.p>

                                        <Motion.h1
                                            variants={textRevealVariants}
                                            className="heading-font max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-[52px] lg:text-[68px]"
                                        >
                                            Keep Warm. Cut Bills. Live Comfortably.
                                        </Motion.h1>

                                        <Motion.p
                                            variants={fadeUpVariants}
                                            className="mt-8 mb-10 max-w-2xl text-sm text-white/80 sm:text-lg"
                                        >
                                            From loft insulation to cavity wall and spray foam - we help Yorkshire homeowners cut energy
                                            bills, stay warmer, and add real value to their property.
                                        </Motion.p>

                                        <Motion.div variants={fadeUpVariants} className="mt-6 flex flex-wrap gap-4">
                                            <a href="#contact" className="heading-font bg-[var(--brand-gold)] px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--brand-gold-hover)]">
                                                Get a Free Quote
                                            </a>
                                            <a href="#services" className="heading-font border border-white px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[var(--brand-navy)]">
                                                Our Services
                                            </a>
                                        </Motion.div>
                                    </Motion.div>
                                </Motion.div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute right-6 -mt-35 md:mt-0 md:top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4">
                <button className="prev-btn rounded-full border border-white/30 bg-white/12 p-3 text-white backdrop-blur transition hover:bg-white hover:text-[var(--brand-navy)]">
                    <ChevronLeft />
                </button>
                <button className="next-btn rounded-full border border-white/30 bg-white/12 p-3 text-white backdrop-blur transition hover:bg-white hover:text-[var(--brand-navy)]">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}