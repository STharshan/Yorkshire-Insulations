import { Building2 } from "lucide-react";

import PricingCardShell from "./PricingCardShell";
import { inputClass } from "./pricingStyles";

const CavityPricingCard = ({
  cavityArea,
  setCavityArea,
  cavityDepth,
  setCavityDepth,
  cavityEstimate,
}) => {
  return (
    <PricingCardShell
      eyebrow="CAVITY WALL"
      title="Cavity Wall Insulation"
      subtitle={"From \u00A323/sqm - assessment fee deducted from your bill"}
      icon={Building2}
    >
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
          <option value="40mm">40mm - {"\u00A323"} per sqm</option>
          <option value="50mm">50mm - {"\u00A325"} per sqm</option>
          <option value="100mm">100mm - {"\u00A328"} per sqm</option>
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
          {cavityEstimate}
        </div>
      </div>

      <div className="mt-3 rounded-[6px] border border-[#C0CCEE] bg-[#EEF1FB] px-3 py-2">
        <p className="text-[12px] text-[#1B2A6B]">
          {"\u00A3100"} + VAT assessment fee is deducted from your final bill
          if you go ahead
        </p>
      </div>
    </PricingCardShell>
  );
};

export default CavityPricingCard;
