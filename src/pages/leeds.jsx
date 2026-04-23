import LocationHeroContact from "../Common/LocationHeroContact";
import LocationHousingTypes from "../Common/LocationHousingTypes";
import LocationAreasCovered from "../Common/LocationAreasCovered";
import LocationFaq from "../Common/LocationFaq";
import LocationServices from "../Common/LocationServices";
import { locationData } from "../Data/locationData";
import Seo from "../components/Seo";

const Leeds = () => {
  const pageData = locationData.leeds;

  return (
    <>
      <Seo
        title={pageData.seo.title}
        description={pageData.seo.description}
        keywords="leeds insulation, loft insulation leeds, cavity wall insulation leeds, spray foam removal leeds, underfloor insulation leeds, external wall insulation leeds"
        canonical={pageData.seo.canonical}
        geo={pageData.seo.geo}
        ogImage={pageData.heroBackgroundImage}
        ogImageAlt="Yorkshire Insulation services in Leeds and West Yorkshire"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: pageData.title,
          areaServed: {
            "@type": "City",
            name: "Leeds",
          },
          provider: {
            "@type": "Organization",
            name: "Yorkshire Insulation Solutions Ltd",
          },
          serviceType: pageData.services.items.map((item) => item.title),
          url: pageData.seo.canonical,
          image: `https://www.yorkshireinsulationsolutions.co.uk${pageData.heroBackgroundImage}`,
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
