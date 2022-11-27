import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="hero mt-8 bg-gradient-to-t from-white to-green-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="lg:w-1/2 lg:h-[400px] translate-x-4 duration-500 ease-in "
          alt="laptop"
        />
        <div className="">
          <h1 className="text-5xl font-sans font-bold ">
            Sell Here <br /> Your used Laptop
          </h1>
          <p className="py-6 text-sm">
            We are the only one trusted online platform; <br /> from where you can buy so many
            brands and <br /> models used laptop without any doubt and hassels.
          </p>
          <Link to="/">
            <button className="border w-36 bg-green-600 px-2 py-3 rounded-md font-medium hover:bg-green-800 text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
