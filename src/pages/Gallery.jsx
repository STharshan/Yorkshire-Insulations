import ServiceHeader from "../Common/ServiceHeader";
import GalleryGrid from "../components/GalleryGrid";
import Seo from "../components/Seo";

const galleryHero = {
  breadcrumbTitle: "Gallery",
  breadcrumbs: [
    { label: "Home" },
    { label: "Gallery", current: true },
  ],
  title: "Our Work Across Yorkshire",
  description:
    "We don't just talk about quality; we show it. Browse through our recent insulation projects completed across Yorkshire. From quick loft installs to full external wall work, every job is finished to the same high standard.",
  image: "/heroimage.jpeg",
  imageAlt: "Yorkshire Insulation Solutions project showcase",
  whatsappLink: "https://wa.me/447590250335",
  contactDetails: {
    phoneLabel: "07590 250 335",
    phoneHref: "tel:07590250335",
    emailLabel: "info@yorkshireinsulationsolutions.co.uk",
    emailHref: "mailto:info@yorkshireinsulationsolutions.co.uk",
  },
  trustPoints: [
    "Loft Insulation",
    "Cavity Wall",
    "Spray Foam Removal",
    "Underfloor",
    "New Build",
  ],
};

const galleryMedia = [
  { type: "image", src: "/Gallery/494216041_122120393828840476_1646075693740168417_n.jpeg", alt: "Insulation project in Yorkshire" },
  { type: "image", src: "/Gallery/494216041_122120393828840476_1646075693740168417_n-1.jpeg", alt: "Yorkshire Insulation Solutions project" },
  { type: "image", src: "/Gallery/494727950_122120393768840476_7028384134860948190_n.jpeg", alt: "Loft insulation installation" },
  { type: "image", src: "/Gallery/495461924_122118086612840476_7762738871496875635_n.jpeg", alt: "Cavity wall insulation project" },
  { type: "image", src: "/Gallery/496983192_122118094256840476_4920689214992367810_n.jpeg", alt: "Insulation work completion" },
  { type: "image", src: "/Gallery/503456647_122120393912840476_934357578574735165_n.jpeg", alt: "Professional insulation services" },
  { type: "image", src: "/Gallery/504252269_122120611268840476_8599144606213987623_n.jpeg", alt: "Yorkshire insulation project" },
  { type: "image", src: "/Gallery/504403141_122120611250840476_5668954285081203701_n.jpeg", alt: "Home insulation installation" },
  { type: "image", src: "/Gallery/AdobeStock_1251899663-2048x1117.jpeg", alt: "External wall insulation" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.53.jpeg", alt: "Insulation project showcase" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.56.jpeg", alt: "Yorkshire Insulation work" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.56-1.jpeg", alt: "Professional installation" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.58-3.jpeg", alt: "Insulation services in Yorkshire" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.59-2.jpeg", alt: "Project completion" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.59-3.jpeg", alt: "Quality insulation work" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.11.59-4.jpeg", alt: "Yorkshire Insulation Solutions" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.00-2.jpeg", alt: "Insulation project photo" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.00-3.jpeg", alt: "Professional work showcase" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.00-5.jpeg", alt: "Installation completed" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.01-1.jpeg", alt: "Yorkshire project details" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.01-2.jpeg", alt: "Insulation installation" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.01-3.jpeg", alt: "Work quality showcase" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.02-2.jpeg", alt: "Professional services" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.02-3.jpeg", alt: "Yorkshire Insulation project" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.03-1.jpeg", alt: "Insulation completed work" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.03-2.jpeg", alt: "Project showcase" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.03-3.jpeg", alt: "Yorkshire work quality" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.03-4.jpeg", alt: "Installation project" },
  { type: "image", src: "/Gallery/WhatsApp-Image-2025-06-17-at-17.12.03-5.jpeg", alt: "Professional insulation" },
  { type: "image", src: "/Gallery/Yorkshire-Insullation-LOGO-1.png", alt: "Yorkshire Insulation Solutions logo" },
];

const Gallery = () => {
  return (
    <div className="bg-[var(--brand-offwhite)]">
      <Seo
        title="Gallery | Yorkshire Insulation Solutions"
        description="Browse recent loft insulation, cavity wall, spray foam removal, underfloor and new build projects completed across Yorkshire."
        keywords="Yorkshire insulation gallery, loft insulation projects Yorkshire, cavity wall insulation gallery, spray foam removal photos"
        canonical="https://www.yorkshireinsulationsolutions.co.uk/gallery"
        geo={{
          region: "GB-YOR",
          placename: "Yorkshire",
          position: "53.8;-1.5",
        }}
        ogImage="/heroimage.jpeg"
        ogImageAlt="Gallery of Yorkshire insulation projects"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Gallery",
          url: "https://www.yorkshireinsulationsolutions.co.uk/gallery",
          description:
            "Recent insulation projects completed by Yorkshire Insulation Solutions across Yorkshire.",
        }}
      />

      <ServiceHeader data={galleryHero} />

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="heading-font text-4xl font-extrabold tracking-[-0.03em] text-[var(--brand-navy)] md:text-5xl">
              Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--brand-muted)]">
              Step through our latest Yorkshire insulation jobs and see the same
              careful finish we bring to every loft, wall and floor project.
            </p>
          </div>

          <GalleryGrid items={galleryMedia} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
