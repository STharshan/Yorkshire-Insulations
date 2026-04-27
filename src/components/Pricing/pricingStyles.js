export const cardClass =
  "rounded-[12px] border border-[#E5E7EB] bg-[#F7F8FA] p-6 shadow-[0_16px_40px_rgba(17,24,39,0.04)]";

export const inputClass =
  "w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1B2A6B] outline-none transition focus:border-[#1B2A6B]";

export const tabClass = (active) =>
  `rounded-[8px] px-4 py-2 text-[14px] transition-colors ${
    active
      ? "bg-[#1B2A6B] text-white"
      : "border border-[#E5E7EB] bg-white text-[#6B7280]"
  }`;
