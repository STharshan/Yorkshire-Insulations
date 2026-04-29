import ServiceHeader from "../Common/ServiceHeader";
import ServiceSection from "../Common/ServiceWorkflowSection";
import serviceHeaderData from "../Data/serviceData";
import { serviceWorkflowData } from "../Data/serviceWorkflowData";
import Seo from "../components/Seo";

const siteUrl = "https://insulateyorkshire.co.uk";

const ServicePage = ({ serviceKey }) => {
  const headerData = serviceHeaderData[serviceKey];
  const workflowData = serviceWorkflowData[serviceKey];
  const resolvedSchema =
    headerData.seo.schema?.["@graph"] || headerData.seo.schema?.["@type"]
      ? headerData.seo.schema
      : {
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
        };

  return (
    <div>
      <Seo
        title={headerData.seo.metaTitle}
        description={headerData.seo.metaDescription}
        keywords={headerData.seo.keywords}
        canonical={headerData.seo.canonical}
        ogSiteName={headerData.seo.ogSiteName}
        ogTitle={headerData.seo.ogTitle}
        ogDescription={headerData.seo.ogDescription}
        geo={headerData.seo.geo}
        ogImage={headerData.seo.ogImage || headerData.image}
        ogImageAlt={headerData.imageAlt}
        twitterTitle={headerData.seo.twitterTitle}
        twitterDescription={headerData.seo.twitterDescription}
        twitterImage={headerData.seo.twitterImage}
        schema={resolvedSchema}
      />
      <ServiceHeader data={headerData} />
      <ServiceSection data={workflowData} />
    </div>
  );
};

export default ServicePage;
