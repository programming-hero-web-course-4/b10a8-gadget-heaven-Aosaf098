import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export const CartContext = createContext(0);

const App = () => {
  const [cart, setCart] = useState(0);

  const handleCart = () => {
    console.log(233)
    setCart(cart + 1);
  };

  return (
    <>
      <div className="bg-base-200 pt-10">
        <CartContext.Provider value={{ cart, setCart, handleCart }}>
          <Navbar />
          <Outlet />
        </CartContext.Provider>
        <Footer />
      </div>
    </>
  );
};

export default App;
