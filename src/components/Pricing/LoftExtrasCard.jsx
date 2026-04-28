import { PackagePlus } from "lucide-react";

import PricingCardShell from "./PricingCardShell";

const LoftExtrasCard = ({
  boardingArea,
  setBoardingArea,
  loftHatch,
  setLoftHatch,
  extrasEstimate,
}) => {
  return (
    <PricingCardShell
      eyebrow="ADDITIONAL EXTRAS"
      title="Loft Extras"
      subtitle="Boarding, hatches and ladders - build your own package"
      icon={PackagePlus}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between py-3">
          <div className="pr-4">
            <p className="text-[14px] font-semibold text-[#1B2A6B]">
              Loft boarding
            </p>
            <p className="text-[12px] text-[#6B7280]">
              {"\u00A350 + VAT per sqm - includes boards, batons, screws and fixings"}
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
              {"From \u00A3250 + VAT installed"}
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

        <div className="mt-4 flex items-center justify-between rounded-[8px] bg-[#1B2A6B] px-5 py-[14px]">
          <div>
            <span className="text-[13px] text-white">Estimated from</span>
            <p className="text-[11px] text-white/72">
              Final price confirmed after assessment.
            </p>
          </div>
          <span className="text-right text-[18px] font-semibold text-white">
            {extrasEstimate === "Add items above" ? (
              <span className="text-[#8FA0D4]">{extrasEstimate}</span>
            ) : (
              extrasEstimate
            )}
          </span>
        </div>
      </div>
    </PricingCardShell>
  );
};

export default LoftExtrasCard;
