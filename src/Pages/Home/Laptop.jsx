import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Laptop = ({ laptop }) => {
  const { img, location, name, _id, resale_price, paid } = laptop;

  return (
    <div className="card w-72 mx-auto  hover:shadow-2xl border border-gray-200 rounded-md">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" className=" w-[90%] h-44 mx-auto" />
        </PhotoView>
      </PhotoProvider>

      <div className=" text-center">
        <h2 className="font-bold  text-md">{name}</h2>
        <p className="text-xs -mb-3 ">Location: {location}</p>
        <p className="text-sm  text-orange-600 mt-3 font-bold">Price: $ {resale_price}</p>
        <div className="card-actions justify-center">
          {paid ? (
            <button className="w-full mt-6 bg-red-600 p-1 text-white ">Sold out</button>
          ) : (
            <Link className="w-full mt-6 bg-green-600 p-1 text-white " to={`/laptop/${_id}`}>
              <button>View details</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
