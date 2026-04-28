const PricingCardShell = ({
  eyebrow,
  title,
  subtitle,
  icon,
  children,
}) => {
  const Icon = icon;

  return (
    <section className="flex h-full flex-col rounded-[10px] border border-[var(--brand-border)] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(26,44,91,0.13)]">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C8962E]">
        {eyebrow}
      </span>

      <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[var(--brand-panel)] text-[var(--brand-blue)]">
        <Icon className="h-8 w-8" />
      </div>

      <h2 className="mt-6 text-[28px] font-bold text-[var(--brand-navy)]">
        {title}
      </h2>

      <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">
        {subtitle}
      </p>

      <div className="mt-6 flex flex-1 flex-col border-t border-[var(--brand-border)] pt-6">
        {children}
      </div>
    </section>
  );
};

export default PricingCardShell;
