import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import empty from "../../assets/images/empty.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-cloud-server.vercel.app/myorders?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-full bg-green-500"></progress>;
  }

  const handleDelete = (id) => {
    fetch(`https://laptop-cloud-server.vercel.app/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirmed = window.confirm("Are sure want to Delete");
        if (confirmed) {
          if (data.deletedCount) {
            refetch();
            swal("Very nice!", "Booking Deleted Successful!", "success");
          }
        }

        console.log(data);
      });
  };

  return (
    <section>
      {orders.length ? (
        <>
          <h3 className="text-2xl font-bold mb-3">My Orders</h3>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="border rounded-xl">
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
                    <td>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-error text-white w-16 btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                    <th>
                      {order?.price && order?.paid ? (
                        <button className="btn bg-green-600 text-white btn-sm">Paid</button>
                      ) : (
                        <Link to={`/dashboard/payment/${order._id}`}>
                          <button className="btn btn-warning w-16 btn-sm">Pay</button>
                        </Link>
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="my-20 text-center">
          <img src={empty} alt="" className="h-40 w-[50%] mx-auto mb-10" />
          <p className="text-2xl mb-6  font-bold ">Booking not found</p>
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

export default MyOrders;
