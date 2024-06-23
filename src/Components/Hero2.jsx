import React from "react";
import Hero_details from "../Data/Hero";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Info_icon, watchImg } from "../assets";

const Hero2 = () => {
  return (
    <div className="min-w-screen select-none relative min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-screen">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          transitionTime={1000}
          showStatus={false}
          autoFocus={true}
        >
          {Hero_details.map((element, index) => {
            return (
              <div
                className="relative w-screen -mt-[250px] py-[0px]"
                key={index}
              >
                <div className="text-center text-[250px] font-extrabold leading-[190px]">
                  <div
                    id="hero-text"
                    className="relative py-5 flex flex-col justify-center  mt-[300px]"
                  >
                    <div className="bg-gradient-to-tr bg-clip-text from-black to-slate-500 z-[-50]">
                      <h1 className="text-transparent z-[0] py-5">
                        {element.title}
                      </h1>
                    </div>
                    <div className="relative bg-gradient-to-tr bg-clip-text from-black to-slate-500 z-[50] py-5">
                      <h1 className="text-transparent z-50 py-">
                        {element.sub_title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <h1
          id="slogan"
          className="text-xl text-center text-black mt-5 font-light tracking-[10px] mb-3"
        >
          SEE THE IMPOSSIBLES!
        </h1>
        <div className="flex justify-center gap-10 text-xl">
          <button className="my-2 py-1 bg-slate-900 bg-opacity-75 text-white border border-black flex items-center gap-2 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
            <img src={Info_icon} width={27} />
            Learn More
          </button>
          <button className="my-2 bg-slate-900 bg-opacity-75 text-white border border-black flex items-center gap-2 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
            <img src={watchImg} alt="" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
