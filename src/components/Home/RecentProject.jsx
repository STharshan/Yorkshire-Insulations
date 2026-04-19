import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const projects = [
  {
    title: "Project Harrogate",
    location: "North Yorkshire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/council.png",
    tags: ["Tag One", "Tag Two", "Tag Three"],
  },
  {
    title: "Project Roundhay",
    location: "Leeds, West Yorkshire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/victoria.png",
    tags: ["Tag One", "Tag Two", "Tag Three"],
  },
  {
    title: "Project York Centre",
    location: "York, North Yorkshire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/nottingham castle.jpg",
    tags: ["Tag One", "Tag Two", "Tag Three"],
  },
  {
    title: "Project Huddersfield",
    location: "Kirklees, West Yorkshire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/ablett.jpg",
    tags: ["Tag One", "Tag Two", "Tag Three"],
  },
  {
    title: "Project Saltaire",
    location: "Bradford, West Yorkshire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/queen.jpg",
    tags: ["Tag One", "Tag Two", "Tag Three"],
  }
];

const RecentProject = () => {
  return (
    <section className="scroll-m-18 bg-white px-4 py-10 sm:px-6 lg:px-16" id="recent-projects">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="heading-font mb-2 text-2xl font-bold text-[var(--brand-text)] sm:text-3xl">Recent Projects</h2>
        <p className="mx-auto mb-10 max-w-xl text-md text-[var(--brand-muted)] sm:text-lg">
          Real installs. Real Yorkshire homes. Real results.
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
            1280: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="brand-card brand-card-hover relative mb-12 flex h-120 flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm border border-[var(--brand-border)]">
                <div className="relative overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="h-58 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src="logo.png"
                      alt={project.title}
                      className="sm:h-65 h-55 w-72 mx-auto sm:w-full lg:h-68 p-2 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="heading-font mb-1 text-lg font-semibold text-[var(--brand-text)]">{project.title}</h3>
                  <div className="mb-2 flex items-center text-sm text-[var(--brand-muted)]">
                    <MapPin className="mr-1 h-4 w-4 text-[var(--brand-gold)]" />
                    {project.location}
                  </div>
                  <p className="mb-4 text-sm text-[var(--brand-muted)] line-clamp-3">{project.description}</p>
                  <div className="mt-auto mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[var(--brand-border)] px-2 py-1 text-[10px] uppercase tracking-wider text-[var(--brand-text)]"
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