import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export const CartContext = createContext(0);

const App = () => {
  const [cart, setCart] = useState(0);
  const [addCart, setAddCart] = useState([])
  const [heart, setHeart] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [addPrice, setAddPrice] = useState(0)

  const handleCart = () => {
    // console.log(233)
    setCart(cart + 1);
  };

  const handleAddPrice = (cart) => {
    console.log(cart.price)
    setAddPrice(addPrice + cart.price)
  }
  const handleHeart = () => {
    // console.log('Added to wishlist')
    setHeart(heart + 1)
  }
  const handleDisabled = () => {
    // console.log('Button disabled')
    setDisabled(true)
  }

  const handleAddCart = (cart) => {
    console.log(cart)
    // console.log('Items adding in the Cart')
    const newCart = [...addCart, cart]
    // console.log(newCart)
    setAddCart(newCart)
  }

  return (
    <>
      <div className="bg-base-200 pt-10">
        <CartContext.Provider value={{ cart, setCart, handleCart, handleAddCart, addCart, setAddCart, heart, handleHeart, disabled, handleDisabled, handleAddPrice, addPrice }}>
          <Navbar />
          <Outlet />
        </CartContext.Provider>
        <Footer />
      </div>
    </>
  );
};

export default App;
