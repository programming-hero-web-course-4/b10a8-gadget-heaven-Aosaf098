import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export const CartContext = createContext(0);

const App = () => {
  const [cart, setCart] = useState(0);
  const [addCart, setAddCart] = useState([])
  const [heart, setHeart] = useState(0)
  const [addPrice, setAddPrice] = useState(0)
  const [addWishlist, setAddWishlist] = useState([])
  const [heartDisabled, setHeartDisabled] = useState(false)

  const handleCart = () => {
    setCart(cart + 1);
  }

  const handleAddCart = (cart) => {
    console.log(cart)
    const newCart = [...addCart, cart]
    setAddCart(newCart)
  }

  const handleHeart = () => {
    setHeart(heart + 1)
  }

  const handleAddPrice = (cart) => {
    setAddPrice(addPrice + cart.price)
  }

  const handleAddWishlist = (addCart) => {

    const alreadyExists = addWishlist.some(item => item.product_id === addCart.product_id)

    if(!alreadyExists) {
      setAddWishlist([...addWishlist, addCart])
    }

    console.log('Updated addWishlist:', [...addWishlist, addCart]);
    // setAddWishlist(addCart)
    // const {product_id} = addCart
    // console.log(product_id)

    // console.log(addWishlist)
  }





























    // console.log(Array.isArray(addWishlist))
    // setaddWishlist(addCart)
    // console.log(addWishlist, Array.isArray(addWishlist))
    // if (addWishlist.includes(product_id)) {
    //   // const newww = [...addWishlist, addCart]
    //   // setaddWishlist(newww)
    //   // console.log(newww)
    //   console.log(true)
    // } else {
    //   console.log(false)
    // }

    // console.log(addCart)
    // console.log(addWishlist)
    
    // const newWishlist = [...addWishlist, addCart]
    // // console.log(newWishlist)
    // setaddWishlist(newWishlist)

    // const alreadyExists = newWishlist.filter((wishItem) => wishItem.id === addCart.id)
    // console.log(alreadyExists)

    // console.log(product_id)

    // if (!alreadyExists) {
    //   const newWishlist = [...addWishlist, addCart]
    //   console.log(newWishlist)
    //   setaddWishlist(newWishlist)
    // } else {
    //   console.log(123)
    // }
      // setHeartDisabled(true)
      // console.log(heartDisabled)
    //   // const newWishlist = [...addWishlist, cart]
    //   setaddWishlist(...addWishlist, cart)
    //   console.log("Items Added")
    // } else {
    //   console.log('Already Exists')
    // }
    // console.log(newWishlist)
  
  // console.log(addWishlist)

  return (
    <>
      <div className="bg-base-200 pt-10">
        <CartContext.Provider value={{ cart, setCart, handleCart, handleAddCart, addCart, setAddCart, heart, handleHeart,handleAddPrice, addPrice, addWishlist, handleAddWishlist }}>
          <Navbar />
          <Outlet />
        </CartContext.Provider>
        <Footer />
      </div>
    </>
  );
};

export default App;
