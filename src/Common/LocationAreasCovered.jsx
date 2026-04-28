const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const SectionBadge = ({ children }) => (
  <span
    className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--brand-gold)]"
    style={headingStyle}
  >
    {children}
  </span>
);

const LocationAreasCovered = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(46,79,163,0.28),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-[4.5rem] md:px-10 md:py-24">
        <SectionBadge>{data.badge}</SectionBadge>

        <h2
          className="mt-8 max-w-5xl text-4xl font-extrabold tracking-[-0.03em] md:text-[52px]"
          style={headingStyle}
        >
          {data.title}
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
          {data.intro}
        </p>

        {/* Main Leeds Items */}
        <div className="mt-12 flex flex-wrap gap-4">
          {data.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-[999px] border border-white/16 bg-white/8 px-5 py-3 text-sm font-medium text-white/86 backdrop-blur md:text-base"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Visual Separator & Secondary Sections */}
        <div className="mt-20 flex items-center gap-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/40" style={headingStyle}>
            We also cover across Yorkshire & beyond
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-white/20 to-transparent" />
        </div>

        <div className="mt-12 space-y-10">
          {data.additionalRegions?.map((region) => (
            <div key={region.label}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--brand-gold)]" style={headingStyle}>
                {region.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {region.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center rounded-[999px] text-sm font-medium text-white/86 border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-white/30"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Box */}
        <div className="mt-16 flex flex-col items-start gap-6 rounded-[10px] border border-white/12 bg-black/10 px-6 py-6 text-sm leading-7 text-white/74 md:max-w-3xl md:flex-row md:items-center md:justify-between">
          <p>
            We cover Leeds, Yorkshire, and surrounding regions - with practical
            recommendations based on the age, build type, and condition of your
            property. Not sure if we cover your area?
          </p>
          
          <a
            href="#home" 
            className="whitespace-nowrap border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-[var(--brand-gold)] transition-all hover:bg-[var(--brand-gold)] hover:text-white"
            style={headingStyle}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationAreasCovered;