import LocationHeroContact from "../Common/LocationHeroContact";
import LocationHousingTypes from "../Common/LocationHousingTypes";
import LocationAreasCovered from "../Common/LocationAreasCovered";
import LocationFaq from "../Common/LocationFaq";
import LocationServices from "../Common/LocationServices";
import { locationData } from "../Data/locationData";
import Seo from "../components/Seo";

const Leeds = () => {
  const pageData = locationData.leeds;
  const siteUrl = "https://insulateyorkshire.co.uk";
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
      item: pageUrl,
    },
  ];

  return (
    <>
      <Seo
        title={pageData.seo.title}
        description={pageData.seo.description}
        keywords={pageData.seo.keywords}
        canonical={pageData.seo.canonical}
        ogSiteName="Yorkshire Insulation"
        ogTitle="Areas We Cover - Yorkshire Insulation"
        ogDescription="Yorkshire Insulation covers West Yorkshire, South Yorkshire, North Yorkshire, Lancashire and the Midlands. Get in touch to confirm your area."
        geo={pageData.seo.geo}
        ogImage="https://insulateyorkshire.co.uk/og-image.jpg"
        ogImageAlt="Yorkshire Insulation areas covered across Yorkshire and beyond"
        twitterTitle="Areas We Cover - Yorkshire Insulation"
        twitterDescription="Yorkshire Insulation covers West Yorkshire, South Yorkshire, North Yorkshire, Lancashire and the Midlands. Get in touch to confirm your area."
        twitterImage="https://insulateyorkshire.co.uk/og-image.jpg"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              name: "Yorkshire Insulation",
              description:
                "Professional insulation installation across Yorkshire and beyond.",
              url: siteUrl,
              telephone: "07526322379",
              email: "info@insulateyorkshire.co.uk",
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
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbItems,
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does insulation installation take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most loft and cavity wall installations are completed in a single day. Larger jobs such as external wall insulation may take longer - we will give you a clear timeframe before any work begins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas do you cover?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are based in Yorkshire and cover West Yorkshire, South Yorkshire, North Yorkshire, and East Yorkshire. We also work across parts of Lancashire and the Midlands.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there government grants available for insulation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There are various government schemes that may help including the Great British Insulation Scheme and ECO4. Eligibility varies - we recommend checking the government website or speaking to us.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I get started?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Get in touch via the form on this page, by phone, or on WhatsApp. Tell us about your property and we will take it from there.",
                  },
                },
              ],
            },
            {
              "@type": "WebPage",
              name: "Areas We Cover - Yorkshire Insulation",
              description:
                "Yorkshire Insulation covers West Yorkshire, South Yorkshire, North Yorkshire, Lancashire and the Midlands. Loft, cavity wall, spray foam and more.",
              url: pageUrl,
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
