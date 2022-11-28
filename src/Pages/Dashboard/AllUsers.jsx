import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import empty from "../../assets/images/empty.svg";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-full bg-green-500"></progress>;
  }

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal("Congrats !", "Admin making successful !!", "success");
          refetch();
        }
      });
  };

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

  return (
    <div>
      {users?.length ? (
        <div className="overflow-x-auto text-sm">
          <div>
            <h3 className="text-2xl font-bold mb-3">All Buyers</h3>
            <table className="table w-full">
              <thead className="border">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Admin</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="border rounded-xl">
                {users?.map((user, i) => {
                  return (
                    user?.role === "buyer" && (
                      <tr key={i}>
                        <th></th>
                        <td>{user.user_name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td onClick={() => handleUpdate(user._id)}>
                          {user?.role === "admin" ? (
                            <button className="btn btn-primary btn-xs w-24 text-white">
                              Admin
                            </button>
                          ) : (
                            <button className="btn btn-xs btn-outline">Make Admin</button>
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(user?._id)}
                            className="btn btn-xs btn-error text-white"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
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
    </div>
  );
};

export default AllUsers;
