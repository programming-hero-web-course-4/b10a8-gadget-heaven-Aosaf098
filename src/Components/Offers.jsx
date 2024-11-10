import React from "react";
import { Helmet } from "react-helmet";

const Offers = () => {
  return (
    <>
      <Helmet>
        <title>Offers | StartTech</title>
      </Helmet>
      <div className="bg-prim flex flex-col gap-8 items-center justify-center py-6 my-6">
        <h1 className="text-4xl font-sora font-bold text-white">Offers</h1>
        <p className="text-xl font-sora font-semibold text-base-200">
          Find your top offers and get the best deal that you can't refuse
        </p>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-4 gap-x-1 gap-y-8 mt-20">
        <img
          className="w-4/5 rounded-xl"
          src="https://www.techlandbd.com/image/cache/wp/gj/AAA-Offer/Running-offer-banner/Dahua-Monitor-fest-500x500.webp"
          alt=""
        />
        <img
          className="w-4/5 rounded-xl"
          src="https://www.techlandbd.com/image/cache/wp/ge/AAA-Offer/Running-offer-banner/fantech-500x500.webp"
          alt=""
        />
        <img
          className="w-4/5 rounded-xl"
          src="https://www.techlandbd.com/image/cache/wp/ge/ADAPTER/acer-laptop-500x500.webp"
          alt=""
        />
        <img
          className="w-4/5 rounded-xl"
          src="https://www.techlandbd.com/image/cache/wp/gj/AAA-Offer/Daily-content-banner/arous-motherboard-500x500.webp"
          alt=""
        />
        <img className="w-4/5 rounded-xl" src="https://www.techlandbd.com/image/cache/wp/ge/AAA-Offer/offer/october/gigabyte=offerss-500x500.webp" alt="" />
      </div>
    </>
  );
};

export default Offers;
