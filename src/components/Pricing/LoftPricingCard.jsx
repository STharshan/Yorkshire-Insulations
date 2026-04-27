import { cardClass, inputClass, tabClass } from "./pricingStyles";
import { loftModes } from "./pricingUtils";

const LoftPricingCard = ({
  loftMode,
  setLoftMode,
  loftLength,
  setLoftLength,
  loftWidth,
  setLoftWidth,
  loftArea,
  loftEstimate,
}) => {
  const loftModeConfig = loftModes[loftMode];

  return (
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
  );
};

export default LoftPricingCard;
