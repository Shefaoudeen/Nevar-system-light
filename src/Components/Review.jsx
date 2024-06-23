import React from "react";

const Review = () => {
  return (
    <div className="min-w-screen relative min-h-screen bg-[rgb(60,60,60)] bg-gray-600 flex justify-center items-center select-none flex-col gap-10 z-10 opacity-100">
      <div className="text-white font-semibold text-6xl">REVIEWS</div>
      <div className="w-full flex justify-center items-center ">
        <div className="w-[60%] h-[450px] bg-white rounded-2xl flex justify-center  flex-col gap-5 relative backdrop-blur-xl shadow-2xl shadow-gray-800">
          <div className="px-[15%] text-xl font-semibold text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae iste similique rerum accusantium debitis aperiam ex,
            fuga consequatur! Sed ipsa animi earum, libero labore consequuntur
            repellendus eius fugit atque corrupti.
          </div>
          <div className="px-20 text-xl font-semibold text-start pl-[15%]">
            Person
          </div>
          <div className="px-20 text-xl font-semibold pl-[15%]">role</div>
          <div className="w-[200px] h-[200px] bg-gray-400 absolute -bottom-10 -left-10 rounded-full backdrop-blur-xl shadow-2xl shadow-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
