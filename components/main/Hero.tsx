import React from "react";
import HeroHome from "../sub/HeroHome";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col h-screen w-full" id="home">
        <HeroHome />
      </div>
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>

      </div>
    </>
  );
};

export default Hero;
