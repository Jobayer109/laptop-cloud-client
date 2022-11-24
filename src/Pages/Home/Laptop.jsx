import React from "react";

const Laptop = ({ laptop, setDetails }) => {
  const { img, location, name, original_price, posted_on, resale_price, seller_name, year_of_use } =
    laptop;
  return (
    <div className="flex items-center justify-around shadow-lg">
      <figure>
        <img src={img} alt="laptop" className="w-80 h-60" />
      </figure>
      <div className="w-1/2">
        <h2 className="">{name}</h2>
        <div className="text-sm">
          <p>Resale Price: ${resale_price}</p>
          <p>Original Price: ${original_price}</p>
          <p>Location: {location}</p>
          <p>Posted on: {posted_on}</p>
          <p>Years of use: {year_of_use}</p>
          <p>Seller's name: {seller_name}</p>
        </div>
        <div className="card-actions lg:justify-end mt-5">
          <label
            onClick={() => setDetails(laptop)}
            htmlFor="laptop-modal"
            className="border w-24 bg-green-600 text-white px-2 py-1 rounded-md font-semibold hover:bg-green-700 translate duration-300 ease-in"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Laptop;