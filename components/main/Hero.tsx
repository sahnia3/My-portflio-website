import React from "react";
import HeroHome from "../sub/HeroHome";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col h-screen w-full" id="home">
        <HeroHome />
      </div>
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <div className="absolute top-0 left-0 w-full h-[30vw] overflow-hidden z-[1]">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute left-0 w-full top-[-26vw]"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
