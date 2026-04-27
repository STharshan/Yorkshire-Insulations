import { useMemo, useState } from "react";
import Seo from "../components/Seo";

const loftModes = {
  topup: {
    label: "Top-up (200mm)",
    rateMin: 8,
    rateMax: 12,
    helper: "No VAT applies on eco top-up installations",
    helperClasses: "bg-[#EAF5EA] border-[#B8DCB8] text-[#3A7A3A]",
    note: "Confirmed after assessment",
  },
  removalRelay: {
    label: "Removal & relay",
    rateMin: 18,
    rateMax: 26,
    helper: "Best for lofts needing old insulation lifted, cleared and replaced.",
    helperClasses: "bg-[#EEF1FB] border-[#C0CCEE] text-[#1B2A6B]",
    note: "Confirmed after assessment",
  },
};

const cavityRates = {
  "40mm": 23,
  "50mm": 25,
  "100mm": 28,
};

const foamRates = {
  open: 52,
  closed: 80,
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const formatRange = (min, max) => {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return "Enter details above";
  }

  return `${formatCurrency(min)} - ${formatCurrency(max)}`;
};

const parsePositive = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};

const cardClass =
  "rounded-[12px] border border-[#E5E7EB] bg-[#F7F8FA] p-6 shadow-[0_16px_40px_rgba(17,24,39,0.04)]";

const inputClass =
  "w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1B2A6B] outline-none transition focus:border-[#1B2A6B]";

const tabClass = (active) =>
  `rounded-[8px] px-4 py-2 text-[14px] transition-colors ${
    active
      ? "bg-[#1B2A6B] text-white"
      : "border border-[#E5E7EB] bg-white text-[#6B7280]"
  }`;

