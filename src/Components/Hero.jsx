import React from "react";
import { Hero_image } from "../assets";

const Hero = () => {
  return (
    <div>
      <img src={Hero_image} className="w-screen h-screen object-cover" />
    </div>
  );
};

export default Hero;
