import { Play } from "lucide-react";

const heightClasses = [
  "h-[240px] md:h-[410px]",
  "h-[320px] md:h-[520px]",
  "h-[280px] md:h-[460px]",
  "h-[220px] md:h-[300px]",
  "h-[300px] md:h-[470px]",
  "h-[260px] md:h-[360px]",
];

const GalleryGrid = ({ items }) => {
  return (
    <div className="mt-12 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
      {items.map((item, index) => {
        const heightClass = heightClasses[index % heightClasses.length];

        return (
          <article
            key={`${item.src}-${index}`}
            className="group mb-6 break-inside-avoid overflow-hidden rounded-[18px] border border-[#E6E9EF] bg-white p-[8px] shadow-[0_8px_24px_rgba(26,44,91,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(26,44,91,0.18)]"
          >
            <div
              className={`relative overflow-hidden rounded-[14px] bg-[#F3F5F8] ${heightClass}`}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    playsInline
                    muted
                    loop
                    autoPlay
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(10,22,48,0.04),rgba(10,22,48,0.18))]">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-[var(--brand-navy)] shadow-lg">
                      <Play className="h-6 w-6 fill-current" />
                    </span>
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
