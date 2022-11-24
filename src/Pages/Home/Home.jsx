import React from "react";
import Advertises from "./Advertises";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="lg:px-20">
      <Banner />
      <Categories />
      <Advertises />
    </div>
  );
};

export default Home;
