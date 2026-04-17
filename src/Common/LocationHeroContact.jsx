import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const headingStyle = { fontFamily: "Montserrat, sans-serif" };
const emptyFields = Object.freeze({});

const getInitialFormState = (fields = {}) =>
  Object.fromEntries(
    Object.entries(fields).map(([key, config]) => [
      config.name || key,
      config.defaultValue || "",
    ]),
  );

const buildWhatsAppMessage = (title, fields, values) => {
  const lines = [`Hi, I am enquiring about ${title || "this location"}.`];

  Object.entries(fields).forEach(([key, config]) => {
    const fieldName = config.name || key;
    const value = values[fieldName];

    if (!value) {
      return;
    }

    lines.push(`${config.label || fieldName}: ${value}`);
  });

  return lines.join("\n");
};

const trustSignals = [
  "17+ five-star reviews",
  "Certified installers",
  "Yorkshire-first advice",
];

const LocationHeroContact = ({ data, onSubmit }) => {
  const formFields = data?.form?.fields ?? emptyFields;
  const [formState, setFormState] = useState(() => getInitialFormState(formFields));

  if (!data) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === "function") {
      onSubmit(formState, data);
      return;
    }

    if (!data.whatsappLink) {
      return;
    }

    const message = buildWhatsAppMessage(data.title, formFields, formState);
    const separator = data.whatsappLink.includes("?") ? "&" : "?";
    const url = `${data.whatsappLink}${separator}text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,var(--brand-navy),var(--brand-blue))] text-white"
      style={{
        backgroundImage: data.heroBackgroundImage
          ? `linear-gradient(135deg, rgba(26,44,91,0.92), rgba(46,79,163,0.86)), url(${data.heroBackgroundImage})`
          : "linear-gradient(135deg, rgba(26,44,91,0.98), rgba(46,79,163,0.92))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.25),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-[7.5rem] md:px-10 md:pb-24 md:pt-[9.5rem]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/70">
              {(data.breadcrumb || []).map((item, index) => {
                const isLast = index === data.breadcrumb.length - 1;

                return (
                  <div key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                      <Link to={item.href} className="transition hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-[var(--brand-gold)]" : ""}>
                        {item.label}
                      </span>
                    )}
                    {!isLast ? <ChevronRight className="h-4 w-4" /> : null}
                  </div>
                );
              })}
            </nav>

            {data.badge ? (
              <span
                className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.24em] text-[var(--brand-gold)]"
                style={headingStyle}
              >
                {data.badge}
              </span>
            ) : null}

            {data.title ? (
              <h1
                className="mt-8 max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-white md:text-[68px] md:leading-[1.02]"
                style={headingStyle}
              >
                {data.title}
              </h1>
            ) : null}

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-white/84 md:text-xl md:leading-10">
              {(data.intro || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-black/12 px-4 py-2 text-sm text-white/82 backdrop-blur"
                >
                  <ShieldCheck className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/85">
                <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
                <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
                <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
                <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
                <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
                <span className="ml-1">Trusted local team</span>
              </div>

              {data.whatsappLink ? (
                <a
                  href={data.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-[var(--brand-gold)] px-7 py-3 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[#b8890f]"
                  style={headingStyle}
                >
                  <MessageCircle className="h-5 w-5" />
                  {data.whatsappLabel}
                </a>
              ) : null}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[10px] border border-[var(--brand-border)] bg-white text-[var(--brand-text)] shadow-[0_12px_36px_rgba(26,44,91,0.18)] lg:sticky lg:top-28">
            <div className="border-b border-[var(--brand-border)] bg-[var(--brand-panel)] px-6 py-6 md:px-8">
              <p
                className="text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)]"
                style={headingStyle}
              >
                Local Enquiry
              </p>

              {data.form?.title ? (
                <h2
                  className="mt-3 text-4xl font-bold text-[var(--brand-navy)]"
                  style={headingStyle}
                >
                  {data.form.title}
                </h2>
              ) : null}

              <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">
                Share a few property details and we will point you to the right insulation option.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
              {Object.entries(formFields).map(([key, config]) => {
                const fieldName = config.name || key;

                if (config.options?.length) {
                  return (
                    <div key={fieldName} className="relative">
                      <label
                        htmlFor={fieldName}
                        className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                        style={headingStyle}
                      >
                        {config.label || fieldName}
                      </label>

                      <select
                        id={fieldName}
                        name={fieldName}
                        value={formState[fieldName] || ""}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 pr-12 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                      >
                        <option value="">{config.placeholder || config.label}</option>
                        {config.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <ChevronDown className="pointer-events-none absolute right-4 top-[53px] h-5 w-5 text-[var(--brand-muted)]" />
                    </div>
                  );
                }

                if (config.type === "textarea" || config.rows) {
                  return (
                    <div key={fieldName}>
                      <label
                        htmlFor={fieldName}
                        className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                        style={headingStyle}
                      >
                        {config.label || fieldName}
                      </label>

                      <textarea
                        id={fieldName}
                        name={fieldName}
                        rows={config.rows || 5}
                        value={formState[fieldName] || ""}
                        onChange={handleChange}
                        placeholder={config.placeholder || config.label}
                        className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 text-[15px] text-[var(--brand-text)] placeholder:text-[var(--brand-muted)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                      />
                    </div>
                  );
                }

                return (
                  <div key={fieldName}>
                    <label
                      htmlFor={fieldName}
                      className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]"
                      style={headingStyle}
                    >
                      {config.label || fieldName}
                    </label>

                    <input
                      id={fieldName}
                      name={fieldName}
                      type={config.type || "text"}
                      value={formState[fieldName] || ""}
                      onChange={handleChange}
                      placeholder={config.placeholder || config.label}
                      className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 text-[15px] text-[var(--brand-text)] placeholder:text-[var(--brand-muted)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                    />
                  </div>
                );
              })}

              {data.form?.submitLabel ? (
                <button
                  type="submit"
                  className="flex min-h-12 w-full items-center justify-center rounded-[6px] bg-[var(--brand-blue)] px-6 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[var(--brand-navy)]"
                  style={headingStyle}
                >
                  {data.form.submitLabel}
                </button>
              ) : null}
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LocationHeroContact;
