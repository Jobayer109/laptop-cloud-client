import { useQuery } from "@tanstack/react-query";
import React from "react";
import swal from "sweetalert";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return;
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
      <div className="overflow-x-auto text-sm">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.user_name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td onClick={() => handleUpdate(user._id)}>
                  {user?.role === "admin" ? (
                    <button className="btn btn-primary btn-xs w-24 text-white">Admin</button>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
