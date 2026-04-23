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
        canonical={pageData.seo.canonical}
        geo={pageData.seo.geo}
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
