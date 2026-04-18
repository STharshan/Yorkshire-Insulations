"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image:
            "https://muffle.droitlab.com/wp-content/uploads/2022/11/background.webp",
    },
    {
        image:
            "https://muffle.droitlab.com/wp-content/uploads/2023/01/iamge_2.png",
    },
    {
        image:
            "https://muffle.droitlab.com/wp-content/uploads/2023/01/image_3.png",
    },
];

export default function HeroSlider() {
    return (
        <div className="relative h-screen w-full">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop
                autoplay={{ delay: 3000 }}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(26,44,91,0.86),rgba(46,79,163,0.62),rgba(28,28,28,0.45))]"></div>

                            <div className="relative z-10 flex h-full items-center">
                                <div className="px-4 sm:px-6 lg:px-14">
                                    <p className="heading-font mt-30 mb-4 text-[13px] font-bold uppercase tracking-[0.28em] text-[var(--brand-gold)] md:text-sm">
                                        Complete solution for your roofing vision
                                    </p>

                                    <h1 className="heading-font max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-[52px] lg:text-[68px]">
                                        Expert Roofing & Fixing Services
                                    </h1>

                                    <p className="mt-8 mb-10 max-w-2xl text-sm text-white/80 sm:text-lg">
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-4">
                                        <button className="heading-font rounded-md bg-[var(--brand-gold)] px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--brand-gold-hover)]">
                                            Book a Schedule
                                        </button>

                                        <button className="heading-font rounded-md border border-white px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[var(--brand-navy)]">
                                            About Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4">
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
