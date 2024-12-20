import React from "react";
import WishListItem from "./WishListItem";

const Wishlist = ({ addWishlist }) => {
    console.log(addWishlist)
  return (
    <div className="mt-10">
      <div className="lg:w-[70%] mx-auto">
        <h1 className="font-sora font-bold text-2xl text-center">WishList</h1>
      </div>
      {
        addWishlist.map((wishlistItem, idx) => <WishListItem key={idx} wishlistItem={wishlistItem} />)
      }
    </div>
  );
};

export default Wishlist;
