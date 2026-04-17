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

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        descriptionTag.remove();
      } else if (previousDescription !== undefined) {
        descriptionTag.setAttribute("content", previousDescription || "");
      }
    };
  }, [pageData.seo.description, pageData.seo.title]);

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
