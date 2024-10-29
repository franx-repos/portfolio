import { useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.waves";
import heroLogo from "../assets/icon-2.svg";

function Hero() {
  useEffect(() => {
    const vantaEffect = WAVES({
      el: "#vanta",
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x21104,
      //color: 0x201d1e,
      shininess: 20.0,
      waveHeight: 40.0,
      waveSpeed: 0.4,
      zoom: 0.8,
    });

    return () => {
      vantaEffect && vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-screen" id="vanta">
        <div
          id="home"
          className="flex flex-col h-screen justify-center items-center"
        >
          <img src={heroLogo} alt="Logo" className="h-24 lg:h-32" />
          <h1 className="text-5xl font-frankyFont md:text-5xl lg:text-6xl text-white mt-5 px-5 font-light">
            Hello, I'm <span className="text-green-400">Frank</span>.
          </h1>
          <p className="text-3xl lg:text-4xl text-white text-center font-frankyFont tracking-wide mt-5 px-5 font-light">
            I'm a{" "}
            <span className="text-green-400">full stack web developer</span>{" "}
            from Leipzig.
          </p>
          <a
            className="bg-transparent hover:bg-green-400 text-2xl text-green-400 font-frankyFont hover:text-black font-medium py-2 px-8 border border-green-400 hover:border-transparent rounded mt-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            href="#projects"
          >
            View my work
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
