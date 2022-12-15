import React from "react";
import appleStore from "../../assets/icons/Apple store-Logo.wine.svg";
import playStore from "../../assets/icons/play_store.png";
import download from "../../assets/images/download banner.svg";

const DownloadApp = () => {
  return (
    <div className="card card-side bg-base-100 shadow-lg p-8 my-20">
      <figure>
        <img src={download} alt="" className="lg:w-1/2" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-green-500">Download our app</h2>
        <p className="text-gray-500 text-sm">
          Buying & Selling is easier from our app too! To buy or sell on the go, download our app.
        </p>
        <div className=" md:flex lg:flex items-start justify-start">
          <img
            src={appleStore}
            alt=""
            className="sm:h-10 lg:h-16 sm:w-24 lg:w-36 sm:mt-2 border rounded-lg mr-2 bg-green-600 hover:-translate-y-2 duration-500 ease-in-out "
          />
          <img
            src={playStore}
            alt=""
            className="sm:h-10 lg:h-16 sm:w-24 lg:w-36 sm:mt-2 border rounded-lg mr-2 bg-green-600 hover:-translate-y-2 duration-500 ease-out "
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
