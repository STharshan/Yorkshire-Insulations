import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How much does loft insulation cost in Yorkshire?",
    a: "The cost depends on the size of your loft and the type of insulation used. We assess every property individually so you get an accurate price before any work begins - no hidden charges and no obligation.",
  },
  {
    q: "What is cavity wall insulation and is my home suitable?",
    a: "Cavity wall insulation involves injecting insulation material into the gap between your inner and outer walls. Most Yorkshire homes built between 1920 and 1980 - including terraces and semis - are suitable. We'll assess your property and let you know exactly what's possible.",
  },
  {
    q: "Will insulation work cause disruption to my home?",
    a: "Most of our installations are completed in a single day with minimal mess. Cavity wall work is done entirely from the outside, and loft insulation requires no major upheaval. We always leave the property clean and tidy.",
  },
  {
    q: "Can spray foam insulation affect my mortgage?",
    a: "Some lenders have raised concerns about certain types of spray foam in roof spaces. We only use approved products and will always advise you on the best option for your property and circumstances before any work begins.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        <div className="lg:sticky lg:top-8 lg:self-start">
          <span className="heading-font mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)] sm:mb-4 sm:text-base">
            FAQ
          </span>
          <h2 className="heading-font text-2xl font-extrabold leading-tight text-[var(--brand-text)] sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="brand-card overflow-hidden rounded-2xl bg-[var(--brand-offwhite)] transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="heading-font text-sm font-semibold leading-snug text-[var(--brand-text)] sm:text-base">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-transform duration-300 sm:h-9 sm:w-9 ${
                      isOpen
                        ? "rotate-45 border-[var(--brand-blue)] text-[var(--brand-blue)]"
                        : "border-[var(--brand-border)] text-[var(--brand-muted)]"
                    }`}
                  >
                    <Plus size={16} className="sm:hidden" />
                    <Plus size={18} className="hidden sm:block" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-4 pb-4 text-sm leading-relaxed text-[var(--brand-muted)] sm:px-6 sm:pb-5 sm:text-base">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
