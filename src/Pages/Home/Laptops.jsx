// import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Laptop from "./Laptop";

const Laptops = () => {
  const laptops = useLoaderData();
  const [details, setDetails] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-20 my-24">
        {laptops?.map((laptop) => (
          <Laptop key={laptop._id} laptop={laptop} setDetails={setDetails}></Laptop>
        ))}
      </div>
      <BookingModal details={details}></BookingModal>
    </div>
  );
};

export default Laptops;
