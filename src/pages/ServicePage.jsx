import ServiceHeader from "../Common/ServiceHeader";
import ServiceSection from "../Common/ServiceWorkflowSection";
import serviceHeaderData from "../Data/serviceData";
import { serviceWorkflowData } from "../Data/serviceWorkflowData";
import Seo from "../components/Seo";

const siteUrl = "https://www.yorkshireinsulationsolutions.co.uk";

const ServicePage = ({ serviceKey }) => {
  const headerData = serviceHeaderData[serviceKey];
  const workflowData = serviceWorkflowData[serviceKey];

  return (
    <div>
      <Seo
        title={headerData.seo.metaTitle}
        description={headerData.seo.metaDescription}
        keywords={headerData.seo.keywords}
        canonical={headerData.seo.canonical}
        geo={headerData.seo.geo}
        ogImage={headerData.image}
        ogImageAlt={headerData.imageAlt}
        schema={{
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
          url: headerData.seo.canonical,
          image: `${siteUrl}${headerData.image}`,
        }}
      />
      <ServiceHeader data={headerData} />
      <ServiceSection data={workflowData} />
    </div>
  );
};

export default ServicePage;
