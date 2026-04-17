import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const trustSignals = [
  "17+ five-star reviews",
  "Certified technicians",
  "Yorkshire-wide coverage",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(26,44,91,0.82), rgba(46,79,163,0.68)), url('/heroimage.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.24),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_34%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 md:px-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <span className="brand-badge-light">Warmth that lasts a lifetime</span>

          <h1 className="heading-font mt-8 max-w-4xl text-5xl font-extrabold tracking-[-0.04em] md:text-[72px] md:leading-[1.02]">
            Professional Insulation Solutions Across Yorkshire
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
            Honest advice, highly rated workmanship, and practical insulation
            solutions for lofts, roofs, and homes that need to stay warmer for
            longer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <div key={signal} className="brand-chip-dark">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-gold)]" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services/loft-insulation"
              className="brand-button brand-button--gold"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/locations/leeds"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] border border-white/18 bg-white/8 px-6 py-3 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/14"
            >
              Leeds Coverage
            </Link>
          </div>
        </div>

        <div className="brand-card bg-white/96 p-6 text-[var(--brand-text)] shadow-[var(--brand-panel-shadow)] backdrop-blur md:p-8">
          <div className="flex items-center gap-2 text-sm text-[var(--brand-muted)]">
            <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
            <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
            <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
            <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
            <Star className="h-4 w-4 fill-[var(--brand-star)] text-[var(--brand-star)]" />
            <span>Trusted by Yorkshire homeowners</span>
          </div>

          <h2 className="heading-font mt-6 text-3xl font-bold text-[var(--brand-navy)] md:text-[38px]">
            Clear recommendations. Clean installation. Real comfort.
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="brand-card-soft p-5">
              <p className="heading-font text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Services
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">
                Loft insulation, spray foam removal, new build insulation,
                remove and relay, and practical roof-space upgrades.
              </p>
            </div>

            <div className="brand-card-soft p-5">
              <p className="heading-font text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Coverage
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">
                Based in Yorkshire and supporting homeowners across Leeds and
                the surrounding area with dependable, no-nonsense advice.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href="tel:07590250335"
              className="flex items-center gap-3 rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 text-sm text-[var(--brand-text)]"
            >
              <Phone className="h-4 w-4 text-[var(--brand-gold)]" />
              <span>07590 250 335</span>
            </a>

            <a
              href="mailto:info@yorkshireinsulationsolutions.co.uk"
              className="flex items-center gap-3 rounded-[8px] border border-[var(--brand-border)] bg-[var(--brand-offwhite)] px-4 py-4 text-sm text-[var(--brand-text)]"
            >
              <Mail className="h-4 w-4 text-[var(--brand-gold)]" />
              <span>info@yorkshireinsulationsolutions.co.uk</span>
            </a>
          </div>

          <a
            href="https://wa.me/447590250335"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button mt-6 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
