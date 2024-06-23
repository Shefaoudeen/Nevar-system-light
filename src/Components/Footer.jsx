import React from "react";
import { Logo, N_Logo } from "../assets";

const Footer = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed bottom-0 bg-black select-none top-0 -z-10">
      <div className="w-[40%] flex justify-center">
        <img src={N_Logo} alt="" />
      </div>
      <div className="w-[60%] text-white flex justify-center flex-col items-center gap-3">
        <h1 className="font-bold text-7xl">CONTACT US</h1>
        <div className="min-w-[75%] h-[350px] bg-white rounded-3xl text-black relative">
          <p className="pt-5 pl-5 text-xl">Enter your message</p>
          <button className="absolute bg-gray-400 text-xl px-6 py-2 text-white rounded-xl bottom-3 right-3 font-bold">
            {`< Send />`}
          </button>
        </div>
        <div className="flex justify-around w-full text-black px-20 pt-5">
          <div className="w-[70px] h-[70px] bg-white rounded-full text-center">
            insta
          </div>
          <div className="w-[70px] h-[70px] bg-white rounded-full text-center">
            yt
          </div>
          <div className="w-[70px] h-[70px] bg-white rounded-full text-center">
            linkedin
          </div>
        </div>
      </div>
      <div className="absolute w-[75vw] h-[75vh] bg-slate-800 blur-[200px] -z-20"></div>

      <div className="absolute flex w-full justify-center bottom-0 bg-inherit text-white items-center text-xl ">
        <footer className="flex w-[95%] justify-between items-center border-t-2 border-white">
          <div className="py-4">
            &#169; 2024 Nevar-system All Rights Reserved
          </div>
          <div className="absolute text-center w-full">
            <p>Developed by PTU-Design Club</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
