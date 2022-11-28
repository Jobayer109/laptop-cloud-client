import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import empty from "../../assets/images/empty.svg";

const Sellers = () => {
  const { data: sellers, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/sellers`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          swal("Well Done!", "User Deleted Successful!", "success");
          refetch();
        }
      });
  };
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
      {sellers?.length ? (
        <div className="overflow-x-auto w-full text-sm">
          <h3 className="text-2xl font-bold mb-3">ALl Sellers</h3>
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
                          onClick={() => handleDelete(seller._id)}
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
      ) : (
        <div className="my-20 text-center">
          <img src={empty} alt="" className="h-40 w-[50%] mx-auto mb-10" />
          <p className="text-2xl mb-6  font-bold ">No Buyers Found</p>
          <Link to="/">
            <button className="border text-sm w-60 bg-green-600 text-white px-2 py-2 rounded-md font-semibold  hover:bg-green-700 hover:border-green-500 translate duration-300 ease-in">
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Sellers;
