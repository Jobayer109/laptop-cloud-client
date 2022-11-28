import React from "react";
import { FaHeart } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Laptop = ({ laptop, setDetails }) => {
  const {
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

  const handleWishList = () => {
    fetch(`http://localhost:5000/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ laptop }),
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
        <p className="absolute right-5">
          <FaHeart onClick={() => handleWishList(laptop)} className="text-red-600 text-2xl" />{" "}
        </p>
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="text-sm">
          <p>
            <span className="font-semibold  text-green-600">Resale Price:</span> ${resale_price}
          </p>
          <p>
            <span className="font-semibold text-green-600">Original Price:</span> ${original_price}
          </p>
          <p>
            <span className="font-semibold text-green-600">Location</span>: {location}
          </p>
          <p>
            <span className="font-semibold text-green-600">Posted on:</span> {posted_on}
          </p>
          <p>
            <span className="font-semibold text-green-600">Years of use:</span> {year_of_use} year
          </p>
          <p>
            <span className="font-semibold text-green-600">Phone</span>: {phone}
          </p>
          <p className="flex items-center">
            <span className="font-semibold text-green-600"> Seller's name: </span> {""}{" "}
            {seller_name}{" "}
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
