import { useMemo, useState } from "react";
import CavityPricingCard from "../components/Pricing/CavityPricingCard";
import LoftExtrasCard from "../components/Pricing/LoftExtrasCard";
import LoftPricingCard from "../components/Pricing/LoftPricingCard";
import PricingHero from "../components/Pricing/PricingHero";
import SprayFoamPricingCard from "../components/Pricing/SprayFoamPricingCard";
import {
  cavityRates,
  foamRates,
  formatCurrency,
  formatFrom,
  formatRange,
  loftModes,
  parsePositive,
} from "../components/Pricing/pricingUtils";
import Seo from "../components/Seo";

const Pricing = () => {
  const [loftMode, setLoftMode] = useState("topup");
  const [loftLength, setLoftLength] = useState("10");
  const [loftWidth, setLoftWidth] = useState("");

  const [cavityArea, setCavityArea] = useState("");
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

    return formatFrom(area * cavityRates[cavityDepth]);
  }, [cavityArea, cavityDepth]);

  const foamEstimate = useMemo(() => {
    const area = parsePositive(foamArea);
    if (!area) {
      return "Enter details above";
    }

    const base = area * foamRates[foamType];
    const relayTotal = foamRelay === "yes" ? area * 10 : 0;
    return formatFrom(base + relayTotal);
  }, [foamArea, foamRelay, foamType]);

  const extrasEstimate = useMemo(() => {
    const total = parsePositive(boardingArea) * 50 + (loftHatch ? 250 : 0);
    return total ? formatFrom(total, " + VAT") : "Add items above";
  }, [boardingArea, loftHatch]);

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title="Insulation Pricing Yorkshire | Transparent Costs & Estimators | Yorkshire Insulation"
        description="Clear, upfront insulation pricing across Yorkshire. Use our online estimators for loft, cavity wall, and spray foam removal costs. Every price includes labour, product and clean-up."
        keywords="insulation cost Yorkshire, loft insulation price Yorkshire, cavity wall insulation cost, spray foam removal cost, insulation estimator Yorkshire"
        canonical="https://insulateyorkshire.co.uk/pricing"
        geo={{
          region: "GB-YOR",
          placename: "Yorkshire",
          position: "53.8;-1.5",
        }}
        ogImage="/newlogo.png"
        ogImageAlt="Yorkshire Insulation pricing page"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Insulation Pricing",
          provider: {
            "@type": "Organization",
            name: "Yorkshire Insulation",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Yorkshire",
          },
          url: "https://insulateyorkshire.co.uk/pricing",
          description:
            "Clear, upfront insulation pricing across Yorkshire. Use our online estimators for loft, cavity wall, and spray foam removal costs. Every price includes labour, product and clean-up.",
        }}
      />

      <PricingHero />

      <div
        id="pricing-tools"
        className="mx-auto max-w-[1100px] px-4 py-8 md:px-6 md:py-12"
      >
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <LoftPricingCard
            loftMode={loftMode}
            setLoftMode={setLoftMode}
            loftLength={loftLength}
            setLoftLength={setLoftLength}
            loftWidth={loftWidth}
            setLoftWidth={setLoftWidth}
            loftArea={loftArea}
            loftEstimate={loftEstimate}
          />

          <CavityPricingCard
            cavityArea={cavityArea}
            setCavityArea={setCavityArea}
            cavityDepth={cavityDepth}
            setCavityDepth={setCavityDepth}
            cavityEstimate={cavityEstimate}
          />

          <SprayFoamPricingCard
            foamType={foamType}
            setFoamType={setFoamType}
            foamArea={foamArea}
            setFoamArea={setFoamArea}
            foamRelay={foamRelay}
            setFoamRelay={setFoamRelay}
            foamEstimate={foamEstimate}
          />

          <LoftExtrasCard
            boardingArea={boardingArea}
            setBoardingArea={setBoardingArea}
            loftHatch={loftHatch}
            setLoftHatch={setLoftHatch}
            extrasEstimate={extrasEstimate}
          />
        </div>

      </div>

      <section className="mt-6 w-full bg-[#1B2A6B]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 md:px-10 md:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white md:text-[40px]">
              Not sure what you need?
            </h2>
            <p className="mt-3 text-base leading-8 text-white/82 md:text-lg">
              Get in touch and we will assess your property and give you an
              accurate price - no obligation.
            </p>
          </div>

          <a
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#C8962E] px-7 py-3 text-[15px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[#b8890f]"
          >
            Get a free assessment
          </a>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
