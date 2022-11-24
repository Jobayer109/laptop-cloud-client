import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyOrders = () => {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myorders`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, i) => (
            <tr key={order._id}>
              <th>{i + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-16 h-16">
                    <img src={order.img} alt="laptop" />
                  </div>
                </div>
              </td>
              <td>{order.laptopName}</td>
              <td>$ {order.price}</td>
              <th>
                <button className="btn btn-success text-white btn-sm">Pay</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
