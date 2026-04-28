import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
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
  let message = `*New Enquiry for ${title || "Yorkshire Insulation"}*\n\n`;

  Object.entries(fields).forEach(([key, config]) => {
    const fieldName = config.name || key;
    const label = config.label || fieldName;
    const value = values[fieldName];

    if (value) {
      message += `*${label}*: ${value}\n`;
    }
  });

  return message;
};

const trustSignals = [
  "17+ five-star reviews",
  "Certified installers",
  "Yorkshire-first advice",
];

const LocationHeroContact = ({ data, onSubmit }) => {
  const formFields = data?.form?.fields ?? emptyFields;
  const [formState, setFormState] = useState(() => getInitialFormState(formFields));

  if (!data) return null;

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

    const phoneNumber = data.whatsappNumber || "447526322379";
    const message = buildWhatsAppMessage(data.title, formFields, formState);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
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
            {/* Breadcrumbs */}
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

            {data.badge && (
              <span className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.24em] text-[var(--brand-gold)]" style={headingStyle}>
                {data.badge}
              </span>
            )}

            <h1 className="mt-8 max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-white md:text-[68px] md:leading-[1.02]" style={headingStyle}>
              {data.title}
            </h1>

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-white/84 md:text-xl md:leading-10">
              {(data.intro || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustSignals.map((signal) => (
                <div key={signal} className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-black/12 px-4 py-2 text-sm text-white/82 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <aside className="overflow-hidden rounded-[10px] bg-white text-[var(--brand-text)] shadow-[0_12px_36px_rgba(26,44,91,0.18)] lg:sticky lg:top-28">
            <div className="bg-[var(--brand-navy)] px-6 py-1 md:px-8">
              <h2 className="mt-2 mb-2 text-4xl font-bold text-[var(--brand-panel)]" style={headingStyle}>
                {data.form?.title || "Get a Quote"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              {/* Added grid layout to the field container */}
              <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                {Object.entries(formFields).map(([key, config]) => {
                  const fieldName = config.name || key;
                  const labelText = config.label || fieldName;

                  // Logic to detect if field should be half-width
                  const isHalfWidth = 
                    fieldName.toLowerCase().includes("name") || 
                    fieldName.toLowerCase().includes("phone");

                  return (
                    <div 
                      key={fieldName} 
                      className={isHalfWidth ? "col-span-1" : "col-span-1 md:col-span-2"}
                    >
                      <label htmlFor={fieldName} className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)]" style={headingStyle}>
                        {labelText}
                      </label>

                      {config.options?.length ? (
                        <div className="relative">
                          <select
                            id={fieldName}
                            name={fieldName}
                            required
                            value={formState[fieldName] || ""}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 pr-12 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                          >
                            <option value="">Select an option...</option>
                            {config.options.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--brand-muted)]" />
                        </div>
                      ) : config.type === "textarea" ? (
                        <textarea
                          id={fieldName}
                          name={fieldName}
                          required
                          rows={config.rows || 4}
                          value={formState[fieldName] || ""}
                          onChange={handleChange}
                          placeholder={config.placeholder}
                          className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                        />
                      ) : (
                        <input
                          id={fieldName}
                          name={fieldName}
                          required
                          type={config.type || "text"}
                          value={formState[fieldName] || ""}
                          onChange={handleChange}
                          placeholder={config.placeholder}
                          className="w-full rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 text-[15px] text-[var(--brand-text)] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white"
                        />
                      )}
                    </div>
                  );
                })}

                {/* Submit button spans both columns */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center gap-3  bg-[var(--brand-blue)] px-6 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[var(--brand-navy)]"
                    style={headingStyle}
                  >
                    <MessageCircle className="h-5 w-5" />
                    {data.form?.submitLabel || "Send Enquiry via WhatsApp"}
                  </button>
                </div>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LocationHeroContact;