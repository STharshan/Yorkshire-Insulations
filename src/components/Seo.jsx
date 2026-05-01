import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  canonical,
  robots = "index,follow",
  geo,
  schema,
  ogTitle,
  ogDescription,
  ogSiteName,
  ogImage,
  ogImageAlt,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  const schemaList = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;
  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle || title;
  const resolvedTwitterDescription =
    twitterDescription || resolvedOgDescription || description;
  const resolvedTwitterImage = twitterImage || ogImage;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="Y4ww93s-eLxsV4VN9RQ7tfvnwi6RN1VEYBo303zhFvE"
      />
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {resolvedOgTitle ? <meta property="og:title" content={resolvedOgTitle} /> : null}
      {resolvedOgDescription ? (
        <meta property="og:description" content={resolvedOgDescription} />
      ) : null}
      <meta property="og:type" content="website" />
      {ogSiteName ? <meta property="og:site_name" content={ogSiteName} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      {ogImageAlt ? <meta property="og:image:alt" content={ogImageAlt} /> : null}

      <meta name="twitter:card" content={twitterCard} />
      {resolvedTwitterTitle ? (
        <meta name="twitter:title" content={resolvedTwitterTitle} />
      ) : null}
      {resolvedTwitterDescription ? (
        <meta name="twitter:description" content={resolvedTwitterDescription} />
      ) : null}
      {resolvedTwitterImage ? (
        <meta name="twitter:image" content={resolvedTwitterImage} />
      ) : null}
      {ogImageAlt ? <meta name="twitter:image:alt" content={ogImageAlt} /> : null}

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
