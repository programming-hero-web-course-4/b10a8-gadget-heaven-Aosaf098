import React from "react";

const CartItem = ({ cartItem }) => {
  const { product_title, product_image, description, price } = cartItem;
  return <>
    <div className="lg:w-[70%] mx-auto my-12 p-4 bg-base-100 rounded-xl">
        <div className="flex gap-14 items-center p-4 lg:flex-row flex-col">
            <img className="lg:w-44 rounded-2xl" src={product_image} alt="" />
            <div className="flex flex-col gap-6 lg:items-start items-center">
                <h1 className="text-3xl font-sora font-bold">{product_title}</h1>
                <p className="font-medium font-sora text-center">{description}</p>
                <p className="font-sora font-medium">Price: {price} $</p>
            </div>
        </div>
    </div>
  </>;
};

export default CartItem;
