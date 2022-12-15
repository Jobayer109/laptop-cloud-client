import { Link } from "react-router-dom";

const Advertise = ({ advertise }) => {
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
    description,
  } = advertise;

  return (
    <section card className=" border rounded-md py-3">
      <Link
        to={`/laptop/${_id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
      >
        <img className="object-cover w-full rounded h-44 dark:bg-gray-500" src={img} alt="" />
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
            {name}
          </h3>
          <span className="text-xs dark:text-gray-400 -mb-2">Posted on: {posted_on}</span>
          <p className="text-xs dark:text-gray-400 mt-0">{location}</p>
        </div>
        <div className="text-center">
          <p className="badge badge-success mr-2 text-slate-700">Click here to view details</p>
        </div>
      </Link>
    </section>
  );
};
export default Advertise;
