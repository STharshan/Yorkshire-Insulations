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

export const additionalServices = [
  {
    title: "Solid Wall Insulation",
    description: "Improve thermal efficiency of solid brick walls",
    priceRange: "£800 - £1,500+",
    note: "Price varies based on property size and wall condition",
  },
  {
    title: "Room in Roof Insulation",
    description: "Perfect for conversions and rooms in the roof",
    priceRange: "£500 - £800",
    note: "Price depends on roof size and complexity",
  },
  {
    title: "External Wall Insulation",
    description: "Enhance appearance and thermal performance",
    priceRange: "£1,200 - £2,500",
    note: "Price varies based on property size and finish type",
  },
  {
    title: "Internal Wall Insulation",
    description: "Internal solutions where external options aren't suitable",
    priceRange: "£600 - £1,200",
    note: "Price depends on room size and preparation required",
  },
  {
    title: "Floor Insulation",
    description: "Reduce heat loss through solid and suspended timber floors",
    priceRange: "£350 - £600",
    note: "Price depends on floor area and access",
  },
  {
    title: "Solar Panel Installation",
    description: "Generate your own electricity and reduce energy bills",
    priceRange: "£3,000 - £6,000+",
    note: "Price depends on system size and roof orientation",
  },
  {
    title: "Boiler Installation",
    description: "Energy-efficient boiler installation and replacement",
    priceRange: "£2,000 - £4,000+",
    note: "Price depends on boiler type and installation complexity",
  },
];

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

export const formatFrom = (value, suffix = "") => {
  if (!Number.isFinite(value)) {
    return "Enter details above";
  }

  return `From ${formatCurrency(value)}${suffix}`;
};

export const parsePositive = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};
