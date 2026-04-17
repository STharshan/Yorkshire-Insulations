import { Check } from "lucide-react";

const highlights = [
  "Honest, trusted, and highly rated local service",
  "Certified technicians who work cleanly and carefully",
  "Clear advice tailored to the property, not guesswork",
];

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-white py-[4.5rem] md:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[420px]">
          <div className="brand-media-frame absolute left-0 top-0 w-[72%] overflow-hidden">
            <img
              src="/about2.webp"
              alt="Yorkshire insulation installation"
              className="h-[360px] w-full object-cover"
            />
          </div>

          <div className="brand-card absolute left-[8%] top-8 z-20 max-w-[220px] bg-white p-4 shadow-[var(--brand-card-hover-shadow)]">
            <img
              src="/about.png"
              alt="Yorkshire Insulation badge"
              className="w-full object-cover"
            />
          </div>

          <div className="brand-media-frame absolute bottom-0 right-0 z-10 w-[62%] overflow-hidden">
            <img
              src="/about1.webp"
              alt="Home insulation team at work"
              className="h-[290px] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="brand-badge">Company Overview</span>

          <h2 className="heading-font mt-8 text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-[52px]">
            Professional but approachable, with advice you can trust
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-muted)] md:text-lg">
            Yorkshire Insulation Solutions helps homeowners reduce heat loss,
            improve comfort, and make informed decisions about loft and roof
            insulation. We focus on practical recommendations, clean work, and
            results that make a real difference in everyday living.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[10px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-5 py-4"
              >
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--brand-success)]/30 bg-white text-[var(--brand-success)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium leading-7 text-[var(--brand-text)] md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/447590250335"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button brand-button--gold mt-10"
          >
            Get Advice
          </a>
        </div>
      </div>
    </section>
  );
}
