import LocationHeroContact from "../Common/LocationHeroContact";
import LocationHousingTypes from "../Common/LocationHousingTypes";
import LocationAreasCovered from "../Common/LocationAreasCovered";
import LocationFaq from "../Common/LocationFaq";
import LocationServices from "../Common/LocationServices";
import { locationData } from "../Data/locationData";
import Seo from "../components/Seo";

const Leeds = () => {
  const pageData = locationData.leeds;
  const siteUrl = "https://www.yorkshireinsulationsolutions.co.uk";
  const pageUrl = pageData.seo.canonical;
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leeds",
      item: pageUrl,
    },
  ];
  const serviceOffers = [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Loft Insulation",
        description:
          "Professional loft insulation installation across Yorkshire. Most jobs completed in a single day.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cavity Wall Insulation",
        description:
          "Cavity wall insulation for Yorkshire terraces and semis built between 1920 and 1980.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Spray Foam Insulation",
        description:
          "Spray foam insulation for hard to insulate spaces and older irregular roof structures.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Underfloor Insulation",
        description:
          "Underfloor insulation for solid and suspended timber floors across Yorkshire properties.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "External Wall Insulation",
        description:
          "External wall insulation for properties where cavity or internal solutions are not viable.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Solid Wall Insulation",
        description:
          "Solid wall insulation for pre-1919 stone built Yorkshire properties with no wall cavity.",
      },
    },
  ];
  const faqEntities = pageData.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return (
    <>
      <Seo
        title={pageData.seo.title}
        description={pageData.seo.description}
        keywords={pageData.seo.keywords}
        canonical={pageData.seo.canonical}
        geo={pageData.seo.geo}
        ogImage={pageData.heroBackgroundImage}
        ogImageAlt="Yorkshire Insulation services in Leeds and West Yorkshire"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              name: "Yorkshire Insulation",
              description:
                "Professional insulation installation across Yorkshire and beyond including loft, cavity wall, spray foam, underfloor, external wall and solid wall insulation.",
              url: siteUrl,
              telephone: "+44 7526 322379",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Yorkshire",
                addressCountry: "GB",
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "West Yorkshire",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "South Yorkshire",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "North Yorkshire",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "East Yorkshire",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Lancashire",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Nottinghamshire",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Insulation Services",
                itemListElement: serviceOffers,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbItems,
            },
            {
              "@type": "FAQPage",
              mainEntity: faqEntities,
            },
            {
              "@type": "WebPage",
              name: "Areas We Cover - Yorkshire Insulation",
              description:
                "Yorkshire Insulation covers West Yorkshire, South Yorkshire, North Yorkshire, Lancashire and the Midlands. Loft, cavity wall, spray foam and more - get in touch to confirm your area.",
              url: pageUrl,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: breadcrumbItems,
              },
            },
          ],
        }}
      />
      <LocationHeroContact data={pageData} />
      <LocationHousingTypes data={pageData.housingTypes} />
      <LocationServices data={pageData.services} />
      <LocationAreasCovered data={pageData.areasCovered} />
      <LocationFaq data={pageData.faq} />
    </>
  );
};

export default Leeds;
