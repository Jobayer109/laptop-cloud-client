import { useQuery } from "@tanstack/react-query";
import React from "react";

const Sellers = () => {
  const { data: sellers, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/sellers`);
      const data = res.json();
      return data;
    },
  });

  const handleDelete = () => {};
  const handleVerified = (email) => {
    fetch(`http://localhost:5000/sellers/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };

  return (
    <section>
      <div className="overflow-x-auto w-full text-sm">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Verify</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => {
              return (
                seller?.role === "seller" && (
                  <tr key={i}>
                    <th></th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={seller.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </td>
                    <td>{seller.user_name}</td>
                    <td> {seller.role}</td>
                    <td>{seller.email}</td>
                    <th>
                      <button
                        onClick={() => handleDelete()}
                        className="btn btn-error text-white btn-xs"
                      >
                        Delete
                      </button>
                    </th>
                    <th>
                      {seller.verified ? (
                        <button
                          onClick={() => handleVerified(seller.email)}
                          className="btn btn-success w-20 text-white btn-xs"
                        >
                          Verified
                        </button>
                      ) : (
                        <button
                          onClick={() => handleVerified(seller.email)}
                          className="btn btn-outline w-20 btn-xs"
                        >
                          Verify
                        </button>
                      )}
                    </th>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Sellers;
