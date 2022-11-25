import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import noItem from "../../assets/images/no_item.svg";
import BookingModal from "./BookingModal";
import Laptop from "./Laptop";

const Laptops = () => {
  const laptops = useLoaderData();
  const [details, setDetails] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-20 mt-10 mb-24">
        {laptops.length ? (
          <>
            <h3 className="text-2xl mb-6  font-bold">
              {" "}
              <span className="text-3xl text-green-600 font-bold">A</span>vailable Laptops:{" "}
              {laptops.length}
            </h3>
          </>
        ) : (
          <div>
            <img src={noItem} alt="" className="h-40 w-[50%] mx-auto my-10" />
            <p className="text-2xl mb-6  font-bold text-center h-screen">No items available</p>
          </div>
        )}
        {laptops?.map((laptop) => (
          <Laptop key={laptop._id} laptop={laptop} setDetails={setDetails}></Laptop>
        ))}
      </div>
      {details && <BookingModal details={details} setDetails={setDetails}></BookingModal>}
    </div>
  );
};

export default Laptops;
