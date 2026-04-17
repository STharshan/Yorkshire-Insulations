const SectionBadge = ({ children }) => (
  <span className="inline-flex rounded-full border border-white/12 bg-white/4 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
    {children}
  </span>
);

const LocationAreasCovered = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="border-b border-white/8 bg-[#22201c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <SectionBadge>{data.badge}</SectionBadge>

        <h2 className="mt-8 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
          {data.title}
        </h2>

        <p className="mt-8 max-w-5xl text-2xl leading-11 text-stone-300">
          {data.intro}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          {data.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-white/16 bg-white/3 px-6 py-4 text-2xl font-medium text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10" />
      </div>
    </section>
  );
};

export default LocationAreasCovered;
