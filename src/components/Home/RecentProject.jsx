import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const projects = [
  {
    title: "Council House Dome",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/council.png",
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    title: "Victoria Law Courts",
    location: "Birmingham",
    description:
      "Comprehensive scaffolding installation for major Victorian courthouse renovation, ensuring complete building envelope coverage for restoration works.",
    image: "/victoria.png",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    title: "Sherwood Observatory",
    location: "Sutton-in-Ashfield",
    description:
      "Multi-level scaffolding system for modern institutional building maintenance, providing safe working platforms across multiple floors and sections.",
    video: "/castle.mp4",
    tags: ["Multi-Level", "Institutional", "Modern Building"],
  },
  {
    title: "Nottingham Castle",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/nottingham castle.jpg",
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    title: "Ablett House",
    location: "Liverpool",
    description:
      "Modern student accommodation development designed to provide safe and stylish living in the heart of Liverpool.",
    image: "/ablett.jpg",
    tags: ["Modern student accommodation", "City-centre location", "High-rise structure"],
  },
  {
    title: "Nottingham Queens Medical Centre",
    location: "Nottingham",
    description:
      "Plettac scaffold for window replacement",
    image: "/queen.jpg",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    title: "Temporary garage for Fire engine",
    location: "Nottingham",
    description:
      "A short-term period, often during construction, renovation, or emergency situations where a permanent garage is unavailable.",
    image: "/garage.jpg",
    tags: ["Temporary", "Emergency", "Legal Institution"],
  },
  {
    title: "Mansfield Road",
    location: "Nottingham",
    description:
      "Traditional tube and fit scaffolding for full renovation works",
    image: "/Mansfield.webp",
    tags: ["Full Building Access" , "Safety & Compliance", "Custom Builds"],
  },
];

const RecentProject = () => {
  return (
    <section className="scroll-m-18 bg-white px-4 py-10 sm:px-6 lg:px-16" id="recent-projects">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="heading-font mb-2 text-2xl font-bold text-[var(--brand-text)] sm:text-3xl">Recent Projects</h2>
        <p className="mx-auto mb-10 max-w-xl text-md text-[var(--brand-muted)] sm:text-lg">
          Showcasing our expertise in high-profile commercial and institutional scaffolding projects
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="brand-card brand-card-hover relative mb-12 flex h-120 flex-col overflow-hidden rounded-xl bg-white text-left">
                <div className="relative overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      alt={project.title}
                      className="h-58 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      autoplay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-58 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <span className="absolute top-3 left-3 rounded-full bg-[var(--brand-blue)] px-3 py-1 text-xs font-semibold text-white">
                    Commercial
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="heading-font mb-1 text-lg font-semibold text-[var(--brand-text)]">{project.title}</h3>
                  <div className="mb-2 flex items-center text-sm text-[var(--brand-muted)]">
                    <MapPin className="mr-1 h-4 w-4" />
                    {project.location}
                  </div>
                  <p className="mb-4 text-sm text-[var(--brand-muted)]">{project.description}</p>
                  <div className="mt-auto mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[var(--brand-border)] px-2 py-1 text-xs text-[var(--brand-text)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentProject;
