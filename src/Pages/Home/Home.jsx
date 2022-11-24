import React from "react";
import Advertises from "./Advertises";
import Banner from "./Banner";
import Categories from "./Categories";
import DownloadApp from "./DownloadApp";

const Home = () => {
  return (
    <div className="lg:px-20">
      <Banner />
      <Categories />
      <Advertises />
      <DownloadApp />
    </div>
  );
};

export default Home;
