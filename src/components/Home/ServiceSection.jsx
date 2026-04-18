import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Window Tinting",
    desc: "Enhance your vehicle's style, comfort, and privacy with our professional window tinting services. We use premium films to reduce heat, block UV rays, and prevent interior fading while giving your car a sleek, modern look.",
    before: "tint-b.jpeg",
    after: "tint-a.jpeg",
    link: "/Window-Tinting",
  },
  {
    title: "Headlight Restoration",
    desc: "Bring clarity back to your headlights with our advanced restoration services. We remove oxidation, yellowing, and scratches to improve night-time visibility and restore headlights to near-new condition.",
    before: "Headlight Restoration-b.jpeg",
    after: "Headlight Restoration-a.jpeg",
    link: "/Headlight-Restoration",
  },
  {
    title: "Headlight Crack Repair",
    desc: "Avoid unnecessary replacements with our expert headlight crack repair services. We fix cracks to prevent moisture ingress, stop further damage, and extend headlight lifespan.",
    before: "Crack-b.jpeg",
    after: "Crack-a .jpeg",
    link: "/Crack-Repair",
  },
  {
    title: "Headlight Condensation Repair",
    desc: "Moisture inside headlights can reduce visibility and damage electrical components. Our condensation repair services restore clarity and prevent future fogging for safer driving.",
    before: "Condensation-b.jpeg",
    after: "Condensation-a.jpeg",
    link: "/Condensation-Repair",
  },
  {
    title: "Headlight Lens Replacement",
    desc: "When restoration isn't enough, we provide professional headlight lens replacement services. Our high-quality replacements ensure optimal light output, improved safety, and a refreshed vehicle appearance.",
    before: "Crack1-b.jpeg",
    after: "Crack1-a .jpeg",
    link: "/Lens-Replacement",
  },
  {
    title: "Exterior Enhancement",
    desc: "From window tinting to headlight maintenance, our exterior vehicle services enhance aesthetics, safety, and functionality. Every project is completed with precision, care, and premium materials.",
    before: "Exterior-b.jpeg",
    after: "Exterior-a.jpeg",
    link: "/Headlight",
  },
  {
    title: "Building Window Tinting",
    desc: "Upgrade comfort, privacy, and heat protection with professional building window tinting for homes, offices, terraces, and custom spaces. Reduce glare, block UV rays, and create a clean modern finish.",
    before: "building-b.jpeg",
    after: "building-a.jpeg",
    link: "/Building-Window-Tinting",
  },
  {
    title: "Ambient Light Installation",
    desc: "Transform your vehicle or space with intelligent ambient lighting. We install clean, safe, and professionally wired lighting solutions that improve visibility, enhance mood, and add a premium look.",
    before: "ambient1.jpeg",
    after: "ambient2.jpeg",
    link: "/Intelligent-Ambient-Light-Installation",
  },
  {
    title: "Interior Trims Restoration",
    desc: "Bring your interior back to life with trim restoration and wrapping. We repair worn or faded trims and apply high-quality wraps for a fresh, modern look—perfect for upgrading panels and interior detailing.",
    before: "interior.jpeg",
    after: "interior1.jpeg",
    link: "/Interior-Trims-Restoration",
  }
];

function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    updateFromClientX(e.clientX);
    const move = (ev) => dragging.current && updateFromClientX(ev.clientX);
    const up = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onTouchMove = (e) => {
    if (e.touches?.[0]) updateFromClientX(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      className="relative h-full w-full overflow-hidden cursor-ew-resize select-none rounded-xl"
      style={{ touchAction: "none" }}
    >
      <img
        src={after}
        className="h-full w-full object-top"
        draggable="false"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          className="absolute inset-0 h-full w-full object-top"
          draggable="false"
        />
      </div>

      <div
        className="absolute top-0 h-full w-[2px] bg-[var(--brand-gold)]"
        style={{ left: `${pos}%` }}
      >
        <div
          className="
            absolute left-1/2 top-1/2
            flex h-10 w-10 -translate-x-1/2 -translate-y-1/2
            cursor-ew-resize items-center justify-center gap-1 rounded-full
            bg-[var(--brand-gold)] text-white
            shadow-lg
          "
        >
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}

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
              Professional exterior upgrades designed to improve appearance, safety, and comfort.
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

                    <div
                      className="relative m-5 h-[230px] overflow-hidden rounded-xl cursor-ew-resize select-none"
                    >
                      <BeforeAfterSlider
                        before={item.before}
                        after={item.after}
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
