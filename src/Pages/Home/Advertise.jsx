import { FaCheckCircle, FaHeart } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Advertise = ({ advertise }) => {
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
  } = advertise;
  console.log(advertise);

  return (
    <section>
      <div className="flex items-center justify-around shadow-lg bg-green-200 mt-6">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" className="w-80 h-60 rounded-l-full p-10" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="w-1/2 relative">
          <p className="absolute right-5">
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
              Seller's name: {seller_name} <FaCheckCircle className="ml-2 text-blue-500" />{" "}
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advertise;
