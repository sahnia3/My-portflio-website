import React from "react";
import HeroHome from "../sub/HeroHome";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col h-screen w-full" id="home">
        <HeroHome />
      </div>
      <div className="relative flex flex-col h-full w-full" id="about-me">
      </div>
    </>
  );
};

export default Hero;