const Pricing = () => {
  const [loftMode, setLoftMode] = useState("topup");
  const [loftLength, setLoftLength] = useState("10");
  const [loftWidth, setLoftWidth] = useState("1");

  const [cavityArea, setCavityArea] = useState("1");
  const [cavityDepth, setCavityDepth] = useState("40mm");

  const [foamType, setFoamType] = useState("closed");
  const [foamArea, setFoamArea] = useState("");
  const [foamRelay, setFoamRelay] = useState("no");

  const [boardingArea, setBoardingArea] = useState("");
  const [loftHatch, setLoftHatch] = useState(false);

  const loftArea = useMemo(
    () => parsePositive(loftLength) * parsePositive(loftWidth),
    [loftLength, loftWidth]
  );

  const loftEstimate = useMemo(() => {
    if (!loftArea) {
      return "Enter details above";
    }

    const mode = loftModes[loftMode];
    return formatRange(loftArea * mode.rateMin, loftArea * mode.rateMax);
  }, [loftArea, loftMode]);

  const cavityEstimate = useMemo(() => {
    const area = parsePositive(cavityArea);
    if (!area) {
      return "Enter details above";
    }

    return formatCurrency(area * cavityRates[cavityDepth]);
  }, [cavityArea, cavityDepth]);

  const foamEstimate = useMemo(() => {
    const area = parsePositive(foamArea);
    if (!area) {
      return "Enter details above";
    }

    const base = area * foamRates[foamType];
    const relayTotal = foamRelay === "yes" ? area * 10 : 0;
    return formatCurrency(base + relayTotal);
  }, [foamArea, foamRelay, foamType]);

  const extrasEstimate = useMemo(() => {
    const total = parsePositive(boardingArea) * 50 + (loftHatch ? 250 : 0);
    return total ? `${formatCurrency(total)} + VAT` : "Add items above";
  }, [boardingArea, loftHatch]);

  const loftModeConfig = loftModes[loftMode];

  return (
    <main className="min-h-screen bg-white px-4 py-8 pt-36 md:px-6">
      <Seo
        title="Pricing | Yorkshire Insulation"
        description="Estimate loft insulation, cavity wall insulation, spray foam removal and loft extras pricing across Yorkshire."
        keywords="insulation pricing Yorkshire, loft insulation cost Yorkshire, cavity wall insulation price, spray foam removal cost"
        canonical="https://www.yorkshireinsulationsolutions.co.uk/pricing"
        geo={{
          region: "GB-YOR",
          placename: "Yorkshire",
          position: "53.8;-1.5",
        }}
        ogImage="/heroimage.jpeg"
        ogImageAlt="Yorkshire Insulation pricing page"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pricing",
          url: "https://www.yorkshireinsulationsolutions.co.uk/pricing",
          description:
            "Estimate loft insulation, cavity wall insulation, spray foam removal and loft extras pricing across Yorkshire.",
        }}
      />

      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 max-w-[720px]">
          <span className="mb-3 inline-flex rounded-full border border-[#E9D7A8] bg-[#FFF8E8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C8962E]">
            Pricing Guide
          </span>
          <h1 className="heading-font text-[32px] font-semibold leading-tight text-[#1B2A6B] md:text-[44px]">
            Pricing page
          </h1>
          <p className="mt-3 max-w-[640px] text-[15px] leading-7 text-[#6B7280]">
            Use these live estimates to get a rough idea before booking a visit.
            Final prices are confirmed after assessment where required.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <section className={`${cardClass} flex flex-col`}>
            <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8962E]">
              Loft Insulation
            </span>
            <h2 className="text-[18px] font-semibold text-[#1B2A6B]">
              Loft Insulation
            </h2>
            <p className="mt-1 text-[13px] text-[#6B7280]">
              Top-ups from £8/sqm - no VAT on eco installations
            </p>
            <div className="my-4 h-px bg-[#F0F0F0]" />

            <div className="mb-4 flex gap-2">
              <button
                type="button"
                className={tabClass(loftMode === "topup")}
                onClick={() => setLoftMode("topup")}
              >
                {loftModes.topup.label}
              </button>
              <button
                type="button"
                className={tabClass(loftMode === "removalRelay")}
                onClick={() => setLoftMode("removalRelay")}
              >
                {loftModes.removalRelay.label}
              </button>
            </div>

            <div className="mb-2 flex gap-3">
              <div className="flex-1">
                <label className="mb-1 block text-[13px] text-[#6B7280]">
                  Loft length (m)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  className={inputClass}
                  value={loftLength}
                  onChange={(event) => setLoftLength(event.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-[13px] text-[#6B7280]">
                  Loft width (m)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  className={inputClass}
                  value={loftWidth}
                  onChange={(event) => setLoftWidth(event.target.value)}
                />
              </div>
            </div>

            <p className="mb-4 text-[12px] text-[#6B7280]">
              Calculated area: {loftArea.toFixed(1)} sqm
            </p>
            <div className="flex-1" />

            <div className="flex items-center justify-between rounded-[8px] border border-[#E5E7EB] bg-white px-4 py-[14px]">
              <div>
                <p className="text-[13px] text-[#6B7280]">Estimated cost</p>
                <p className="text-[11px] text-[#6B7280]">{loftModeConfig.note}</p>
              </div>
              <div className="text-[20px] font-semibold text-[#1B2A6B]">
                {loftEstimate}
              </div>
            </div>

            <div
              className={`mt-3 rounded-[6px] border px-3 py-2 ${loftModeConfig.helperClasses}`}
            >
              <p className="text-[12px]">{loftModeConfig.helper}</p>
            </div>
          </section>

          <section className={`${cardClass} flex flex-col`}>
            <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8962E]">
              Cavity Wall
            </span>
            <h2 className="text-[18px] font-semibold text-[#1B2A6B]">
              Cavity Wall Insulation
            </h2>
            <p className="mt-1 text-[13px] text-[#6B7280]">
              From £23/sqm - assessment fee deducted from your bill
            </p>
            <div className="my-4 h-px bg-[#F0F0F0]" />

            <div className="mb-4">
              <label className="mb-1 block text-[13px] text-[#6B7280]">
                Total wall area (sqm)
              </label>
              <input
                type="number"
                min="0"
                placeholder="0"
                className={inputClass}
                value={cavityArea}
                onChange={(event) => setCavityArea(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-[13px] text-[#6B7280]">
                Cavity depth
              </label>
              <select
                className={`${inputClass} bg-white`}
                value={cavityDepth}
                onChange={(event) => setCavityDepth(event.target.value)}
              >
                <option value="40mm">40mm - £23 per sqm</option>
                <option value="50mm">50mm - £25 per sqm</option>
                <option value="100mm">100mm - £28 per sqm</option>
              </select>
            </div>

            <div className="flex-1" />
            <div className="flex items-center justify-between rounded-[8px] border border-[#E5E7EB] bg-white px-4 py-[14px]">
              <div>
                <p className="text-[13px] text-[#6B7280]">Estimated cost</p>
                <p className="text-[11px] text-[#6B7280]">
                  Includes man, labour and product
                </p>
              </div>
              <div className="text-[20px] font-semibold text-[#1B2A6B]">
                {cavityEstimate}
              </div>
            </div>

            <div className="mt-3 rounded-[6px] border border-[#C0CCEE] bg-[#EEF1FB] px-3 py-2">
              <p className="text-[12px] text-[#1B2A6B]">
                £100 + VAT assessment fee is deducted from your final bill if
                you go ahead
              </p>
            </div>
          </section>

          <section className={`${cardClass} flex flex-col`}>
            <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8962E]">
              Spray Foam Removal
            </span>
            <h2 className="text-[18px] font-semibold text-[#1B2A6B]">
              Spray Foam Removal
            </h2>
            <p className="mt-1 text-[13px] text-[#6B7280]">
              Open cell from £52/sqm - closed cell from £80/sqm
            </p>
            <div className="my-4 h-px bg-[#F0F0F0]" />

            <div className="mb-4 flex flex-wrap gap-2">
              <button
                type="button"
                className={tabClass(foamType === "open")}
                onClick={() => setFoamType("open")}
              >
                Open cell - from £52/sqm
              </button>
              <button
                type="button"
                className={tabClass(foamType === "closed")}
                onClick={() => setFoamType("closed")}
              >
                Closed cell - from £80/sqm
              </button>
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-[13px] text-[#6B7280]">
                Loft area (sqm)
              </label>
              <input
                type="number"
                min="0"
                placeholder="0"
                className={inputClass}
                value={foamArea}
                onChange={(event) => setFoamArea(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-[13px] text-[#6B7280]">
                New insulation relay after removal?
              </label>
              <select
                className={`${inputClass} bg-white`}
                value={foamRelay}
                onChange={(event) => setFoamRelay(event.target.value)}
              >
                <option value="no">No thanks</option>
                <option value="yes">Yes - add relay (approx £10/sqm)</option>
              </select>
            </div>

            <div className="flex-1" />
            <div className="flex items-center justify-between rounded-[8px] border border-[#E5E7EB] bg-white px-4 py-[14px]">
              <div>
                <p className="text-[13px] text-[#6B7280]">Estimated cost</p>
                <p className="text-[11px] text-[#6B7280]">
                  Confirmed after surveyor assessment
                </p>
              </div>
              <div className="text-[20px] font-semibold text-[#1B2A6B]">
                {foamEstimate}
              </div>
            </div>

            <div className="mt-3 rounded-[6px] border border-[#F0C070] bg-[#FAEEDA] px-3 py-2">
              <p className="text-[12px] text-[#854F0B]">
                Closed cell foam is more complex to remove - we recommend a
                surveyor assessment before booking
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-[12px] border border-[#E5E7EB] bg-[#F7F8FA] shadow-[0_16px_40px_rgba(17,24,39,0.04)]">
            <div className="flex h-full flex-col p-6">
              <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8962E]">
                Additional Extras
              </span>
              <h2 className="text-[18px] font-semibold text-[#1B2A6B]">
                Loft Extras
              </h2>
              <p className="mt-1 text-[13px] text-[#6B7280]">
                Boarding, hatches and ladders - build your own package
              </p>
              <div className="my-4 h-px bg-[#F0F0F0]" />

              <div className="flex items-center justify-between py-3">
                <div className="pr-4">
                  <p className="text-[14px] font-semibold text-[#1B2A6B]">
                    Loft boarding
                  </p>
                  <p className="text-[12px] text-[#6B7280]">
                    £50 + VAT per sqm - includes boards, batons, screws and
                    fixings
                  </p>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  className="w-[80px] rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 text-center text-[15px] text-[#1B2A6B] outline-none transition focus:border-[#1B2A6B]"
                  value={boardingArea}
                  onChange={(event) => setBoardingArea(event.target.value)}
                />
              </div>

              <div className="h-px bg-[#F0F0F0]" />

              <label className="flex cursor-pointer items-center justify-between py-3">
                <div className="pr-4">
                  <p className="text-[14px] font-semibold text-[#1B2A6B]">
                    Loft hatch installation
                  </p>
                  <p className="text-[12px] text-[#6B7280]">
                    From £250 + VAT installed
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-5 w-5 cursor-pointer rounded accent-[#1B2A6B]"
                  checked={loftHatch}
                  onChange={(event) => setLoftHatch(event.target.checked)}
                />
              </label>

              <div className="h-px bg-[#F0F0F0]" />

              <div className="flex items-center justify-between py-3">
                <div className="pr-4">
                  <p className="text-[14px] font-semibold text-[#9CA3AF]">
                    Loft ladder
                  </p>
                  <p className="text-[12px] text-[#9CA3AF]">
                    Ask for pricing - added to your hatch quote
                  </p>
                </div>
                <input
                  type="checkbox"
                  disabled
                  className="h-5 w-5 cursor-not-allowed rounded accent-[#D1D5DB] opacity-50"
                />
              </div>

              <div className="flex-1" />
            </div>

            <div className="flex items-center justify-between rounded-b-[12px] bg-[#1B2A6B] px-5 py-[14px]">
              <span className="text-[13px] text-white">Extras estimate</span>
              <span className="text-[18px] font-semibold text-white">
                {extrasEstimate === "Add items above" ? (
                  <span className="text-[#8FA0D4]">{extrasEstimate}</span>
                ) : (
                  extrasEstimate
                )}
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
