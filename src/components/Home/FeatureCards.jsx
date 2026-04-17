import React from 'react';
import { Package, HardHat, Headset } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: "Quality Products",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor reprehenderit in voluptate velit esse cillum dolore",
      icon: <Package size={32} className="text-[#E9B155]" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Trained Workers",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor reprehenderit in voluptate velit esse cillum dolore",
      icon: <HardHat size={32} className="text-[#E9B155]" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Quick Response",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor reprehenderit in voluptate velit esse cillum dolore",
      icon: <Headset size={32} className="text-[#E9B155]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative w-full bg-[#F3F0ED]">
      {/* 2. Cards Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 lg:p-12 flex flex-col rounded-xl items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-8">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;