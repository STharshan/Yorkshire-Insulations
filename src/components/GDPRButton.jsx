import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [consentState, setConsentState] = useState(() => {
    const consent = localStorage.getItem("gdprConsent");

    if (consent === "true" || consent === "false") {
      return { visible: false, showIcon: true };
    }

    return { visible: true, showIcon: false };
  });

  useEffect(() => {
    document.documentElement.dataset.gdprConsent =
      localStorage.getItem("gdprConsent") || "unset";
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    document.documentElement.dataset.gdprConsent = "true";
    setConsentState({ visible: false, showIcon: true });
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    document.documentElement.dataset.gdprConsent = "false";
    setConsentState({ visible: false, showIcon: true });
  };

  const handleIconClick = () => {
    setConsentState({ visible: true, showIcon: false });
  };

  return (
    <>
      {/* Cookie Banner */}
      {consentState.visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-4 rounded-lg 
                         text-[var(--brand-offwhite)] shadow-lg z-50 
                      bg-[var(--brand-gdpr-bg)] transition-colors">
          <p className="text-sm mb-2 text-center text-white">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3">
            <Link
              to="/privacy"
              className="text-[var(--brand-accent)] underline hover:text-[var(--brand-accent-hover)]"
            >
              See our Privacy Policy
            </Link>

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="rounded bg-[var(--brand-accent)] px-4 py-2 text-sm text-[var(--brand-navy)] transition hover:bg-[var(--brand-accent-hover)]"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="rounded bg-[var(--brand-blue)] px-4 py-2 text-sm 
                         text-white hover:bg-[var(--brand-navy)] transition 
                         "
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon in Red Circle (smaller size) */}
      {consentState.showIcon && !consentState.visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-gdpr-icon-bg)] shadow-lg border border-white 
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
