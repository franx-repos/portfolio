import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";

function Projects() {
  const projects = [
    {
      id: "sowo-gv-onboarder",
      heading: "Sowo GV Onboarder",
      description: "Some App explaining text to catch attention.",
      liveLink: "",
      codeLink: "https://github.com/franx-repos/sowo-gv-onboarder",
      imgs: [
        {
          title: "QR Code Scanner",
          url: "src/assets/img/sowo-gv-onboarder/GV-Onboarder_Screenshot_1.png",
        },
        {
          title: "input page",
          url: "src/assets/img/sowo-gv-onboarder/GV-Onboarder_Screenshot_2.png",
        },
      ],
    },
    {
      id: "tax-max",
      heading: "TaxMax Fullstack App",
      description: "Some App explaining text to catch attention.",
      liveLink: "https://taxmax.netlify.app/",
      codeLink: "https://github.com/franx-repos/final-project",
      imgs: [
        { title: "start page", url: "src/assets/img/tax-max/home_1.png" },
        {
          title: "partner and task slider",
          url: "src/assets/img/tax-max/home_2.png",
        },
        { title: "register page", url: "src/assets/img/tax-max/register.png" },
        { title: "profile page", url: "src/assets/img/tax-max/profile.png" },
      ],
    },
    {
      id: "sowo-gv-onboarder",
      heading: "Sowo GV Onboarder",
      description: "Some App explaining text to catch attention.",
      liveLink: "",
      codeLink: "https://github.com/franx-repos/sowo-gv-onboarder",
      imgs: [
        {
          title: "QR Code Scanner",
          url: "src/assets/img/sowo-gv-onboarder/GV-Onboarder_Screenshot_1.png",
        },
        {
          title: "input page",
          url: "src/assets/img/sowo-gv-onboarder/GV-Onboarder_Screenshot_2.png",
        },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-center bg-stone-900 font-frankyFont"
    >
      <h2 className="section-heading z-50 text-4xl md:text-5xl lg:text-6xl text-white mt-10 lg:mt-16 px-5 font-bold">
        Projects
      </h2>

      {projects.map((project, index) => (
        <div
          key={`project-${index + 1}`}
          id={`project-${index + 1}`}
          className={`flex h-screen lg:w-full justify-center ${
            index % 2 === 0 ? "bg-stone-900" : "bg-stone-950"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:h-3/4 lg:w-4/5 lg:mt-24  p-5">
            <div
              className={`flex flex-col lg:w-1/5 h-fit ${
                index % 2 === 0 ? "lg:order-0" : "lg:order-1 ml-5"
              }`}
            >
              <h3 className="text-3xl lg:text-4xl text-white mt-10 lg:mt-5 px-5 font-bold">
                {project.heading}
              </h3>
              <p className="text-2xl lg:text-3xl text-white tracking-wide mt-5 px-5 font-light">
                {project.description}
              </p>
              <div className="flex flex-col lg:mt-5">
                <a
                  className="project-links relative z-50 lg:text-xl text-white tracking-wide mt-5 lg:mt-12 px-5 py-2 font-semibold uppercase hover:text-stone-900"
                  href={project.liveLink}
                  target="_blank"
                >
                  Live App
                </a>
                <a
                  className="project-links relative z-50 lg:text-xl text-white tracking-wide mt-5 lg:mt-12 px-5 py-2 font-semibold uppercase hover:text-stone-900"
                  href={project.codeLink}
                  target="_blank"
                >
                  see code
                </a>
              </div>
            </div>
            <div className="flex flex-col h-1/2 lg:h-full lg:w-4/5 mt-16 lg:mt-0 bg-green-400 rounded-lg">
              <div className="h-full w-full pt-3">
                <Swiper
                  key={`project-${index + 1}-slider`}
                  className="h-full"
                  modules={[EffectCoverflow, Pagination, Mousewheel]}
                  grabCursor
                  centeredSlides
                  initialSlide={1}
                  speed={900}
                  spaceBetween={-350}
                  slidesPerView="2"
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={{ clickable: true }}
                  mousewheel={{
                    invert: true,
                    thresholdDelta: 50,
                    sensitivity: 1,
                  }}
                >
                  {project.imgs.map((img, index) => (
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
                          className="h-5/6 rounded-lg border-4 border-green-400 hover:scale-125 transition-transform"
                          src={img.url}
                          alt=""
                          // className="hover:scale-125 transition-transform"
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
