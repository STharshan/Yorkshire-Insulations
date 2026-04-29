import React, { useState } from "react";
import { Link } from "react-router-dom";

const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const SectionBadge = ({ children }) => (
  <span
    className="inline-flex rounded-md border border-[var(--brand-blue)]/16 bg-[var(--brand-blue)]/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.24em] text-[var(--brand-blue)]"
    style={headingStyle}
  >
    {children}
  </span>
);

const ServiceWorkflowSection = ({ data }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: data.contactForm.fields.service.options[0] || "",
    note: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.service) {
      alert("Please fill in all required fields (Name, Phone, and Service).");
      return;
    }

    const phoneRegex = /^[0-9\s+]{7,}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!data.contactForm.whatsappLink) {
      return;
    }

    const message = [
      `Hi, I would like a quote for ${formData.service}.`,
      `Full Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Short Note: ${formData.note.trim() || "Not provided"}`,
    ].join("\n");

    const separator = data.contactForm.whatsappLink.includes("?") ? "&" : "?";
    const url = `${data.contactForm.whatsappLink}${separator}text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[var(--brand-offwhite)] text-[var(--brand-text)]">
      <div className="mx-auto max-w-7xl px-6 py-[4.5rem] md:px-10 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-16">
            <section
              id="about-service"
              className="rounded-[10px] border border-[var(--brand-border)] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] md:p-10"
            >
              <SectionBadge>{data.badge}</SectionBadge>

              <h2
                className="mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[46px]"
                style={headingStyle}
              >
                {data.aboutService.title}
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--brand-muted)] md:text-base">
                {data.aboutService.intro.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <ul className="grid gap-3 md:grid-cols-2">
                  {data.aboutService.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-3 rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--brand-gold)]" />
                      <span className="text-[var(--brand-text)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p>{data.aboutService.outro}</p>
              </div>

              {data.aboutService.pricingSignal ? (
                <div className="mt-8 rounded-[10px] border border-[var(--brand-gold)]/35 bg-[var(--brand-gold)]/10 p-6">
                  <p className="text-base leading-7 text-[var(--brand-navy)]">
                    {data.aboutService.pricingSignal.text}
                  </p>
                  <a
                    href={data.aboutService.pricingSignal.ctaHref}
                    className="mt-5 inline-flex min-h-11 items-center justify-center bg-[var(--brand-gold)] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#b8890f]"
                    style={headingStyle}
                  >
                    {data.aboutService.pricingSignal.ctaLabel}
                  </a>
                </div>
              ) : null}

              <h3
                className="pt-8 text-2xl font-bold text-[var(--brand-navy)] md:text-[28px]"
                style={headingStyle}
              >
                {data.aboutService.includedTitle}
              </h3>

              <p className="mt-3 text-[var(--brand-muted)]">
                {data.aboutService.includedIntro}
              </p>

              <ul className="mt-6 grid gap-4">
                {data.aboutService.includedItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-panel)] px-5 py-5"
                  >
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[var(--brand-blue)] text-xs font-bold text-white"
                      style={headingStyle}
                    >
                      {index + 1}
                    </span>
                    <p className="text-[var(--brand-muted)]">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[var(--brand-muted)]">
                {data.aboutService.includedOutro}
              </p>

              {data.aboutService.extras ? (
                <div className="mt-8 rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] p-6">
                  <h3
                    className="text-2xl font-bold text-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    {data.aboutService.extras.title}
                  </h3>
                  <p className="mt-3 text-[var(--brand-muted)]">
                    {data.aboutService.extras.intro}
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {data.aboutService.extras.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-[8px] border border-[var(--brand-border)] bg-white px-4 py-4"
                      >
                        <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--brand-gold)]" />
                        <span className="text-[var(--brand-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {data.aboutService.callout ? (
                <div className="mt-8 rounded-[10px] border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/8 p-6">
                  <h3
                    className="text-2xl font-bold text-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    {data.aboutService.callout.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--brand-muted)]">
                    {data.aboutService.callout.text}
                  </p>
                </div>
              ) : null}
            </section>

            {data.howWeWork ? (
              <section
                id="how-we-work"
                className="rounded-[10px] border border-[var(--brand-border)] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] md:p-10"
              >
                <SectionBadge>{data.howWeWork.badge}</SectionBadge>

                <h2
                  className="mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[44px]"
                  style={headingStyle}
                >
                  {data.howWeWork.title}
                </h2>

                <p className="mt-4 max-w-3xl text-lg text-[var(--brand-muted)]">
                  {data.howWeWork.description}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {data.howWeWork.steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(26,44,91,0.13)]"
                    >
                      <div
                        className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[var(--brand-blue)] text-base font-bold text-white"
                        style={headingStyle}
                      >
                        {index + 1}
                      </div>

                      <h3
                        className="text-xl font-bold text-[var(--brand-navy)]"
                        style={headingStyle}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section
              id="benefits"
              className="rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-panel)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] md:p-10"
            >
              <SectionBadge>{data.benefits.badge}</SectionBadge>

              <h2
                className="mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[44px]"
                style={headingStyle}
              >
                {data.benefits.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--brand-muted)]">
                {data.benefits.intro}
              </p>

              <ul className="mt-8 space-y-4">
                {data.benefits.items.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-[10px] border border-white/80 bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
                  >
                    <span
                      className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[var(--brand-gold)] text-xs font-bold text-white"
                      style={headingStyle}
                    >
                      {index + 1}
                    </span>
                    <p className="text-[var(--brand-muted)]">{benefit}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-lg leading-8 text-[var(--brand-muted)]">
                {data.benefits.outro}
              </p>

              <div className="mt-10 overflow-hidden rounded-[10px] border border-[var(--brand-border)] bg-white p-3 shadow-[0_8px_24px_rgba(26,44,91,0.13)]">
                <img
                  src={data.benefits.image}
                  alt={data.benefits.imageAlt}
                  className="h-auto w-full rounded-[8px] object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>

              {data.relatedServices?.length ? (
                <div className="mt-8 rounded-[10px] border border-[var(--brand-border)] bg-white p-6">
                  <h3
                    className="text-2xl font-bold text-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    Related Services
                  </h3>
                  <p className="mt-3 text-[var(--brand-muted)]">
                    Explore other insulation services that are often recommended alongside this one.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {data.relatedServices.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="inline-flex min-h-11 items-center justify-center  border border-[var(--brand-border)] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
                        style={headingStyle}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[10px] border border-[var(--brand-border)] bg-white shadow-[0_6px_24px_rgba(26,44,91,0.13)]">
              <div className="border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,var(--brand-navy),var(--brand-blue))] px-8 py-1 text-white md:px-10">
                <h3
                  className="mt-2 mb-2 text-3xl font-bold md:text-[34px]"
                  style={headingStyle}
                >
                  {data.contactForm.title}
                </h3>
              </div>

              <form className="space-y-5 p-8" onSubmit={handleSubmit}>
                {/* Full Name and Phone in one line */}
                <div className="grid grid-cols-1  gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service-full-name"
                      className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                      style={headingStyle}
                    >
                      {data.contactForm.fields.fullName.label}
                    </label>
                    <input
                      id="service-full-name"
                      name="fullName"
                      required
                      type={data.contactForm.fields.fullName.type}
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={data.contactForm.fields.fullName.placeholder}
                      className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-2 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service-phone"
                      className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                      style={headingStyle}
                    >
                      {data.contactForm.fields.phone.label}
                    </label>
                    <input
                      id="service-phone"
                      name="phone"
                      required
                      type={data.contactForm.fields.phone.type}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={data.contactForm.fields.phone.placeholder}
                      className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-2 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service-select"
                    className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    {data.contactForm.fields.service.label}
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-2 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                  >
                    {data.contactForm.fields.service.options.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="service-note"
                    className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    {data.contactForm.fields.note.label}
                  </label>
                  <textarea
                    id="service-note"
                    name="note"
                    rows={data.contactForm.fields.note.rows}
                    value={formData.note}
                    onChange={handleChange}
                    placeholder={data.contactForm.fields.note.placeholder}
                    className="w-full resize-none rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-2 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-12 w-full items-center justify-center bg-[var(--brand-blue)] px-6 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[var(--brand-navy)]"
                  style={headingStyle}
                >
                  {data.contactForm.submitButton}
                </button>
              </form>

              <div className="border-t text-center border-[var(--brand-border)] bg-[var(--brand-panel)] px-8 py-5 text-sm text-[var(--brand-muted)] md:px-10">
                Trusted, no-nonsense advice with workmanship that is built to last.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceWorkflowSection;