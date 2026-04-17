const steps = [
  {
    number: "01",
    title: "Survey the Property",
    description:
      "We look at the loft, roof space, and existing insulation so the recommendation is based on the actual property condition.",
  },
  {
    number: "02",
    title: "Recommend the Right Solution",
    description:
      "You get clear advice on what is worth doing, what is not, and how the work should be approached.",
  },
  {
    number: "03",
    title: "Install Cleanly",
    description:
      "Our team carries out the work carefully, keeping disruption low and workmanship standards high.",
  },
  {
    number: "04",
    title: "Leave You With Confidence",
    description:
      "We explain what has been done and what it means for comfort, heat retention, and long-term performance.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[var(--brand-panel)] py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="brand-badge">How We Work</span>
            <h2 className="heading-font mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[50px]">
              Straightforward process, handled properly
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--brand-muted)] md:text-lg">
            This section follows the PDF’s card, border, and spacing system:
            white surfaces, light grey borders, measured shadows, and bold
            Montserrat headings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="brand-card p-8"
            >
              <div className="heading-font text-sm font-bold tracking-[0.2em] text-[var(--brand-gold)]">
                {step.number}
              </div>

              <h3 className="heading-font mt-5 text-[26px] font-bold text-[var(--brand-navy)]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-8 text-[var(--brand-muted)] md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
