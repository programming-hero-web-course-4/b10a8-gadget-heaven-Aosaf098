// import { list } from "postcss";
import React, { createContext, useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { CartContext } from "../App";
import { Helmet } from "react-helmet";

// export const gadgetContext = createContext()

const GadgetDetails = () => {

  const {handleCart, handleAddCart, handleHeart, handleAddPrice, handleAddWishlist, addWishlist} = useContext(CartContext)

  const { gadgetId } = useParams();

  const data = useLoaderData();
//   console.log(data)

  const id = Number(gadgetId);

  const gadget = data.find((gadget) => gadget.product_id === id);
//   console.log(gadget)
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;

  const isDisabled = addWishlist.some(item => item.product_id === gadget.product_id)

  return (
    <>
    <Helmet>
        <title>Product Details | StarkTech</title>
    </Helmet>
      <div className="lg:relative mt-2 lg:mb-[450px]">
        <div className="mt-4 pt-16 pb-16 lg:pb-60 bg-prim w-full flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl font-bold font-sora text-center text-white">
            Product Details
          </h1>
          <p className="text-base-100 text-sm font-medium font-sora text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories,br
            we have it all
          </p>
        </div>
        <div className="lg:w-[65%] mt-12 lg:mt-0 mx-auto lg:absolute lg:top-[120%] lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center lg:flex-row flex-col justify-evenly bg-white rounded-3xl">
            <div className="hero-content">
              <img
                src={product_image}
                className="rounded-2xl w-96 lg:h-[500px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 py-4 px-8">
                <h1 className="text-4xl font-bold font-sora mt-4">{product_title}</h1>
                <p className="font-sora text-lg font-medium">Price: {price}$</p>
                <span className={`w-1/4 text-center rounded-2xl font-sora font-normal text-white ${availability ? 'bg-green-400' : 'bg-red-500'}`}>{availability ? "In Stock" : "Out of Stock"}</span>
                <p className="py-2 font-sora font-medium">{description}</p>
                <p>
                  <h3 className="text-lg font-bold font-sora mb-1">Specifications</h3>
                  <ol className="list-decimal ml-8 font-sora space-y-1 font-medium">
                    {
                        specification.map((specs, idx) => <li key={idx}>{specs}</li>)
                    }
                  </ol>
                </p>
                <div>
                  <h5 className="text-lg font-bold font-sora mb-1">Rating</h5>
                  <ReactStars count={rating} size={24} isHalf={true}/>
                </div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div>
                    <button onClick={() => {
                        handleCart(gadget)
                        handleAddCart(gadget)
                        handleAddPrice(gadget)
                        }} 
                        className="px-6 py-2 bg-prim text-white rounded-3xl font-bold my-4 flex items-center gap-4 justify-center hover:bg-purple-500">
                        Add to Cart
                        { <CiShoppingCart size={30} />}
                    </button>
                  </div>
                  <button onClick={() => {
                    handleHeart()
                    handleAddWishlist(gadget)
                    }}
                    disabled={isDisabled}
                    className={`bg-base-500 rounded-[50%] cursor-pointer hover:bg-base-200 ${isDisabled && 'opacity-60 cursor-not-allowed'} `}>
                    {
                        <CiHeart size={30} />
                    }
                  </button>
                </div>
            </div>
            </div>
          </div>
    </>
  );
};

export default GadgetDetails;
