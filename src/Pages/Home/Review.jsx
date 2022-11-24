import React from "react";
import { FaRegStar } from "react-icons/fa";

const Review = ({ review }) => {
  const { comment, name, country, rating, image } = review;

  return (
    <div className="container flex flex-col w-full h-52 p-6 mx-auto divide-y rounded-lg bg-slate-700 border hover:-translate-y-2 duration-500 ease-in">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-green-500">{name}</h4>
            <span className="text-xs dark:text-gray-400">{country}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-green-500">
          <FaRegStar className="text-green-500"></FaRegStar>
          <span className="text-sm font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-xs dark:text-gray-400 text-justify">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
