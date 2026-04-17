import { MapPin } from "lucide-react";

const highlights = [
  {
    title: "Leeds Homes",
    location: "Leeds",
    description:
      "Support for terraces, semis, and newer homes that need better loft and roof-space insulation decisions.",
    image: "/heroimage.jpeg",
    tags: ["Local knowledge", "Practical advice", "Home comfort"],
  },
  {
    title: "Yorkshire Roof Spaces",
    location: "Yorkshire",
    description:
      "Careful recommendations for loft spaces that need upgrades, reinstatement, or a more dependable insulation setup.",
    image: "/about2.webp",
    tags: ["Clean installation", "Certified team", "Clear quoting"],
  },
  {
    title: "Property Assessments",
    location: "West Yorkshire",
    description:
      "Focused on real property conditions, not one-size-fits-all assumptions, so the right work gets done first time.",
    image: "/about1.webp",
    tags: ["Survey-led", "Trusted workmanship", "Yorkshire coverage"],
  },
];

const RecentProject = () => {
  return (
    <section className="bg-white py-[4.5rem] md:py-24" id="recent-projects">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center md:mb-16">
          <span className="brand-badge">Coverage & Highlights</span>
          <h2 className="heading-font mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[50px]">
            Work shaped around Yorkshire homes
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--brand-muted)] md:text-lg">
            The homepage does not need generic template project cards. This
            version keeps the visual structure but makes it fit the insulation
            brand and PDF design language.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="brand-card brand-card-hover overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <h3 className="heading-font text-[28px] font-bold text-[var(--brand-navy)]">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-[var(--brand-muted)]">
                  <MapPin className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span>{item.location}</span>
                </div>

                <p className="mt-4 text-sm leading-8 text-[var(--brand-muted)] md:text-base">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-3 py-1 text-xs font-medium text-[var(--brand-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
