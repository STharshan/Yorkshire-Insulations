import React from 'react';
import { Package, HardHat, Headset } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: "Quality Products",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor reprehenderit in voluptate velit esse cillum dolore",
      icon: <Package size={32} className="text-[var(--brand-gold)]" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Trained Workers",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor reprehenderit in voluptate velit esse cillum dolore",
      icon: <HardHat size={32} className="text-[var(--brand-gold)]" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Quick Response",
      desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor reprehenderit in voluptate velit esse cillum dolore",
      icon: <Headset size={32} className="text-[var(--brand-gold)]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative w-full bg-[var(--brand-offwhite)]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="brand-card brand-card-hover flex flex-col items-center rounded-[10px] p-8 text-center lg:p-12"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-navy)] shadow-[0_12px_28px_rgba(26,44,91,0.16)]">
                {item.icon}
              </div>

              <h3 className="heading-font mb-4 text-[24px] font-semibold tracking-tight text-[var(--brand-text)]">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--brand-muted)] md:text-base">
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
