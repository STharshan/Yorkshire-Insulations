import { cardClass, inputClass } from "./pricingStyles";

const CavityPricingCard = ({
  cavityArea,
  setCavityArea,
  cavityDepth,
  setCavityDepth,
  cavityEstimate,
}) => {
  return (
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
          £100 + VAT assessment fee is deducted from your final bill if you go
          ahead
        </p>
      </div>
    </section>
  );
};

export default CavityPricingCard;
