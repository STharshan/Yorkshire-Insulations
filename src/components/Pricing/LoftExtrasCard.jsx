const LoftExtrasCard = ({
  boardingArea,
  setBoardingArea,
  loftHatch,
  setLoftHatch,
  extrasEstimate,
}) => {
  return (
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
              £50 + VAT per sqm - includes boards, batons, screws and fixings
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
  );
};

export default LoftExtrasCard;
