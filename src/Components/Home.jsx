import React from "react";
import Banner from "./Banner";
import Gadgets from "./Gadgets";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | StarTech</title>
      </Helmet>
      <div className="max-w-[90%] mx-auto">
        <Banner />
        <Gadgets />
      </div>
    </>
  );
};

export default Home;
