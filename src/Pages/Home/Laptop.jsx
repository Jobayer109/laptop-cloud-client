import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Laptop = ({ laptop }) => {
  const { img, location, name, _id, resale_price, paid } = laptop;

  return (
    <div className="card w-72 mx-auto hover:border-green-500 hover:shadow-xl border border-black rounded-md">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" className=" w-[90%] h-44 mx-auto" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title  text-sm">{name}</h2>
        <p className="text-xs -mb-2 ">Location: {location}</p>
        <p className="text-xs  text-orange-600 mt-0 font-bold">Price: $ {resale_price}</p>
        <div className="card-actions justify-end">
          {paid ? (
            <button className="badge badge-outline text-red-700 ">Sold out</button>
          ) : (
            <Link to={`/laptop/${_id}`}>
              <button className="badge badge-outline hover:bg-green-700 hover:text-white ">
                View details
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
