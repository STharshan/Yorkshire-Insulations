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
  { type: "image", src: "/Loft_insulation_photo.jpeg", alt: "Loft insulation project in Yorkshire" },
  { type: "image", src: "/Cavity_walls.jpeg", alt: "Cavity wall insulation installation" },
  { type: "image", src: "/Spray_foam_removal.jpg", alt: "Spray foam removal project" },
  { type: "image", src: "/Underfloor_insulation.jpeg", alt: "Underfloor insulation installation" },
  { type: "image", src: "/Newbuild_insulation.jpeg", alt: "New build insulation project" },
  { type: "image", src: "/heroimage-1.jpg", alt: "Yorkshire Insulation Solutions on site" },
  { type: "image", src: "/heroimage-2.jpg", alt: "Insulation work detail" },
  { type: "image", src: "/heroimage-3.jpeg", alt: "Completed insulation project" },
  { type: "image", src: "/about.png", alt: "Yorkshire Insulation Solutions workmanship" },
  { type: "image", src: "/about1.webp", alt: "Home insulation project" },
  { type: "image", src: "/about2.webp", alt: "Property insulation upgrade" },
  { type: "image", src: "/heroimage.jpeg", alt: "Recent insulation project across Yorkshire" },
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
