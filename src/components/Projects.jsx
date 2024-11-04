import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import { images } from "../data/imageData.js";
import { projects } from "../data/projectsData.js";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center bg-stone-900 font-frankyFont"
    >
      <h2 className="section-heading z-40 text-4xl md:text-5xl lg:text-6xl text-white mt-10 lg:mt-16 px-5 font-bold">
        Projects
      </h2>

      {projects.map((project, index) => (
        <div
          key={`project-${index + 1}`}
          id={`project-${index + 1}`}
          className={`flex h-screen w-full justify-center ${
            index % 2 === 0 ? "bg-stone-900" : "bg-stone-950"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:h-3/4 w-full lg:w-4/5 lg:mt-24 p-5">
            <div
              className={`flex flex-col w-full lg:w-1/5 h-fit ${
                index % 2 === 0 ? "lg:order-0" : "lg:order-1 lg:ml-5"
              }`}
            >
              <h3 className="text-3xl lg:text-4xl text-white mt-10 lg:mt-0 px-5 font-bold">
                {project.heading}
              </h3>
              <p className="flex flex-col text-xl lg:text-2xl text-white tracking-wide mt-5 px-5 font-light max-h-40 lg:max-h-72 overflow-y-scroll scrollbar-thin">
                {project.description}
                {project.additionalLinks &&
                  project.additionalLinks.map((link, index) => (
                    <a
                      key={`ext-link-${index}`}
                      className="mt-1 flex w-fit p-1 text-green-400 hover:bg-green-400 hover:text-stone-900"
                      href={link.url}
                      target="_blank"
                    >
                      {link.title}
                    </a>
                  ))}
              </p>

              <div className="flex flex-col lg:mt-5">
                <a
                  className="project-links relative z-40 lg:text-xl text-white tracking-wide mt-5 lg:mt-12 px-5 py-2 font-semibold uppercase hover:text-stone-900"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
                <a
                  className="project-links relative z-40 lg:text-xl text-white tracking-wide mt-5 lg:mt-12 px-5 py-2 font-semibold uppercase hover:text-stone-900"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  see code
                </a>
              </div>
            </div>
            <div className="flex flex-col h-1/2 lg:h-full lg:w-4/5 mt-16 lg:mt-0 bg-green-400 rounded-lg">
              <div className="h-full w-full max-w-full pt-3">
                <Swiper
                  key={`project-${index + 1}-slider`}
                  className="h-full"
                  modules={[EffectCoverflow, Pagination, Mousewheel]}
                  grabCursor
                  centeredSlides
                  initialSlide={0}
                  speed={900}
                  spaceBetween={-350}
                  slidesPerView="2"
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 2,
                    slideShadows: false,
                  }}
                  pagination={{ clickable: true }}
                  mousewheel={{
                    invert: true,
                    thresholdDelta: 50,
                    sensitivity: 1,
                  }}
                >
                  {images[project.id].map((img, index) => (
                    <SwiperSlide
                      key={`${project.id}-preview-${index}`}
                      id={`${project.id}-preview-${index}`}
                      className="h-full"
                    >
                      <figure className="h-full aspect-video">
                        <figcaption className="flex w-fit ml-1 px-5 py-1 text-white text-sm lg:text-lg uppercase bg-stone-900 mb-1 rounded-md">
                          {img.title}
                        </figcaption>
                        <img
                          className="h-5/6 rounded-lg border-l-4 border-r-4 border-green-400 hover:scale-125 transition-transform"
                          src={img.url}
                          alt=""
                        />
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
