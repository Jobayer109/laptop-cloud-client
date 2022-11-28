import React from "react";
import { FaHeart } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Laptop = ({ laptop, setDetails }) => {
  const {
    _id,
    img,
    location,
    name,
    original_price,
    posted_on,
    resale_price,
    seller_name,
    year_of_use,
    phone,
    verified,
    paid,
  } = laptop;

  const handleWishList = (id) => {
    fetch(`http://localhost:5000/wishlist/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex items-center justify-around shadow-lg">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" className="w-80 h-60" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="w-1/2 relative ">
        <p onClick={() => handleWishList(_id)} className="absolute right-5">
          <FaHeart className="text-red-600 text-2xl" />{" "}
        </p>
        <h2 className="">{name}</h2>
        <div className="text-sm">
          <p>Resale Price: ${resale_price}</p>
          <p>Original Price: ${original_price}</p>
          <p>Location: {location}</p>
          <p>Posted on: {posted_on}</p>
          <p>Years of use: {year_of_use} year</p>
          <p>Phone: {phone}</p>
          <p className="flex items-center">
            Seller's name: {seller_name}{" "}
            {verified ? (
              <input type="checkbox" checked className="checkbox checkbox-info ml-2 h-4 w-4" />
            ) : (
              " "
            )}
          </p>
        </div>
        <div className="card-actions lg:justify-end mt-5">
          {paid === true ? (
            <label className=" btn border w-28 btn-sm mb-6 bg-red-600 hover:bg-red-600 text-white rounded-md font-semibold  translate duration-300 ease-in ">
              Sold out
            </label>
          ) : (
            <label
              onClick={() => setDetails(laptop)}
              htmlFor="laptop-modal"
              className=" btn border w-28 btn-sm mb-6 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 translate duration-300 ease-in"
            >
              Book Now
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
