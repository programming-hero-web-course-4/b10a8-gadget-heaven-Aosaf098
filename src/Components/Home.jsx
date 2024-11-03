import React from "react";
import Banner from "./Banner";
import Gadgets from "./Gadgets";

const Home = () => {
  return (
    <>
      <div className="max-w-[90%] mx-auto">
        <Banner />
        <Gadgets />
      </div>
    </>
  );
};

export default Home;
