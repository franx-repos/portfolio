import { images } from "../data/imageData.js";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col lg:h-screen justify-center items-center bg-stone-950 font-frankyFont"
    >
      <h2 className="section-heading z-50 text-4xl md:text-5xl lg:text-6xl text-white mt-10 px-5 font-bold">
        About
      </h2>
      <div className="flex flex-col lg:flex-row w-4/5 mt-24">
        <div className="flex flex-col lg:w-1/2 lg:p-10 items-center">
          {/* <img className="w-36" src="src/assets/screen.png" alt="" /> */}
          <h3 className="text-3xl md:text-5xl lg:text-4xl text-white mt-5 px-5 font-bold">
            {"<fjf></fjf>"}
          </h3>
          <p className="lg:p-5 text-2xl text-white lg:text-center mt-5 font-light">
            Fully committed to the philosophy of life-long learning, I’m a full
            stack developer with a deep passion for JavaScript, React and all
            things web development. The unique combination of creativity, logic,
            technology and never running out of new things to discover, drives
            my excitement and passion for web development. When I'm not at my
            computer I like to spend my time reading, keeping fit and playing
            guitar.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-1/2 lg:p-10 mt-10 lg:mt-0 mb-16 lg:mb-0 justify-around lg:justify-evenly">
          {images.skills.map((skill, index) => (
            <figure
              key={index}
              id={`skill-${index + 1}`}
              className="flex flex-col h-fit w-28 lg:w-36 items-center m-2 p-3 border-2 border-green-400 hover:shadow-lg hover:shadow-green-500 rounded-lg"
            >
              <img
                className="h-12 lg:h-16 w-fit rounded"
                src={skill.url}
                alt="image description"
              />
              <figcaption className="{/*neonText*/} text-white mt-3 text-center text-xs lg:text-sm font-semibold uppercase">
                {skill.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
