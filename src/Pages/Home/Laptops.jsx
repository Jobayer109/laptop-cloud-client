import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import noItem from "../../assets/images/no_item.svg";
import Laptop from "./Laptop";

const Laptops = () => {
  const laptops = useLoaderData();

  return (
    <div>
      <div className=" px-20 mt-10 mb-24">
        {laptops.length ? (
          <>
            <h3 className="text-2xl mb-6  font-bold">
              <span className="text-3xl text-green-600 font-bold">A</span>vailable Laptops:{" "}
              {laptops.length}
            </h3>
          </>
        ) : (
          <div className="my-20 text-center">
            <img src={noItem} alt="" className="h-40 w-[50%] mx-auto mb-10" />
            <p className="text-2xl mb-6  font-bold ">No items available</p>
            <Link to="/">
              <button className="btn text-sm border w-60 bg-green-600 text-white px-2 py-2 rounded-md font-semibold hover:bg-white hover:text-green-600 hover:border-green-500 translate duration-300 ease-in">
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
          {" "}
          {laptops?.map((laptop) => (
            <Laptop key={laptop._id} laptop={laptop}></Laptop>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
