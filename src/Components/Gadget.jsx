import React from "react";

const Gadget = ({gadget}) => {

    const {product_title, price, product_image} = gadget
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="pt-10">
          <img
            src="https://www.techlandbd.com/image/catalog/Dell/dell-xps-13-plus-9320-intel-core-i7-12th-gen-laptop.jpg#0"
            alt="Shoes"
            className="rounded-xl w-80 h-60 object-cover border-4 border-solid border-base-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold font-sora text-2xl">{product_title}</h2>
          <p className="font-sora">Price: {price}</p>
          <div className="card-actions flex items-center justify-center">
            <button className="px-6 py-2 bg-prim text-white rounded-3xl font-bold my-4">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gadget;


