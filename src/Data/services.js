export const services = [
  {
    key: "loftInsulation",
    title: "Loft Insulation",
    path: "/loft-insulation",
    legacyPath: "/services/loft-insulation",
    description:
      "The most cost-effective way to reduce heat loss in your home. We install loft insulation across Yorkshire quickly and cleanly, with most jobs completed in a single day.",
    image: "/loft.webp",
  },
  {
    key: "cavityWallInsulation",
    title: "Cavity Wall Insulation",
    path: "/cavity-wall-insulation",
    legacyPath: "/services/cavity-wall-insulation",
    description:
      "We drill small holes in the outer wall and inject insulation material directly into the cavity with minimal disruption and maximum impact.",
    image: "/cavity.webp",
  },
  {
    key: "sprayFoamRemoval",
    title: "Spray Foam Removal",
    path: "/spray-foam-removal",
    legacyPath: "/services/spray-foam-removal",
    description:
      "We remove open and closed cell spray foam from loft spaces, issue completion certificates for lenders, and prepare the area for fresh insulation.",
    image: "/spray.webp",
  },
  {
    key: "underfloorInsulation",
    title: "Underfloor Insulation",
    path: "/underfloor-insulation",
    legacyPath: "/services/underfloor-insulation",
    description:
      "Cold floors are a sign of significant heat loss. We install insulation beneath your floorboards to keep warmth in and energy bills down.",
    image: "/underfloor.webp",
  },
  {
    key: "newBuildInsulation",
    title: "New Build Insulation",
    path: "/new-build-insulation",
    legacyPath: "/services/new-build-insulation",
    description:
      "We support contractors and developers with insulation packages for new build and renovation projects, delivered to programme across Yorkshire.",
    image: "/new-build.webp",
  },
];

export const servicePaths = services.map(({ title, path }) => ({ title, path }));
