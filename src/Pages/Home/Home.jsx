import React from "react";
import Advertises from "./Advertises";
import Banner from "./Banner";
import Categories from "./Categories";
import DownloadApp from "./DownloadApp";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="lg:px-20">
      <Banner />
      <Categories />
      <Advertises />
      <DownloadApp />
      <Reviews />
    </div>
  );
};

export default Home;
