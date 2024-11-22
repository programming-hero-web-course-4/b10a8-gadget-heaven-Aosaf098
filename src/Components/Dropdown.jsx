import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <details className="dropdown">
        <summary className="btn m-1 border-none">
          <RxHamburgerMenu size={20} />
        </summary>
        <ul className="menu dropdown-content -right-4 top-20 bg-base-100 rounded-box z-[1] w-32 space-y-4 p-2 shadow">
          <Link to={"/"}>Home</Link>
          <Link to={"/stats"}>Statistics</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"/offers"}>Offers</Link>
        </ul>
      </details>
    </>
  );
};

export default Dropdown;