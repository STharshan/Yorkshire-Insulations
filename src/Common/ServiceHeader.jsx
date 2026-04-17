import React from "react";

const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const trustPoints = [
  "Warmth that lasts",
  "Yorkshire coverage",
  "Clear fixed quotes",
];

const ServiceHeader = ({ data }) => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,var(--brand-navy),var(--brand-blue))] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_32%)]" />

      <header className="relative mx-auto mt-24 max-w-7xl px-6 pt-6 md:px-10">
        <nav className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
          <span>Home</span>
          <span className="text-white/40">/</span>
          <span>Services</span>
          <span className="text-white/40">/</span>
          <span className="text-[var(--brand-gold)]">{data.breadcrumbTitle}</span>
        </nav>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-[4.5rem] pt-8 md:px-10 md:pb-24 md:pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <span
              className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.26em] text-[var(--brand-gold)]"
              style={headingStyle}
            >
              Yorkshire Insulation Solutions
            </span>

            <h1
              className="mt-6 max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-white md:text-[68px] md:leading-[1.02]"
              style={headingStyle}
            >
              {data.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
              {data.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex rounded-md border border-white/14 bg-black/12 px-4 py-2 text-sm text-white/82 backdrop-blur"
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={data.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--brand-gold)] px-7 py-3 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[#b8890f]"
                style={headingStyle}
              >
                Get a Quote
              </a>
              <div className="text-sm text-white/68">
                Local advice, practical recommendations, and a clean installation.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-md border border-white/12 bg-white/6 lg:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-md bg-[var(--brand-gold)]/18 lg:block" />

            <div className="relative overflow-hidden rounded-[10px] border border-white/14 bg-white/8 p-3 shadow-[0_24px_70px_rgba(10,22,48,0.34)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[8px] border border-white/14 bg-[var(--brand-dark)]">
                <img
                  src={data.image}
                  alt={data.imageAlt || data.title}
                  className="h-[320px] w-full object-cover object-top md:h-[540px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,54,0)_15%,rgba(12,24,54,0.18)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ServiceHeader;
