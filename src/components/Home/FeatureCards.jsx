import React from 'react';
import { FaClipboardCheck } from "react-icons/fa6";
import { GoShieldCheck } from 'react-icons/go';
import { RiTeamFill } from 'react-icons/ri';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: "Accredited Installers",
      desc: "All our insulation work is installed to the highest standard using accredited materials: giving you confidence in every job, from first fix to final finish.",
      icon: <GoShieldCheck size={32} className="text-[var(--brand-gold)]" />,
    },
    {
      id: 2,
      title: "Yorkshire Based Team",
      desc: "We're a local Yorkshire team: not a national call centre. We know the housing stock, the weather, and what works for homes in this region.",
      icon: <RiTeamFill size={32} className="text-[var(--brand-gold)]" />
    },
    {
      id: 3,
      title: "Free Surveys & Quotes",
      desc: "Not sure what insulation you need? We'll come out, assess your property, and give you a straight answer with no obligation and no hard sell.",
      icon: <FaClipboardCheck size={32} className="text-[var(--brand-gold)]" />,
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