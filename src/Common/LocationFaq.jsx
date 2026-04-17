import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const LocationFaq = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data) {
    return null;
  }

  return (
    <section className="bg-[#f7f6f3] text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e11d2e]">
            {data.badge}
          </p>
          <h2 className="mt-8 max-w-xl text-5xl font-black tracking-tight md:text-7xl">
            {data.title}
          </h2>
        </div>

        <div className="space-y-6">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[2rem] bg-[#f1f1ef] shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-6 px-8 py-8 text-left"
                >
                  <span className="text-2xl font-bold leading-9 md:text-[2rem]">
                    {item.question}
                  </span>
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[#c6d4ea] text-[#5a6b85]">
                    {isOpen ? (
                      <ChevronDown className="h-8 w-8" />
                    ) : (
                      <Plus className="h-8 w-8" />
                    )}
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-8 pb-8 text-xl leading-10 text-slate-600">
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
