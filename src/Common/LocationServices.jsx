const SectionBadge = ({ children }) => (
  <span className="inline-flex rounded-full border border-white/12 bg-white/4 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
    {children}
  </span>
);

const LocationServices = ({ data }) => {
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="flex gap-6">
                <span className="mt-3 h-4 w-4 flex-shrink-0 rounded-full bg-[#171717]" />

                <div>
                  <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                  <p className="mt-6 text-2xl leading-10 text-stone-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10" />
      </div>
    </section>
  );
};

export default LocationServices;
