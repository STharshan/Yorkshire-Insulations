import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const faqs = [
  {
    q: "How do I know which insulation is right for my home?",
    a: "It depends on the age of the property, the roof-space condition, what insulation is already in place, and how the house was built. We recommend solutions based on those details, not guesswork.",
  },
  {
    q: "Is loft insulation worth doing if the house already has some insulation?",
    a: "In many cases, yes. Older or poorly installed insulation often underperforms, and topping up or correcting it can make a noticeable difference to comfort and heat retention.",
  },
  {
    q: "Do you only work in Leeds?",
    a: "No. Leeds is one of our key coverage areas, but the business is based in Yorkshire and supports nearby towns and surrounding areas as well.",
  },
  {
    q: "Can you quote after looking at the property details?",
    a: "Yes. We can start with the property information you send through and then advise on the best next step for a proper recommendation or quote.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[var(--brand-offwhite)] py-[4.5rem] md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="brand-badge">FAQ</span>
          <h2 className="heading-font mt-8 text-4xl font-extrabold tracking-[-0.04em] text-[var(--brand-navy)] md:text-[58px]">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[var(--brand-muted)] md:text-lg">
            Straight answers, clear expectations, and the same calm tone the PDF
            asks for throughout the site.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.q}
                className="brand-card overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-6 py-6 text-left md:px-8 md:py-7"
                >
                  <span className="heading-font text-xl font-bold leading-8 text-[var(--brand-navy)] md:text-[28px]">
                    {item.q}
                  </span>

                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-offwhite)] text-[var(--brand-blue)]">
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-6 pb-6 text-sm leading-8 text-[var(--brand-muted)] md:px-8 md:pb-8 md:text-base">
                    {item.a}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
