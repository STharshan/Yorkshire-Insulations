import { useEffect } from "react";
import ServiceHeader from "../Common/ServiceHeader";
import ServiceSection from "../Common/ServiceWorkflowSection";
import serviceHeaderData from "../Data/serviceData";
import { serviceWorkflowData } from "../Data/serviceWorkflowData";

const headerData = serviceHeaderData.loftInsulation;
const workflowData = serviceWorkflowData.loftInsulation;

const LoftInsulation = () => {
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

    document.title = headerData.seo.metaTitle;
    descriptionTag.setAttribute("content", headerData.seo.metaDescription);

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "service-schema-loft-insulation";
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: headerData.seo.schema.name,
      provider: {
        "@type": "Organization",
        name: headerData.seo.schema.provider,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: headerData.seo.schema.areaServed,
      },
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
  }, []);

  return (
    <div>
      <ServiceHeader data={headerData} />
      <ServiceSection data={workflowData} />
    </div>
  );
};

export default LoftInsulation;
