const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const SectionBadge = ({ children }) => (
  <span
    className="inline-flex rounded-md border border-[var(--brand-blue)]/16 bg-[var(--brand-blue)]/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)]"
    style={headingStyle}
  >
    {children}
  </span>
);

const LocationServices = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="border-b border-[var(--brand-border)] bg-white text-[var(--brand-text)]">
      <div className="mx-auto max-w-7xl px-6 py-[4.5rem] md:px-10 md:py-24">
        <SectionBadge>{data.badge}</SectionBadge>

        <h2
          className="mt-8 max-w-5xl text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[52px]"
          style={headingStyle}
        >
          {data.title}
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--brand-muted)] md:text-xl">
          {data.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(26,44,91,0.13)]"
            >
              <div className="flex gap-6">
                <span className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-[var(--brand-gold)]" />

                <div>
                  <h3
                    className="text-[28px] font-bold text-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-[var(--brand-muted)] md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--brand-border)]" />
      </div>
    </section>
  );
};

export default LocationServices;
