import React from "react";

const WishListItem = ({ wishlistItem }) => {
    console.log(wishlistItem)
    const { product_title, product_image, description, price } = wishlistItem;

  return (
    <>
      <div className="lg:w-[70%] mx-auto my-12 bg-base-100 rounded-xl p-4">
        <div className="flex gap-14 items-center p-4 lg:flex-row flex-col">
          <img className="lg:w-44 rounded-2xl" src={product_image} alt="" />
          <div className="flex flex-col gap-6 lg:items-start items-center">
            <h1 className="text-3xl font-sora font-bold">{product_title}</h1>
            <p className="font-medium font-sora">{description}</p>
            <p className="font-sora font-medium">Price: {price} $</p>
            <button className="font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl lg:w-1/4 hover:bg-purple-500">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListItem;
