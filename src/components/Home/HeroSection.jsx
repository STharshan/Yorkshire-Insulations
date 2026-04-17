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
        <div className="relative w-full h-screen">
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
                        {/* Background */}
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex items-center">
                                <div className="px-4 sm:px-6 lg:px-14">
                                    <p className="text-yellow-400 mt-30 uppercase tracking-widest text-sm md:text-base font-semibold mb-4">
                                        Complete solution for your roofing vision
                                    </p>

                                    <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-4xl">
                                        Expert Roofing & Fixing Services
                                    </h1>

                                    <p className="text-gray-200 mt-8 mb-10 max-w-2xl text-sm sm:text-xl">
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore
                                    </p>

                                    {/* Buttons */}
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded">
                                            Book a Schedule
                                        </button>

                                        <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200">
                                            About Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (Right Side Vertical) */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
                <button className="prev-btn bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur">
                    <ChevronLeft className="text-white" />
                </button>

                <button className="next-btn bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur">
                    <ChevronRight className="text-white" />
                </button>
            </div>
        </div>
    );
}