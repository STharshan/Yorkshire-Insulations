
import GalleryGrid from "../components/GalleryGrid";
import Seo from "../components/Seo";
import { galleryMedia } from "../Data/gallery";


const Gallery = () => {
  return (
    <div className="bg-[var(--brand-offwhite)]">
      <Seo
        title="Gallery | Yorkshire Insulation Solutions"
        description="Browse recent loft insulation, cavity wall, spray foam removal, underfloor and new build projects completed across Yorkshire."
        keywords="Yorkshire insulation gallery, loft insulation projects Yorkshire, cavity wall insulation gallery, spray foam removal photos"
        canonical="https://insulateyorkshire.co.uk/gallery"
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
          url: "https://insulateyorkshire.co.uk/gallery",
          description:
            "Recent insulation projects completed by Yorkshire Insulation Solutions across Yorkshire.",
        }}
      />

      

      <section className="px-4 py-36 md:px-6 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
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
