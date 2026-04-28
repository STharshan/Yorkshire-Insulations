import { ShieldAlert } from "lucide-react";

import PricingCardShell from "./PricingCardShell";
import { inputClass, tabClass } from "./pricingStyles";

const SprayFoamPricingCard = ({
  foamType,
  setFoamType,
  foamArea,
  setFoamArea,
  foamRelay,
  setFoamRelay,
  foamEstimate,
}) => {
  return (
    <PricingCardShell
      eyebrow="SPRAY FOAM REMOVAL"
      title="Spray Foam Removal"
      subtitle={"Open cell from \u00A352/sqm - closed cell from \u00A380/sqm"}
      icon={ShieldAlert}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          className={tabClass(foamType === "open")}
          onClick={() => setFoamType("open")}
        >
          {"Open cell - from \u00A352/sqm"}
        </button>
        <button
          type="button"
          className={tabClass(foamType === "closed")}
          onClick={() => setFoamType("closed")}
        >
          {"Closed cell - from \u00A380/sqm"}
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
          <option value="yes">{"Yes - add relay (approx \u00A310/sqm)"}</option>
        </select>
      </div>

      <div className="flex-1" />
      <div className="flex items-center justify-between rounded-[8px] border border-[#E5E7EB] bg-white px-4 py-[14px]">
        <div>
          <p className="text-[13px] text-[#6B7280]">Estimated from</p>
          <p className="text-[11px] text-[#6B7280]">
            Final price confirmed after assessment.
          </p>
        </div>
        <div className="text-[20px] font-semibold text-[#1B2A6B]">
          {foamEstimate}
        </div>
      </div>

      <div className="mt-3 rounded-[6px] border border-[#F0C070] bg-[#FAEEDA] px-3 py-2">
        <p className="text-[12px] text-[#854F0B]">
          Closed cell foam is more complex to remove - we recommend a surveyor
          assessment before booking
        </p>
      </div>
    </PricingCardShell>
  );
};

export default SprayFoamPricingCard;
