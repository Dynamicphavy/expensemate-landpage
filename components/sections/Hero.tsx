import React from "react";
import Intro from "./Intro";
import HowItWorks from "./HowItWorks";
import Include from "./Include";

const Hero = () => {
  return (
    <div className="px-[15.625rem]">
      <Intro />
      <HowItWorks />
      <Include />
    </div>
  );
};

export default Hero;
