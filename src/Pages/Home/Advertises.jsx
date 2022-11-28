import { useQuery } from "@tanstack/react-query";
import React from "react";
import Advertise from "./Advertise";

const Advertises = () => {
  const { data: advertises, isLoading } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch(`https://laptop-cloud-server.vercel.app/advertise`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-full bg-green-500"></progress>;
  }
  return (
    <div className="mt-10">
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

      {advertises?.map((advertise) => {
        return (
          advertise.ads === "advertise" &&
          !advertise.paid === true && (
            <Advertise key={advertise._id} advertise={advertise}></Advertise>
          )
        );
      })}
    </div>
  );
};

export default Advertises;
