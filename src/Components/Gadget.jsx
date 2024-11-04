import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({gadget}) => {

    const {product_id,product_title, price, product_image} = gadget
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="pt-10">
          <img
            src={product_image}
            alt="Gadgets"
            className="rounded-xl w-80 h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold font-sora text-2xl">{product_title}</h2>
          <p className="font-sora">Price: {price}</p>
          <div className="card-actions flex items-center justify-center">
            <Link to={`gadgets/${product_id}`}>
                <button className="px-6 py-2 bg-prim text-white rounded-3xl font-bold my-4">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gadget;


