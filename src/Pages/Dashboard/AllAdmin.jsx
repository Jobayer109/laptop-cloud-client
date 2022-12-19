import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllAdmin = () => {
  const { data: users, isLoading } = useQuery({
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
  return (
    <div>
      <div className="overflow-x-auto text-sm">
        <h3 className="text-2xl font-bold mb-3">Admin Panel</h3>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="border rounded-xl">
            {users?.map((user, i) => {
              return (
                user?.role === "admin" && (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </th>
                    <td>{user.user_name}</td>
                    <td>{user.email}</td>

                    <td>
                      {user?.role === "admin" ? (
                        <button className="btn btn-primary btn-xs w-24 text-white">Admin</button>
                      ) : (
                        <button className="btn btn-xs btn-outline">Make Admin</button>
                      )}
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmin;
