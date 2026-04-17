import {
  Blocks,
  Building2,
  ChevronDown,
  Construction,
  House,
  HousePlus,
  Warehouse,
} from "lucide-react";

const iconMap = {
  terrace: House,
  semi: HousePlus,
  newbuild: Construction,
  stone: Blocks,
  apartment: Building2,
  estate: Warehouse,
};

const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const SectionBadge = ({ children }) => (
  <span
    className="inline-flex rounded-md border border-[var(--brand-blue)]/16 bg-[var(--brand-blue)]/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)]"
    style={headingStyle}
  >
    {children}
  </span>
);

const LocationHousingTypes = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative border-b border-[var(--brand-border)] bg-[var(--brand-offwhite)] text-[var(--brand-text)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top_left,rgba(46,79,163,0.09),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 py-[4.5rem] md:px-10 md:py-24">
        <SectionBadge>{data.badge}</SectionBadge>

        <h2
          className="mt-8 max-w-5xl text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[52px]"
          style={headingStyle}
        >
          {data.title}
        </h2>

        <p className="mt-6 max-w-5xl text-lg leading-8 text-[var(--brand-muted)] md:text-xl">
          {data.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item) => {
            const Icon = iconMap[item.icon] || House;

            return (
              <article
                key={item.title}
                className="rounded-[10px] border border-[var(--brand-border)] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(26,44,91,0.13)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[var(--brand-panel)] text-[var(--brand-blue)]">
                  <Icon className="h-8 w-8" />
                </div>

                <h3
                  className="mt-6 text-[28px] font-bold text-[var(--brand-navy)]"
                  style={headingStyle}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">
                  {item.subtitle}
                </p>

                <ul className="mt-6 space-y-3 text-[15px] leading-7 text-[var(--brand-muted)]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--brand-gold)]" />
                      <span className="text-[var(--brand-text)]">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="pointer-events-none absolute bottom-[-26px] left-1/2 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--brand-border)] bg-white text-[var(--brand-blue)] shadow-[0_8px_24px_rgba(26,44,91,0.13)] md:flex">
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default LocationHousingTypes;
