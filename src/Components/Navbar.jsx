import React from "react";
import { Logo, Logo_white } from "../assets";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 z-[100] top-0 w-full py-2 flex justify-between px-5">
      <div className="my-2 py-1 bg-slate-900 bg-opacity-75 text-white border border-black flex items-center gap-10 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
        <img src={Logo_white} alt="" width={60} />
      </div>
      <div className="my-2 bg-slate-900 bg-opacity-75 text-white border border-black flex items-center gap-10 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
        <div>About</div>
        <div>Product</div>
        <div>Service</div>
        <div>Blog</div>
      </div>
      <div className="my-2 bg-slate-900 bg-opacity-75 text-white border border-black flex items-center gap-10 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
        contact Us
      </div>
    </div>
  );
};

export default Navbar;
