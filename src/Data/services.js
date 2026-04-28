export const services = [
  {
    key: "loftInsulation",
    title: "Loft Insulation",
    path: "/services/loft-insulation",
    legacyPath: "/services/loft-insulation",
    description:
      "The most cost-effective way to reduce heat loss in your home. We install loft insulation across Yorkshire quickly and cleanly, with most jobs completed in a single day.",
    image: "/Loft_insulation_photo.jpeg",
  },
  {
    key: "cavityWallInsulation",
    title: "Cavity Wall Insulation",
    path: "/services/cavity-wall-insulation",
    legacyPath: "/services/cavity-wall-insulation",
    description:
      "We drill small holes in the outer wall and inject insulation material directly into the cavity with minimal disruption and maximum impact.",
    image: "/Cavity_walls.jpeg",
  },
  {
    key: "sprayFoamRemoval",
    title: "Spray Foam Removal",
    path: "/services/spray-foam-removal",
    legacyPath: "/services/spray-foam-removal",
    description:
      "We remove open and closed cell spray foam from loft spaces, issue completion certificates for lenders, and prepare the area for fresh insulation.",
    image: "/Spray_foam_removal.jpg",
  },
  {
    key: "underfloorInsulation",
    title: "Underfloor Insulation",
    path: "/services/underfloor-insulation",
    legacyPath: "/services/underfloor-insulation",
    description:
      "Cold floors are a sign of significant heat loss. We install insulation beneath your floorboards to keep warmth in and energy bills down.",
    image: "/Underfloor_insulation.jpeg",
  },
  {
    key: "newBuildInsulation",
    title: "New Build Insulation",
    path: "/services/new-build-insulation",
    legacyPath: "/services/new-build-insulation",
    description:
      "We support contractors and developers with insulation packages for new build and renovation projects, delivered to programme across Yorkshire.",
    image: "/Newbuild_insulation.jpeg",
  },
];

export const servicePaths = services.map(({ title, path }) => ({ title, path }));
