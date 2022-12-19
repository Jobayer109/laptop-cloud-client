import { Link } from "react-router-dom";

const Advertise = ({ advertise }) => {
  const { _id, img, location, name, posted_on } = advertise;

  return (
    <section
      card
      className=" w-72 mx-auto text-center border rounded-md pb-4 shadow-md hover:shadow-xl hover:duration-500 ease-out"
    >
      <Link
        to={`/laptop/${_id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
      >
        <img className="object-cover w-full rounded h-44 " src={img} alt="" />
        <div className="p-3 space-y-2 bg-white">
          <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
            {name}
          </h3>
          <p className="text-xs">Posted on: {posted_on}</p>
          <p className="text-xs">{location}</p>
        </div>
        <div className="text-center pt-4">
          <p className="badge badge-success mr-2  text-slate-700">Click here to view details</p>
        </div>
      </Link>
    </section>
  );
};
export default Advertise;
