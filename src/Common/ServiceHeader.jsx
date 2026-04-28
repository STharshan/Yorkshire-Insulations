import React from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const defaultTrustPoints = [
  "Warmth that lasts",
  "Yorkshire coverage",
  "Clear fixed quotes",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ServiceHeader = ({ data }) => {
  const breadcrumbs = data.breadcrumbs ?? [
    { label: "Home" },
    { label: "Services" },
    { label: data.breadcrumbTitle, current: true },
  ];

  const trustPoints = data.trustPoints ?? defaultTrustPoints;

  return (
    <section id="home" className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,var(--brand-navy),var(--brand-blue))] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_32%)]" />

      <header className="relative mx-auto mt-24 max-w-7xl px-6 pt-6 md:px-10">
        <nav className="flex flex-wrap items-center gap-2 text-[11px] pt-10 font-semibold uppercase tracking-[0.24em] text-white/72">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 ? <span className="text-white/40">/</span> : null}
              <span className={item.current ? "text-[var(--brand-gold)]" : ""}>
                {item.label}
              </span>
            </React.Fragment>
          ))}
        </nav>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-[4.5rem] pt-8 md:px-10 md:pb-24 md:pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <Motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Motion.span
              variants={textRevealVariants}
              className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.26em] text-[var(--brand-gold)]"
              style={headingStyle}
            >
              Yorkshire Insulation Solutions
            </Motion.span>

            <Motion.h1
              variants={textRevealVariants}
              className="mt-6 max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-white md:text-[68px] md:leading-[1.02]"
              style={headingStyle}
            >
              {data.title}
            </Motion.h1>

            <Motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl"
            >
              {data.description}
            </Motion.p>

            <Motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex rounded-md border border-white/14 bg-black/12 px-4 py-2 text-sm text-white/82 backdrop-blur"
                >
                  {point}
                </span>
              ))}
            </Motion.div>

            <Motion.div
              variants={fadeUpVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={data.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[var(--brand-gold)] px-7 py-3 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[#b8890f]"
                style={headingStyle}
              >
                Get a Quote
              </a>
              <div className="text-sm text-white/68">
                Local advice, practical recommendations, and a clean installation.
              </div>
            </Motion.div>

            {data.contactDetails ? (
              <Motion.div
                variants={fadeUpVariants}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a
                  href={data.contactDetails.phoneHref}
                  className="inline-flex items-center gap-3 rounded-md border border-white/14 bg-white/8 px-4 py-3 text-sm text-white/86 transition hover:bg-white/12"
                >
                  <Phone className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span>{data.contactDetails.phoneLabel}</span>
                </a>

                <a
                  href={data.contactDetails.emailHref}
                  className="inline-flex items-center gap-3 rounded-md border border-white/14 bg-white/8 px-4 py-3 text-sm text-white/86 transition hover:bg-white/12"
                >
                  <Mail className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span>{data.contactDetails.emailLabel}</span>
                </a>
              </Motion.div>
            ) : null}
          </Motion.div>

          <Motion.div
            className="relative"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </Motion.div>
        </div>
      </main>
    </section>
  );
};

export default ServiceHeader;
