import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Laptop = ({ laptop, setDetails }) => {
  const { img, location, name, _id, resale_price } = laptop;

  return (
    <div className="card w-80 shadow-xl border border-black rounded-md">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" className=" w-72 h-44 mx-auto" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body bg-green-900">
        <h2 className="card-title text-white text-sm">{name}</h2>
        <p className="text-xs text-white">Location: {location}</p>
        <p className="text-xs  text-green-500 font-bold">Price: $ {resale_price}</p>
        <div className="card-actions justify-end">
          <Link to={`/laptop/${_id}`}>
            <button className="badge badge-outline text-white hover:text-green-400">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
