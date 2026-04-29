const contactDetails = {
  phoneLabel: "07526322379",
  phoneHref: "tel:+447526322379",
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

const siteUrl = "https://insulateyorkshire.co.uk";

const serviceHeaderData = {
  loftInsulation: {
    breadcrumbTitle: "Loft Insulation",
    title: "Loft Insulation Yorkshire",
    description:
      "Loft insulation top-ups, removal and relay, boarding, and hatch fitting across Yorkshire. We install to current recommended depths using trusted Knauf insulation products.",
    image: "/Loft_insulation_photo.jpeg",
    imageAlt: "Loft insulation installation in a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447526322379",
    seo: {
      metaTitle:
        "Loft Insulation Yorkshire | Top-Ups, Removal & Relay | Yorkshire Insulation",
      metaDescription:
        "Professional loft insulation across Yorkshire using Knauf products. Top-ups, removal and relay, boarding and hatch fitting. Get in touch for a quote.",
      keywords:
        "loft insulation Yorkshire, loft insulation top up, loft insulation removal and relay, loft boarding Yorkshire, loft hatch installation Yorkshire",
      canonical: `${siteUrl}/services/loft-insulation`,
      ogSiteName: "Yorkshire Insulation",
      ogTitle:
        "Loft Insulation Yorkshire | Top-Ups, Removal & Relay | Yorkshire Insulation",
      ogDescription:
        "Professional loft insulation across Yorkshire using Knauf products. Top-ups, removal and relay, boarding and hatch fitting. Get in touch for a quote.",
      ogImage: `${siteUrl}/og-image.jpg`,
      twitterTitle:
        "Loft Insulation Yorkshire | Top-Ups, Removal & Relay | Yorkshire Insulation",
      twitterDescription:
        "Professional loft insulation across Yorkshire using Knauf products. Top-ups, removal and relay, boarding and hatch fitting. Get in touch for a quote.",
      twitterImage: `${siteUrl}/og-image.jpg`,
      geo: baseGeo,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Loft Insulation",
            description:
              "Professional loft insulation across Yorkshire. Top-ups, removal and relay, boarding and hatch fitting using Knauf products.",
            provider: {
              "@type": "LocalBusiness",
              name: "Yorkshire Insulation",
              telephone: "07526322379",
              email: "info@yorkshireinsulationsolutions.co.uk",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Yorkshire",
                addressCountry: "GB",
              },
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Yorkshire",
            },
            serviceType: "Loft Insulation",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${siteUrl}/#services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Loft Insulation",
                item: `${siteUrl}/services/loft-insulation`,
              },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does loft insulation take to install?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most loft insulation installations are completed in a single day. The exact time depends on the size of your loft and whether any existing insulation needs clearing first.",
                },
              },
              {
                "@type": "Question",
                name: "What insulation products do you use for loft insulation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We use Knauf Loft Roll 44 and Knauf Combi Cut insulation, installed to the recommended depth of between 270mm and 450mm.",
                },
              },
              {
                "@type": "Question",
                name: "Is loft insulation VAT exempt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Loft insulation top-ups are VAT exempt under the ECO scheme. Full pricing including loft boarding and hatch options is available on our pricing page.",
                },
              },
            ],
          },
          {
            "@type": "WebPage",
            name: "Loft Insulation Yorkshire | Top-Ups, Removal & Relay | Yorkshire Insulation",
            description:
              "Professional loft insulation across Yorkshire using Knauf products. Top-ups, removal and relay, boarding and hatch fitting. Get in touch for a quote.",
            url: `${siteUrl}/services/loft-insulation`,
          },
        ],
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
    whatsappLink: "https://wa.me/447526322379",
    seo: {
      metaTitle:
        "Cavity Wall Insulation Yorkshire | Superbead 33 Specialists | Yorkshire Insulation",
      metaDescription:
        "Professional cavity wall insulation across Yorkshire using Superbead 33. All work done externally with no disruption inside your home. From 23 pounds per sqm.",
      keywords:
        "cavity wall insulation Yorkshire, cavity wall insulation cost Yorkshire, Superbead 33 installer, cavity wall insulation assessment Yorkshire",
      canonical: `${siteUrl}/services/cavity-wall-insulation`,
      ogSiteName: "Yorkshire Insulation",
      ogTitle:
        "Cavity Wall Insulation Yorkshire | Superbead 33 Specialists | Yorkshire Insulation",
      ogDescription:
        "Professional cavity wall insulation across Yorkshire using Superbead 33. All work done externally with no disruption inside your home. From 23 pounds per sqm.",
      ogImage: `${siteUrl}/og-image.jpg`,
      twitterTitle:
        "Cavity Wall Insulation Yorkshire | Superbead 33 Specialists | Yorkshire Insulation",
      twitterDescription:
        "Professional cavity wall insulation across Yorkshire using Superbead 33. All work done externally with no disruption inside your home. From 23 pounds per sqm.",
      twitterImage: `${siteUrl}/og-image.jpg`,
      geo: baseGeo,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Cavity Wall Insulation",
            description:
              "Professional cavity wall insulation across Yorkshire using Superbead 33.",
            provider: {
              "@type": "LocalBusiness",
              name: "Yorkshire Insulation",
              telephone: "07526322379",
              email: "info@yorkshireinsulationsolutions.co.uk",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Yorkshire",
                addressCountry: "GB",
              },
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Yorkshire",
            },
            serviceType: "Cavity Wall Insulation",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${siteUrl}/#services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Cavity Wall Insulation",
                item: `${siteUrl}/services/cavity-wall-insulation`,
              },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is my home suitable for cavity wall insulation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Yorkshire homes built between 1920 and 1980 have an unfilled cavity and are suitable. We carry out an assessment to check cavity depth and suitability before any work begins.",
                },
              },
              {
                "@type": "Question",
                name: "How much does cavity wall insulation cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cavity wall insulation starts from 23 pounds per sqm depending on cavity depth. An assessment appointment is charged at 100 pounds plus VAT, which is deducted from your final bill.",
                },
              },
              {
                "@type": "Question",
                name: "Will cavity wall insulation cause disruption inside my home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No - all work is carried out externally. We drill small holes into the outer wall, inject the insulation, and seal the holes with mortar. There is no internal disruption and no decorating required.",
                },
              },
            ],
          },
          {
            "@type": "WebPage",
            name: "Cavity Wall Insulation Yorkshire | Superbead 33 Specialists | Yorkshire Insulation",
            description:
              "Professional cavity wall insulation across Yorkshire using Superbead 33. All work done externally with no disruption inside your home.",
            url: `${siteUrl}/services/cavity-wall-insulation`,
          },
        ],
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
    whatsappLink: "https://wa.me/447526322379",
    seo: {
      metaTitle:
        "Spray Foam Removal Yorkshire | Mortgage-Approved Removal | Yorkshire Insulation",
      metaDescription:
        "Safe spray foam removal across Yorkshire. Open and closed cell removal with mortgage certificates issued on completion. From 52 pounds per sqm.",
      keywords:
        "spray foam removal Yorkshire, spray foam removal mortgage, open cell spray foam removal Yorkshire, closed cell spray foam removal Yorkshire, spray foam loft Yorkshire",
      canonical: `${siteUrl}/services/spray-foam-removal`,
      ogSiteName: "Yorkshire Insulation",
      ogTitle:
        "Spray Foam Removal Yorkshire | Mortgage-Approved Removal | Yorkshire Insulation",
      ogDescription:
        "Safe spray foam removal across Yorkshire. Open and closed cell removal with mortgage certificates issued on completion. From 52 pounds per sqm.",
      ogImage: `${siteUrl}/og-image.jpg`,
      twitterTitle:
        "Spray Foam Removal Yorkshire | Mortgage-Approved Removal | Yorkshire Insulation",
      twitterDescription:
        "Safe spray foam removal across Yorkshire. Open and closed cell removal with mortgage certificates issued on completion. From 52 pounds per sqm.",
      twitterImage: `${siteUrl}/og-image.jpg`,
      geo: baseGeo,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Spray Foam Removal",
            description:
              "Safe, thorough open and closed cell spray foam removal across Yorkshire. Includes mortgage certificates and new insulation relay.",
            provider: {
              "@type": "LocalBusiness",
              name: "Yorkshire Insulation",
              telephone: "07526322379",
              email: "info@yorkshireinsulationsolutions.co.uk",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Yorkshire",
                addressCountry: "GB",
              },
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Yorkshire",
            },
            serviceType: "Spray Foam Removal",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${siteUrl}/#services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Spray Foam Removal",
                item: `${siteUrl}/services/spray-foam-removal`,
              },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why does spray foam insulation cause mortgage problems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Around a quarter of major UK lenders currently refuse to lend on properties with spray foam insulation installed. This can block sales, remortgages, and equity releases. Professional removal with a certificate resolves this.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide a certificate after spray foam removal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes - we provide a removal certificate on completion, accepted by major UK mortgage lenders.",
                },
              },
              {
                "@type": "Question",
                name: "How much does spray foam removal cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spray foam removal starts from 52 pounds per sqm for open cell and from 80 pounds per sqm for closed cell.",
                },
              },
            ],
          },
          {
            "@type": "WebPage",
            name: "Spray Foam Removal Yorkshire | Mortgage-Approved Removal | Yorkshire Insulation",
            description:
              "Safe spray foam removal across Yorkshire. Open and closed cell removal, mortgage certificates, and new insulation relay available.",
            url: `${siteUrl}/services/spray-foam-removal`,
          },
        ],
      },
    },
  },
  underfloorInsulation: {
    breadcrumbTitle: "Underfloor Insulation",
    title: "Underfloor Insulation Yorkshire",
    description:
      "Underfloor insulation for basements, cellars, crawl spaces, and underfloor heating preparation across Yorkshire using Rockwool or Kingspan systems.",
    image: "/Underfloor_insulation.jpeg",
    imageAlt: "Underfloor insulation installed in a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447526322379",
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
    image: "/Newbuild_insulation.jpeg",
    imageAlt: "New build insulation contractors working on a Yorkshire property",
    contactDetails,
    whatsappLink: "https://wa.me/447526322379",
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
