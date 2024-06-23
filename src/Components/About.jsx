import React from "react";

const About = () => {
  return (
    <div className="min-w-screen relative min-h-screen bg-[rgb(60,60,60)] bg-gray-600 flex justify-center items-center select-none ">
      <div className="w-[40%] flex justify-center items-center relative">
        <div className="min-w-[75%] max-w-[75%] min-h-[300px] bg-white rounded-2xl rotate-[-10deg]"></div>
        <div className="min-w-[75%] max-w-[75%] min-h-[300px] bg-white/75 rounded-2xl rotate-[-20deg] absolute"></div>
      </div>
      <div className="w-[60%] px-10 flex flex-col gap-8">
        <div>
          <h1 className="text-white text-6xl font-bold text-center">ABOUT</h1>
        </div>
        <div className=" text-justify text-white text-xl leading-loose font-semibold">
          <p>
            In Nevar Systems, We here developing drone products and providing
            services in the field of technology and software analytics to
            develop end to end drone solutions from entire hardware to software
            stack to provide uniquely reliable solutions to work in complex
            environments to collect geospatial data and generate meaningful
            information aiding professionals in humanitarian aid, surveying, and
            engineering with little cost overhead and time which helps them to
            make important decisions quickly by various modes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
