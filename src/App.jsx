import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext(0);

const App = () => {
  const [cart, setCart] = useState(0);
  const [addCart, setAddCart] = useState([]);
  const [heart, setHeart] = useState(0);
  const [addPrice, setAddPrice] = useState(0);
  const [addWishlist, setAddWishlist] = useState([]);

  const handleCart = (gadget) => {
    const { availability } = gadget;

    if (availability === true) {
      setCart(cart + 1);
    }
  };

  const handleAddCart = (cart) => {
    const { availability } = cart;

    if (availability === true) {
      const newCart = [...addCart, cart];
      setAddCart(newCart);
      toast("Item added to the Cart Successfully");
    } else {
      toast("Out of Stock");
    }
  };

  const handleHeart = () => {
    setHeart(heart + 1);
  };

  const handleAddPrice = (cart) => {
    const newPrice = addPrice + cart.price;
    const fixed = Number(newPrice.toFixed(2));
    setAddPrice(fixed);
  };

  const handleAddWishlist = (addCart) => {
    const alreadyExists = addWishlist.some(
      (item) => item.product_id === addCart.product_id
    );

    if (!alreadyExists) {
      setAddWishlist([...addWishlist, addCart]);
      toast("Item added to the Wishlist Successfully");
    }

    console.log("Updated addWishlist:", [...addWishlist, addCart]);
  };

  return (
    <>
      <div className="bg-base-200 pt-10 w-full">
        <CartContext.Provider
          value={{
            cart,
            setCart,
            handleCart,
            handleAddCart,
            addCart,
            setAddCart,
            heart,
            handleHeart,
            handleAddPrice,
            addPrice,
            setAddPrice,
            addWishlist,
            handleAddWishlist,
          }}
        >
          <Navbar />
          <Outlet />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:slide
          />
        </CartContext.Provider>
        <Footer />
      </div>
    </>
  );
};

export default App;
