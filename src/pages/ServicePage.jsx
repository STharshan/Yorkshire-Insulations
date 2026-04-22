import { useEffect } from "react";
import ServiceHeader from "../Common/ServiceHeader";
import ServiceSection from "../Common/ServiceWorkflowSection";
import serviceHeaderData from "../Data/serviceData";
import { serviceWorkflowData } from "../Data/serviceWorkflowData";

const setMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  const created = !tag;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  const previous = tag.getAttribute("content");
  tag.setAttribute("content", content);

  return () => {
    if (created) {
      tag.remove();
    } else if (previous !== null) {
      tag.setAttribute("content", previous);
    } else {
      tag.removeAttribute("content");
    }
  };
};

const ServicePage = ({ serviceKey }) => {
  const headerData = serviceHeaderData[serviceKey];
  const workflowData = serviceWorkflowData[serviceKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const previousTitle = document.title;
    const cleanupMeta = [
      setMeta("description", headerData.seo.metaDescription),
      setMeta("keywords", headerData.seo.keywords),
      setMeta("geo.region", headerData.seo.geo.region),
      setMeta("geo.placename", headerData.seo.geo.placename),
      setMeta("geo.position", headerData.seo.geo.position),
    ];

    document.title = headerData.seo.metaTitle;

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = `service-schema-${serviceKey}`;
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
      cleanupMeta.forEach((cleanup) => cleanup());
      schemaScript.remove();
    };
  }, [headerData, serviceKey]);

  return (
    <div>
      <ServiceHeader data={headerData} />
      <ServiceSection data={workflowData} />
    </div>
  );
};

export default ServicePage;
