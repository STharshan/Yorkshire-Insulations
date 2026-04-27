const contactDetails = {
  phoneLabel: "07590 250 335",
  phoneHref: "tel:07590250335",
  emailLabel: "info@yorkshireinsulationsolutions.co.uk",
  emailHref: "mailto:info@yorkshireinsulationsolutions.co.uk",
};

const baseSchema = {
  provider: "Yorkshire Insulation",
  areaServed: "Yorkshire",
};

const baseGeo = {
  region: "GB-YOR",
  placename: "Yorkshire",
  position: "53.8;-1.5",
};

const siteUrl = "https://www.yorkshireinsulationsolutions.co.uk";

const serviceHeaderData = {
  loftInsulation: {
    breadcrumbTitle: "Loft Insulation",
    title: "Loft Insulation Yorkshire",
    description:
      "Loft insulation top-ups, removal and relay, boarding, and hatch fitting across Yorkshire. We install to current recommended depths using trusted Knauf insulation products.",
    image: "/heroimage.jpeg",
    imageAlt: "Loft insulation installation in a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447590250335",
    seo: {
      metaTitle:
        "Loft Insulation Yorkshire | Top-Ups, Removal & Relay | Yorkshire Insulation",
      metaDescription:
        "Yorkshire Insulation installs loft insulation across Yorkshire. Top-ups from 200mm, full removal and relay, loft boarding and hatch fitting. No VAT on eco installations. Get a quote today.",
      keywords:
        "loft insulation Yorkshire, loft insulation top up, loft insulation removal and relay, loft boarding Yorkshire, loft hatch installation Yorkshire",
      canonical: `${siteUrl}/services/loft-insulation`,
      geo: baseGeo,
      schema: {
        ...baseSchema,
        name: "Loft Insulation",
      },
    },
  },
  cavityWallInsulation: {
    breadcrumbTitle: "Cavity Wall Insulation",
    title: "Cavity Wall Insulation Yorkshire",
    description:
      "Professional cavity wall insulation across Yorkshire using Superbead 33, a high-performance EPS bead system designed for long-lasting thermal performance.",
    image: "/Cavity_walls.jpeg",
    imageAlt: "Cavity wall insulation being installed in a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447590250335",
    seo: {
      metaTitle:
        "Cavity Wall Insulation Yorkshire | Superbead 33 Specialists | Yorkshire Insulation",
      metaDescription:
        "We install cavity wall insulation across Yorkshire using Superbead 33 - a high-performance EPS bead system. Assessment appointments from £100 + VAT, deducted from your final bill. Get a quote.",
      keywords:
        "cavity wall insulation Yorkshire, cavity wall insulation cost Yorkshire, Superbead 33 installer, cavity wall insulation assessment Yorkshire",
      canonical: `${siteUrl}/services/cavity-wall-insulation`,
      geo: baseGeo,
      schema: {
        ...baseSchema,
        name: "Cavity Wall Insulation",
      },
    },
  },
  sprayFoamRemoval: {
    breadcrumbTitle: "Spray Foam Removal",
    title: "Spray Foam Removal Yorkshire",
    description:
      "Safe, thorough open and closed cell spray foam removal across Yorkshire, including certificates for mortgage applications and new insulation relay where needed.",
    image: "/Spray_foam_removal.jpg",
    imageAlt: "Spray foam removal from a Yorkshire loft space",
    contactDetails,
    whatsappLink: "https://wa.me/447590250335",
    seo: {
      metaTitle:
        "Spray Foam Removal Yorkshire | Mortgage-Approved Removal | Yorkshire Insulation",
      metaDescription:
        "Yorkshire Insulation removes open and closed cell spray foam across Yorkshire. Essential for mortgage applications - we provide removal certificates and can relay new insulation once done. Get a quote.",
      keywords:
        "spray foam removal Yorkshire, spray foam removal mortgage, open cell spray foam removal Yorkshire, closed cell spray foam removal Yorkshire, spray foam loft Yorkshire",
      canonical: `${siteUrl}/services/spray-foam-removal`,
      geo: baseGeo,
      schema: {
        ...baseSchema,
        name: "Spray Foam Removal",
      },
    },
  },
  underfloorInsulation: {
    breadcrumbTitle: "Underfloor Insulation",
    title: "Underfloor Insulation Yorkshire",
    description:
      "Underfloor insulation for basements, cellars, crawl spaces, and underfloor heating preparation across Yorkshire using Rockwool or Kingspan systems.",
    image: "/about1.webp",
    imageAlt: "Underfloor insulation installed in a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447590250335",
    seo: {
      metaTitle:
        "Underfloor Insulation Yorkshire | Basement, Crawl Space & UFH Prep | Yorkshire Insulation",
      metaDescription:
        "Yorkshire Insulation installs underfloor insulation across Yorkshire. Rockwool stapled and netted for basements and crawl spaces, or Kingspan board laid prior to underfloor heating. Get a quote.",
      keywords:
        "underfloor insulation Yorkshire, crawl space insulation Yorkshire, basement insulation Yorkshire, underfloor heating insulation Yorkshire, Kingspan underfloor Yorkshire",
      canonical: `${siteUrl}/services/underfloor-insulation`,
      geo: baseGeo,
      schema: {
        ...baseSchema,
        name: "Underfloor Insulation",
      },
    },
  },
  newBuildInsulation: {
    breadcrumbTitle: "New Build Insulation",
    title: "New Build & First Fix Insulation Yorkshire",
    description:
      "Insulation packages for contractors, developers, new builds, and full renovation projects across Yorkshire, priced per square metre on supply and fit or labour-only terms.",
    image: "/heroimage.jpeg",
    imageAlt: "New build insulation contractors working on a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447590250335",
    seo: {
      metaTitle:
        "New Build Insulation Yorkshire | First Fix Contractors | Yorkshire Insulation",
      metaDescription:
        "Yorkshire Insulation works with contractors and developers across Yorkshire on new build and full renovation projects. Supply and fit or labour only - priced per sqm. Get a trade quote.",
      keywords:
        "new build insulation Yorkshire, first fix insulation Yorkshire, insulation contractors Yorkshire, renovation insulation Yorkshire, Kingspan new build Yorkshire, Rockwool contractor Yorkshire",
      canonical: `${siteUrl}/services/new-build-insulation`,
      geo: baseGeo,
      schema: {
        ...baseSchema,
        name: "New Build Insulation",
      },
    },
  },
};

export default serviceHeaderData;
