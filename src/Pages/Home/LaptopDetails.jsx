import React, { useState } from "react";
import {
  FaAward,
  FaComments,
  FaExclamationTriangle,
  FaHandPointRight,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

const LaptopDetails = () => {
  const [details, setDetails] = useState(null);
  console.log(details);
  const detail = useLoaderData();
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
    description,
    condition,
  } = detail;
  return (
    <section className="mb-20">
      <div
        className="md:px-24 lg:px-24"
        style={{ display: "grid", gridTemplateColumns: "4fr 2fr", gap: "24px" }}
      >
        <div className=" p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="font-thin text-sm">
                Posted on {posted_on}, {location}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <FaShareAlt className="mr-4 cursor-pointer" />
              <FaHeart className="text-xl mr-4 cursor-pointer" />
            </div>
          </div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" className=" w-2/3 h-96 mx-auto" />
            </PhotoView>
          </PhotoProvider>
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl font-semibold">Price: $ {resale_price}</p>
            <label
              onClick={() => setDetails(detail)}
              htmlFor="laptop-modal"
              className="border bg-green-600 text-white px-6 py-2 font-medium hover:bg-green-700 translate duration-300 ease-in"
            >
              Book now
            </label>
          </div>

          <div className="flex items-center justify-between text-sm bg-green-50 py-1">
            <div>
              <p>
                Brand: <span className="font-semibold">{name}</span>
              </p>
              <p>
                Year of use: <span className="font-semibold">{year_of_use}</span> years
              </p>
              <p>
                Phone: <span className="font-semibold">{phone}</span>
              </p>
            </div>
            <div className="mr-12">
              <p>
                Previous Price: $ <span className="font-semibold">{original_price}</span>
              </p>
              <p>
                Condition:<span className="font-semibold">{condition}</span>
              </p>
            </div>
          </div>
          <h3 className="font-bold mt-2">Features</h3>
          <div>
            <h3 className="font-bold mt-3">Description:</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className=" border-gray-200 p-4  w-96 " style={{}}>
          <div>
            {verified ? (
              <div className="flex items-center justify-between border p-3 bg-green-50">
                <p className="font-bold ">
                  <span className="text-gray-400">For sale by</span> {seller_name}
                </p>{" "}
                <FaAward />
              </div>
            ) : (
              <p className="font-bold border p-3 bg-green-50">
                <span className="text-gray-400">For sale by</span> {seller_name}
              </p>
            )}
          </div>
          <div className=" flex items-center bg-green-50 font-bold border p-3 mt-2">
            <p>Chat</p>
            <FaComments className="ml-4" />
          </div>
          <div className="border mt-2 p-3">
            <div className="flex items-center ">
              <FaExclamationTriangle className="mr-3" />
              <h3 className="font-bold">Safety Tips</h3>
            </div>
            <div className="flex items-center">
              <FaHandPointRight className="mr-2 text-xs" />
              <p> Meet in a safe & public place </p>
            </div>
            <div className="flex items-center">
              <FaHandPointRight className="mr-2 text-xs" />
              <p>Do not pay in advance</p>
            </div>
            <Link to="" className="border bg-green-100 rounded-full p-">
              See all safety tips
            </Link>
          </div>
        </div>
        {details && <BookingModal details={details} setDetails={setDetails}></BookingModal>}
      </div>
    </section>
  );
};

export default LaptopDetails;
