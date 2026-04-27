export const loftModes = {
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

export const cavityRates = {
  "40mm": 23,
  "50mm": 25,
  "100mm": 28,
};

export const foamRates = {
  open: 52,
  closed: 80,
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const formatRange = (min, max) => {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return "Enter details above";
  }

  return `${formatCurrency(min)} - ${formatCurrency(max)}`;
};

export const parsePositive = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};
