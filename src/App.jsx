import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-base-200 pt-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
