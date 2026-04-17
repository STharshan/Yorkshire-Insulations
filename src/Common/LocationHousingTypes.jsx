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

const SectionBadge = ({ children }) => (
  <span className="inline-flex rounded-full border border-white/12 bg-white/4 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
    {children}
  </span>
);

const LocationHousingTypes = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative border-b border-white/8 bg-[#22201c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <SectionBadge>{data.badge}</SectionBadge>

        <h2 className="mt-8 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
          {data.title}
        </h2>

        <p className="mt-8 max-w-6xl text-2xl leading-11 text-stone-300">
          {data.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item) => {
            const Icon = iconMap[item.icon] || House;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/6 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-stone-200">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 text-2xl leading-10 text-stone-300">
                  {item.subtitle}
                </p>

                <ul className="mt-8 space-y-4 text-xl leading-9 text-stone-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-4">
                      <span className="mt-3 h-2.5 w-2.5 rounded-full bg-stone-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="pointer-events-none absolute bottom-[-38px] left-1/2 hidden h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-[#2b2925] text-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:flex">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default LocationHousingTypes;
