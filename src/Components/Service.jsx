import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../assets";
import VideoCarousel from "./VideoCarousel";

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <section id="highlights" className="w-screen min-h-screen bg-white/10">
        <div className="h-[100px] flex items-center pl-[100px] pt-[150px]">
          <h1 className="text-5xl text-gray-600 font-bold">
            Get the highlights
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Service;
