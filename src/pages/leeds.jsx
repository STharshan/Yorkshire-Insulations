import { useEffect } from "react";
import LocationHeroContact from "../Common/LocationHeroContact";
import LocationHousingTypes from "../Common/LocationHousingTypes";
import LocationAreasCovered from "../Common/LocationAreasCovered";
import LocationFaq from "../Common/LocationFaq";
import LocationServices from "../Common/LocationServices";
import { locationData } from "../Data/locationData";

const Leeds = () => {
  const pageData = locationData.leeds;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const previousTitle = document.title;
    const previousDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");

    let descriptionTag = document.querySelector('meta[name="description"]');
    let createdDescription = false;

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
      createdDescription = true;
    }

    document.title = pageData.seo.title;
    descriptionTag.setAttribute("content", pageData.seo.description);

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "location-schema-leeds";
    schemaScript.text = JSON.stringify({
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
    });

    document.head.appendChild(schemaScript);

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        descriptionTag.remove();
      } else if (previousDescription !== undefined) {
        descriptionTag.setAttribute("content", previousDescription || "");
      }

      schemaScript.remove();
    };
  }, [pageData.seo.description, pageData.seo.title, pageData.services.items, pageData.title]);

  return (
    <>
      <LocationHeroContact data={pageData} />
      <LocationHousingTypes data={pageData.housingTypes} />
      <LocationServices data={pageData.services} />
      <LocationAreasCovered data={pageData.areasCovered} />
      <LocationFaq data={pageData.faq} />
    </>
  );
};

export default Leeds;
