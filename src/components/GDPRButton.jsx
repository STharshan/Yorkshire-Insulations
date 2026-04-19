import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false); // Show consent banner
  const [accepted, setAccepted] = useState(null); // true/false/null
  const [showIcon, setShowIcon] = useState(false); // Show cookie icon

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true); // show cookie icon if previously chosen
    } else {
      setVisible(true); // no previous choice
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    // Reopen consent banner
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-full rounded-[10px] border border-[var(--brand-gdpr-border)] bg-[var(--brand-gdpr-bg)] p-4 text-center text-[var(--brand-gdpr-text)] shadow-[0_12px_36px_rgba(26,44,91,0.16)] transition-colors md:bottom-6 md:left-auto md:right-6 md:max-w-xs">
          <p className="mb-2 text-center text-sm text-[var(--brand-gdpr-text)]">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3">
            <Link
              to="/privacy"
              className="text-[var(--brand-gdpr-link)] underline hover:text-[var(--brand-navy)]"
            >
              See our Privacy Policy
            </Link>

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="heading-font rounded-[6px] border-2 border-[var(--brand-blue)] bg-transparent px-4 py-3 text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)] transition hover:bg-[var(--brand-blue)] hover:text-white"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="heading-font rounded-[6px] bg-[var(--brand-blue)] px-4 py-3 text-[15px] 
                         font-semibold uppercase tracking-[0.14em] text-white hover:bg-[var(--brand-navy)] transition 
                         "
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon in Red Circle (smaller size) */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="h-10 w-10 rounded-full border border-white bg-[var(--brand-gdpr-icon-bg)] shadow-lg 
                       sm:h-12 sm:w-12
                       flex items-center justify-center hover:scale-105 transition cursor-pointer
                       "
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg" // Use your cookie icon
              alt="Cookie Icon"
              loading="lazy"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}
