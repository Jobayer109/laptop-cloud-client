import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const LaptopDetails = () => {
  const details = useLoaderData();
  const {
    img,
    location,
    name,
    _id,
    original_price,
    posted_on,
    resale_price,
    seller_name,
    year_of_use,
    phone,
    verified,
    paid,
    description,
    condition,
  } = details;
  return (
    <section className="relative">
      <div
        className="md:px-24 lg:px-24 "
        style={{ display: "grid", gridTemplateColumns: "4fr 1fr", gap: "24px" }}
      >
        <div className="border">
          <div className="flex items-center justify-between">
            <div>
              <h2>{name}</h2>
              <p>
                Posted on {posted_on}, {location}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="mr-2">Share</p>
              <p>Save ad</p>
            </div>
          </div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" className=" w-2/3 h-2/3 mx-auto" />
            </PhotoView>
          </PhotoProvider>
          <p>Price: $ {resale_price}</p>
          <div className="flex items-center justify-between">
            <div>
              <p>Brand: {name}</p>
              <p>Year of use: {year_of_use} years</p>
            </div>
            <div className="mr-12">
              <p>Previous Price:{original_price}</p>
              <p>Condition:{condition}</p>
            </div>
          </div>
          <h3 className="font-bold">Features</h3>
          <div>
            <h3 className="font-bold">Description:</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="border sticky top-16">
          <p>For sale by {seller_name}</p>
          <p>Chat</p>
          <div>
            <h3>Safety Tips</h3>
            <p>Meet in a safe & public place </p>
            <p>Do not pay in advance</p>
            <a href="">See all safety tips</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopDetails;
