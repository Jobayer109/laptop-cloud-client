import { useQuery } from "@tanstack/react-query";
import React from "react";
import Advertise from "./Advertise";

const Advertises = () => {
  const { data: advertises } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertise`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-20">
      {advertises?.length ? (
        <>
          <h3 className="text-2xl mb-6  font-bold mt-10">
            {" "}
            <span className="text-3xl text-green-600 font-bold">A</span>dvertisement
          </h3>
        </>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-green-50 p-4 py-8 rounded-lg">
        {advertises?.map((advertise) => {
          return (
            advertise.ads === "advertise" &&
            !advertise.paid === true && (
              <Advertise key={advertise._id} advertise={advertise}></Advertise>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Advertises;
