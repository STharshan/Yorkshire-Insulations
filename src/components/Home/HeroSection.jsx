import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const MuffleHero = () => {
  const slides = [
    {
      id: 1,
      bg: "https://muffle.droitlab.com/wp-content/uploads/2022/11/background.webp",
      subtitle: "Complete solution for your roofing vision",
      title: "Expert Roofing & Fixing Services",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    // Add other slides here...
  ];

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* --- HERO SLIDER --- */}
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
        className="flex-grow w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), transparent), url(${slide.bg})` }}
            >
              <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-4xl text-left">
                  <h4 className="text-[#E9B155] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4 animate-fadeInLeft">
                    {slide.subtitle}
                  </h4>
                  <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 animate-fadeInLeft delay-75">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fadeInLeft delay-150">
                    {slide.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 animate-fadeInLeft delay-300">
                    <button className="bg-[#E9B155] hover:bg-[#d4a049] text-black px-10 py-5 font-bold text-sm uppercase transition-all rounded-sm shadow-lg">
                      Book a Schedule
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-black px-10 py-5 font-bold text-sm uppercase transition-all rounded-sm shadow-lg">
                      About Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* --- NAVIGATION ARROWS (Matches Image) --- */}
        <div className="absolute inset-y-0 w-full flex items-center justify-between px-4 lg:px-10 z-30 pointer-events-none">
          <button className="prev-btn pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-[#E9B155] text-white flex items-center justify-center transition-all border border-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="next-btn pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-[#E9B155] text-white flex items-center justify-center transition-all border border-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </Swiper>

      <style jsx global>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .delay-75 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default MuffleHero;