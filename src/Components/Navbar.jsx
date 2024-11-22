import { NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../App";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const location = useLocation();
  const { cart, heart } = useContext(CartContext);

  return (
    <>
      <div
        className={`flex lg:justify-around justify-between items-center max-w-[90%] mx-auto ${
          location.pathname === "/" && "bg-prim p-6 rounded-t-xl"
        }`}
      >
        <div className="flex items-center gap-2 lg:gap-4">
          <NavLink to={"/"}>
            <img
              className="lg:w-10 w-6"
              src="https://img.icons8.com/?size=48&id=TcPxEIKHdr0o&format=png"
              alt="Logo"
            />
          </NavLink>
          <h1 className="text-xl lg:text-3xl font-bold font-sora">StarkTech</h1>
        </div>
        <div className="lg:block hidden">
          <ul
            className={`flex items-center lg:gap-14 ${
              location.pathname === "/" && "text-white"
            }`}
          >
            <li className="text-lg font-semibold font-sora hover:text-slate-600">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-lg font-semibold font-sora hover:text-slate-600">
              <NavLink to={"stats"}>Statistics</NavLink>
            </li>
            <li className="text-lg font-semibold font-sora hover:text-slate-600">
              <NavLink to={"dashboard"}>Dashboard</NavLink>
            </li>
            <li className="text-lg font-semibold font-sora hover:text-slate-600">
              <NavLink to={"offers"}>Offers</NavLink>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center lg:gap-6 gap-4">
          <NavLink to={"dashboard"}>
            <div className="flex">
              <CiShoppingCart size={40} color="black" />
              {cart}
            </div>
          </NavLink>
          <NavLink to={"dashboard/wishlist"}>
            <div className="flex">
              <CiHeart size={40} color="black" />
              {heart}
            </div>
          </NavLink>
          <div className="lg:hidden block">
          <Dropdown />
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
