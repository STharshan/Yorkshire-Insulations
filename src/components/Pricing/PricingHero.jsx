import { ShieldCheck } from "lucide-react";

const pricingBadges = [
  "No VAT on eco loft installations",
  "Assessment fee deducted from bill",
  "All prices include labour",
];

const PricingHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[#1B2A6B] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-[7.5rem] md:px-10 md:pb-20 md:pt-[9rem]">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
            Pricing
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-[-0.04em] text-white md:text-[68px] md:leading-[1.02]">
            Transparent Pricing - No Hidden Costs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/84 md:text-xl">
            Every price includes labour, product and clean-up. Assessment fees
            are deducted from your final bill if you go ahead. Use the
            estimators below to get a rough idea before you get in touch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {pricingBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-black/12 px-4 py-2 text-sm text-white/82 backdrop-blur"
              >
                <ShieldCheck className="h-4 w-4 text-[var(--brand-gold)]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
