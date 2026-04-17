import React from "react";
import { BadgeCheck, MapPinned, Thermometer } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Practical Recommendations",
    desc: "We assess the property properly and recommend the insulation solution that actually suits the build, access, and condition of the home.",
    icon: Thermometer,
  },
  {
    id: 2,
    title: "Yorkshire Coverage",
    desc: "From Leeds to surrounding West Yorkshire areas, we support homeowners with dependable advice and straightforward installation support.",
    icon: MapPinned,
  },
  {
    id: 3,
    title: "Trusted Workmanship",
    desc: "Clean installation standards, certified technicians, and a no-nonsense approach that keeps the process clear from first contact to finish.",
    icon: BadgeCheck,
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[var(--brand-offwhite)] py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="brand-badge">Why Choose Us</span>
            <h2 className="heading-font mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[50px]">
              Clean, capable, and built around trust
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[var(--brand-muted)] md:text-lg">
            The PDF guide calls for a professional but approachable feel. These
            are the signals we surface throughout the homepage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="brand-card brand-card-hover p-8 text-center md:p-10"
              >
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[var(--brand-navy)] text-[var(--brand-gold)]">
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>

                <h3 className="heading-font mt-8 text-[28px] font-bold text-[var(--brand-navy)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-[var(--brand-muted)] md:text-base">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
