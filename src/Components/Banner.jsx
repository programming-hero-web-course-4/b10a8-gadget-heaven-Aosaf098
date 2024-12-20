import React from "react";
import BannerImg from "../../public/assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-prim flex flex-col items-center gap-6 pt-8 pb-8 lg:pb-64 rounded-b-xl px-2">
          <h1 className="text-center font-bold text-4xl lg:text-5xl text-white font-sora px-1">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h1>
          <p className="lg:w-1/2 text-center font-bold text-sm lg:text-md text-slate-300 font-sora">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to={"dashboard"}>
            <button className="px-6 py-2 bg-white rounded-3xl font-bold my-4">
              Shop Now
            </button>
          </Link>
          <div className="lg:hidden p-2 border border-solid border-slate-400 rounded-lg w-full mx-auto">
            <img className="w-full rounded-lg " src={BannerImg} alt="" />
          </div>
        </div>

        <div>
          <div className="hidden lg:block p-4 border border-solid border-slate-400 rounded-lg w-[40%] mx-auto absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-full rounded-lg " src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
