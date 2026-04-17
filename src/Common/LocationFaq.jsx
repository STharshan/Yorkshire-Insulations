import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const LocationFaq = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data) {
    return null;
  }

  return (
    <section className="bg-[var(--brand-panel)] text-[var(--brand-text)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-[4.5rem] md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p
            className="text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)]"
            style={headingStyle}
          >
            {data.badge}
          </p>

          <h2
            className="mt-8 max-w-xl text-5xl font-extrabold tracking-[-0.04em] text-[var(--brand-navy)] md:text-[64px]"
            style={headingStyle}
          >
            {data.title}
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-[var(--brand-muted)]">
            Straight answers, clear expectations, and practical guidance for Leeds homeowners.
          </p>
        </div>

        <div className="space-y-6">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `location-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[10px] border border-[var(--brand-border)] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7"
                >
                  <span
                    className="text-2xl font-bold leading-9 text-[var(--brand-navy)] md:text-[30px]"
                    style={headingStyle}
                  >
                    {item.question}
                  </span>

                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-offwhite)] text-[var(--brand-blue)]">
                    {isOpen ? (
                      <ChevronDown className="h-6 w-6" />
                    ) : (
                      <Plus className="h-6 w-6" />
                    )}
                  </span>
                </button>

                {isOpen ? (
                  <div
                    id={answerId}
                    className="px-6 pb-6 text-base leading-8 text-[var(--brand-muted)] md:px-8 md:pb-8 md:text-lg"
                  >
                    {item.answer}
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

export default LocationFaq;
