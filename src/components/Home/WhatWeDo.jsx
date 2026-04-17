import {
  ArrowRight,
  Blocks,
  Construction,
  Home,
  ShieldCheck,
  SprayCan,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Loft Insulation",
    description:
      "A fast, effective way to reduce heat loss and improve comfort in homes across Yorkshire.",
    to: "/services/loft-insulation",
  },
  {
    icon: SprayCan,
    title: "Spray Foam Removal",
    description:
      "Targeted removal work for roof spaces that need careful attention and the right next-step advice.",
    href: "https://wa.me/447590250335",
  },
  {
    icon: Construction,
    title: "New Build Insulation",
    description:
      "Support for projects that need insulation installed properly from the start.",
    href: "https://wa.me/447590250335",
  },
  {
    icon: Blocks,
    title: "Remove & Relay",
    description:
      "Practical roof-space work where insulation needs to be lifted, corrected, and reinstated.",
    href: "https://wa.me/447590250335",
  },
  {
    icon: ShieldCheck,
    title: "Pest Control Support",
    description:
      "Advice and follow-on work where loft spaces have been affected and need safe remediation.",
    href: "https://wa.me/447590250335",
  },
  {
    icon: Wrench,
    title: "Property-Specific Advice",
    description:
      "Recommendations shaped around the age, construction type, and condition of the property.",
    href: "https://wa.me/447590250335",
  },
];

const ServiceAction = ({ service }) => {
  if (service.to) {
    return (
      <Link
        to={service.to}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] transition hover:text-[var(--brand-navy)]"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <a
      href={service.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] transition hover:text-[var(--brand-navy)]"
    >
      Get a Quote
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};

export function WhatWeDo() {
  return (
    <section className="bg-white py-[4.5rem] md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <span className="brand-badge">Our Services</span>
          <h2 className="heading-font mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[52px]">
            Insulation work shaped around real homes and real roof spaces
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--brand-muted)] md:text-lg">
            The PDF guide highlights a clean hierarchy, professional cards, and
            strong trust signals. This services section follows that system
            closely.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="brand-card brand-card-hover p-8 md:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[var(--brand-panel)] text-[var(--brand-blue)]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="heading-font mt-6 text-[28px] font-bold text-[var(--brand-navy)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-[var(--brand-muted)] md:text-base">
                  {service.description}
                </p>

                <ServiceAction service={service} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
