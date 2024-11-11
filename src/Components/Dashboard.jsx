import React, { useContext } from "react";
import { Link, useLocation, useLoaderData, useParams} from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { Helmet } from "react-helmet";
import { CartContext } from "../App";


const Dashboard = () => {

  const {setCart, addCart, setAddCart, addPrice, setAddPrice, addWishlist} = useContext(CartContext)

  const handleSorting = () => {
    const sortedList = [...addCart].sort((a, b) => b.price - a.price)
    setAddCart(sortedList)
  }

  const location = useLocation()

  const data = useLoaderData()
  console.log(data)

  return (
    <>
      <Helmet>
        <title>Dashboard | StarTech</title>
      </Helmet>
      <div className="bg-prim flex flex-col justify-center items-center gap-4 py-6 mt-6">
        <h1 className="text-4xl font-sora font-bold text-white">Dashboard</h1>
        <p className="text-sm font-sora font-medium text-base-200 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>
        <div className="flex items-center justify-center gap-10">
          <Link to={"cart"}>
            <button className="px-6 py-2 bg-white rounded-3xl font-bold my-4">
              Cart
            </button>
          </Link>
          <Link to={"wishlist"}>
            <button className="px-6 py-2 bg-white rounded-3xl font-bold my-4">
              Wishlist
            </button>
          </Link>
        </div>
      </div>
      <div>
        {
          // addCart.length === 0 && <h1 className="text-7xl">Nothing is Here</h1>
        }
        {
          (location.pathname === '/dashboard/cart' || location.pathname === '/dashboard') && <Cart setCart={setCart} addCart={addCart} setAddCart={setAddCart} addPrice={addPrice} setAddPrice={setAddPrice} handleSorting={handleSorting}  />
        }
      </div>
      <div>
        {
          location.pathname === '/dashboard/wishlist' && <Wishlist addWishlist={addWishlist} />
        }
      </div>
    </>
  );
};

export default Dashboard;
