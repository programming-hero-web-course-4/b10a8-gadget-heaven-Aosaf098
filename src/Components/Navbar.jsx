import { NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../App";

const Navbar = () => {
  const location = useLocation();
  const { cart, heart } = useContext(CartContext);

  return (
    <>
      <div
        className={`flex justify-around items-center max-w-[90%] mx-auto ${
          location.pathname === "/" && "bg-prim p-6 rounded-t-xl"
        }`}
      >
        <div className="flex items-center gap-4">
          <NavLink to={"/"}>
            <img
              className="w-10"
              src="https://img.icons8.com/?size=48&id=TcPxEIKHdr0o&format=png"
              alt="Logo"
            />
          </NavLink>
          <h1 className="text-3xl font-bold font-sora">StarkTech</h1>
        </div>
        <div>
          <ul
            className={`flex items-center gap-14 ${
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
        <div className="flex items-center gap-6">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
