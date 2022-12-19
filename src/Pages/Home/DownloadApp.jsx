import React from "react";
import appleStore from "../../assets/icons/appleStore.png";
import playStore from "../../assets/icons/googleStore.webp";
import download from "../../assets/images/download banner.svg";

const DownloadApp = () => {
  return (
    <div className="card card-side bg-base-100 shadow-lg p-8 my-20">
      <figure>
        <img src={download} alt="" className="lg:w-1/2 hidden md:block lg:block" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-green-500">Download our app</h2>
        <p className="text-gray-500 text-sm">
          Buying & Selling is easier from our app too! To buy or sell on the go, download our app.
        </p>
        <div className="flex-grow-0 items-start justify-start">
          <img src={playStore} alt="" className="h-16 border-2 border-black rounded-xl w-44" />
          <img src={appleStore} alt="" className="h-16 mt-4 border rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
