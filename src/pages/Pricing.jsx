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
  formatRange,
  loftModes,
  parsePositive,
} from "../components/Pricing/pricingUtils";
import Seo from "../components/Seo";

const Pricing = () => {
  const [loftMode, setLoftMode] = useState("topup");
  const [loftLength, setLoftLength] = useState("10");
  const [loftWidth, setLoftWidth] = useState("1");

  const [cavityArea, setCavityArea] = useState("1");
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

    return formatCurrency(area * cavityRates[cavityDepth]);
  }, [cavityArea, cavityDepth]);

  const foamEstimate = useMemo(() => {
    const area = parsePositive(foamArea);
    if (!area) {
      return "Enter details above";
    }

    const base = area * foamRates[foamType];
    const relayTotal = foamRelay === "yes" ? area * 10 : 0;
    return formatCurrency(base + relayTotal);
  }, [foamArea, foamRelay, foamType]);

  const extrasEstimate = useMemo(() => {
    const total = parsePositive(boardingArea) * 50 + (loftHatch ? 250 : 0);
    return total ? `${formatCurrency(total)} + VAT` : "Add items above";
  }, [boardingArea, loftHatch]);

  return (
    <main className="min-h-screen bg-white px-4 py-8 pt-36 md:px-6">
      <Seo
        title="Pricing | Yorkshire Insulation"
        description="Estimate loft insulation, cavity wall insulation, spray foam removal and loft extras pricing across Yorkshire."
        keywords="insulation pricing Yorkshire, loft insulation cost Yorkshire, cavity wall insulation price, spray foam removal cost"
        canonical="https://www.yorkshireinsulationsolutions.co.uk/pricing"
        geo={{
          region: "GB-YOR",
          placename: "Yorkshire",
          position: "53.8;-1.5",
        }}
        ogImage="/heroimage.jpeg"
        ogImageAlt="Yorkshire Insulation pricing page"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pricing",
          url: "https://www.yorkshireinsulationsolutions.co.uk/pricing",
          description:
            "Estimate loft insulation, cavity wall insulation, spray foam removal and loft extras pricing across Yorkshire.",
        }}
      />

      <div className="mx-auto max-w-[1100px]">
        <PricingHero />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
    </main>
  );
};

export default Pricing;
