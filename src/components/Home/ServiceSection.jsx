import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Loft Insulation",
    desc: "The most cost-effective way to reduce heat loss in your home. We install loft insulation across Yorkshire quickly and cleanly - with most jobs completed in a single day.",
    image: "loft-a.jpeg", // Using the 'after' photo as the primary
    link: "/services/loft-insulation",
  },
  {
    title: "Cavity Wall Insulation",
    desc: "We drill small holes in the outer wall and inject insulation material directly into the cavity - minimal disruption, maximum impact. Ideal for Yorkshire terraces and semis built between 1920 and 1980.",
    image: "cavity-a.jpeg",
    link: "/services/cavity-wall-insulation",
  },
  {
    title: "Spray Foam Insulation",
    desc: "A highly effective solution for hard-to-insulate spaces. Spray foam expands to fill every gap, creating an airtight seal that dramatically reduces heat loss and damp.",
    image: "spray-foam-a.jpeg",
    link: "/services/spray-foam-insulation",
  },
  {
    title: "Underfloor Insulation",
    desc: "Cold floors are a sign of significant heat loss. We install insulation beneath your floorboards to keep warmth in and energy bills down - particularly effective in older Yorkshire properties.",
    image: "underfloor-a.jpeg",
    link: "/services/underfloor-insulation",
  },
  {
    title: "External Wall Insulation",
    desc: "For solid-walled properties with no cavity, external wall insulation is the most effective solution. We clad the outside of your home with insulation boards, improving appearance and performance.",
    image: "external-wall-a.jpeg",
    link: "/services/external-wall-insulation",
  },
  {
    title: "Solid Wall Insulation",
    desc: "Pre-1920s stone-built Yorkshire homes require a different approach. Our solid wall insulation solutions are designed specifically for older properties where cavity wall simply isn't an option.",
    image: "solid-wall-a.jpeg",
    link: "/services/solid-wall-insulation",
  }
];

export default function ServiceSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(Math.max(0, Math.min(idx, services.length - 1)));
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1 >= services.length ? 0 : c + 1));
    }, 5000);
  }, []);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  const onPointerDown = (e) => setDragStart(e.clientX);
  const onPointerUp = (e) => {
    if (dragStart === null) return;
    const diff = dragStart - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setDragStart(null);
    resetAuto();
  };

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="heading-font text-4xl font-bold text-[var(--brand-text)]">Our Services</h2>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="max-w-lg text-[var(--brand-muted)]">
              Practical insulation solutions for Yorkshire homeowners - installed properly, built to last, and chosen to suit your property. 
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => { prev(); resetAuto(); }}
                disabled={current === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-blue)]/30 text-[var(--brand-blue)] transition-all duration-200 hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white disabled:opacity-25"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => { next(); resetAuto(); }}
                disabled={current === services.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-blue)]/30 text-[var(--brand-blue)] transition-all duration-200 hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white disabled:opacity-25"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
              <span className="font-mono text-sm text-[var(--brand-muted)]">
                <span className="font-bold text-[var(--brand-text)]">{String(current + 1).padStart(2, "0")}</span>
                &nbsp;/&nbsp;{String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => setDragStart(null)}
          style={{ cursor: dragStart !== null ? "grabbing" : "grab" }}
        >
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              transform: `translateX(calc(-${current} * (min(360px, 85vw) + 32px)))`,
            }}
          >
            {services.map((item, i) => {
              const isActive = i === current;
              const isNear = Math.abs(i - current) <= 1;

              return (
                <div
                  key={i}
                  className="flex-none transition-all duration-500"
                  style={{
                    width: "min(360px, 85vw)",
                    opacity: isNear ? 1 : 0.4,
                    transform: isActive ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  <div className="brand-card group overflow-hidden rounded-2xl bg-[var(--brand-panel)] transition hover:shadow-xl">
                    
                    {/* Simplified Image Container */}
                    <div className="relative m-5 h-[230px] overflow-hidden rounded-xl">
                      <img 
                        src="/logo.png"
                        alt={item.title}
                        className="h-45 w-65 mx-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-6 pb-6">
                      <h3 className="heading-font mb-2 text-lg font-semibold text-[var(--brand-text)]">{item.title}</h3>

                      <p className="line-clamp-3 text-sm text-[var(--brand-muted)]">
                        {item.desc}
                      </p>

                      <Link
                        to={item.link}
                        className="heading-font mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)] transition hover:bg-[var(--brand-navy)] hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAuto(); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "7px",
                height: "7px",
                background: i === current ? "var(--brand-blue)" : "rgba(46,79,163,0.18)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}