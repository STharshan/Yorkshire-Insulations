import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

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

const LocationHeroContact = ({ data, onSubmit }) => {
  const formFields = data?.form?.fields || {};
  const [formState, setFormState] = useState(() => getInitialFormState(formFields));

  useEffect(() => {
    setFormState(getInitialFormState(formFields));
  }, [formFields]);

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
      className="relative overflow-hidden border-b border-white/8 bg-[#22201c]"
      style={{
        backgroundImage: data.heroBackgroundImage
          ? `linear-gradient(180deg, rgba(16,14,12,0.84), rgba(28,24,20,0.94)), url(${data.heroBackgroundImage})`
          : "linear-gradient(180deg, rgba(16,14,12,0.84), rgba(28,24,20,0.94))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/4 text-stone-300 backdrop-blur"
            aria-label="More options"
          >
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-stone-400">
              {(data.breadcrumb || []).map((item, index) => {
                const isLast = index === data.breadcrumb.length - 1;

                return (
                  <div key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                      <Link to={item.href} className="transition hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-stone-100" : ""}>{item.label}</span>
                    )}
                    {!isLast ? <ChevronRight className="h-4 w-4" /> : null}
                  </div>
                );
              })}
            </nav>

            {data.badge ? (
              <span className="inline-flex rounded-full border border-white/12 bg-white/4 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                {data.badge}
              </span>
            ) : null}

            {data.title ? (
              <h1 className="mt-8 max-w-2xl text-5xl font-black tracking-tight text-white md:text-7xl">
                {data.title}
              </h1>
            ) : null}

            <div className="mt-8 max-w-3xl space-y-6 text-xl leading-10 text-stone-300">
              {(data.intro || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {data.whatsappLink ? (
              <a
                href={data.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-white/14 bg-black/15 px-6 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/8"
              >
                <MessageCircle className="h-7 w-7" />
                {data.whatsappLabel}
              </a>
            ) : null}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur md:p-10 lg:sticky lg:top-28">
            {data.form?.title ? (
              <h2 className="text-4xl font-bold text-white">{data.form.title}</h2>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {Object.entries(formFields).map(([key, config]) => {
                const fieldName = config.name || key;

                if (config.options?.length) {
                  return (
                    <div key={fieldName} className="relative">
                      <label htmlFor={fieldName} className="sr-only">
                        {config.label || fieldName}
                      </label>
                      <select
                        id={fieldName}
                        name={fieldName}
                        value={formState[fieldName] || ""}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-2xl border border-white/10 bg-[#34322d] px-6 py-5 pr-14 text-lg text-white outline-none transition focus:border-white/25"
                      >
                        <option value="">{config.placeholder || config.label}</option>
                        {config.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 text-stone-300" />
                    </div>
                  );
                }

                if (config.type === "textarea" || config.rows) {
                  return (
                    <div key={fieldName}>
                      <label htmlFor={fieldName} className="sr-only">
                        {config.label || fieldName}
                      </label>
                      <textarea
                        id={fieldName}
                        name={fieldName}
                        rows={config.rows || 5}
                        value={formState[fieldName] || ""}
                        onChange={handleChange}
                        placeholder={config.placeholder || config.label}
                        className="w-full rounded-2xl border border-white/10 bg-[#34322d] px-6 py-5 text-lg text-white placeholder:text-stone-500 outline-none transition focus:border-white/25"
                      />
                    </div>
                  );
                }

                return (
                  <div key={fieldName}>
                    <label htmlFor={fieldName} className="sr-only">
                      {config.label || fieldName}
                    </label>
                    <input
                      id={fieldName}
                      name={fieldName}
                      type={config.type || "text"}
                      value={formState[fieldName] || ""}
                      onChange={handleChange}
                      placeholder={config.placeholder || config.label}
                      className="w-full rounded-2xl border border-white/10 bg-[#34322d] px-6 py-5 text-lg text-white placeholder:text-stone-500 outline-none transition focus:border-white/25"
                    />
                  </div>
                );
              })}

              {data.form?.submitLabel ? (
                <button
                  type="submit"
                  className="w-full rounded-2xl border border-white/16 bg-white/3 px-6 py-5 text-xl font-semibold text-white transition hover:bg-white/8"
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
