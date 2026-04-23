import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <>
      <Seo
        title="404 - Page Not Found"
        description="The page you requested could not be found on Yorkshire Insulation."
        robots="noindex,nofollow"
      />

      <section className="bg-[var(--brand-offwhite)] px-6 py-40 text-[var(--brand-text)]">
        <div className="mx-auto max-w-3xl rounded-[10px] border border-[var(--brand-border)] bg-white p-10 text-center shadow-[0_6px_24px_rgba(26,44,91,0.08)]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
            404
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-[var(--brand-navy)]">
            Page Not Found
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center justify-center rounded-[6px] bg-[var(--brand-blue)] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--brand-navy)]"
            >
              Go Home
            </Link>
            <Link
              to="/loft-insulation"
              className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-[var(--brand-border)] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
