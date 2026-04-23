import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  canonical,
  robots = "index,follow",
  geo,
  schema,
}) => {
  const schemaList = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}

      {geo?.region ? <meta name="geo.region" content={geo.region} /> : null}
      {geo?.placename ? <meta name="geo.placename" content={geo.placename} /> : null}
      {geo?.position ? <meta name="geo.position" content={geo.position} /> : null}

      {schemaList.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
