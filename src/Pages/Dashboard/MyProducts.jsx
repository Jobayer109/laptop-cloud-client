import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import empty from "../../assets/images/empty.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-cloud-server.vercel.app/myProducts?email=${user?.email}`,
        {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
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
    fetch(`https://laptop-cloud-server.vercel.app/myProducts/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          swal("Good job!", "Item Deleted Successful!", "success");
          refetch();
        }
      });
  };

  const handleAdvertise = (id) => {
    fetch(`https://laptop-cloud-server.vercel.app/products/${id}`, {
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
      {products?.length ? (
        <>
          <div className="overflow-x-auto w-full text-sm">
            <h3 className="text-2xl font-bold mb-3">My Products</h3>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Advertise</th>
                  <th>Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="border rounded-xl">
                {products?.map((product, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>$ {product.resale_price}</td>
                    <td>
                      {product.paid === true ? (
                        <p className="text-red-600 font-bold">sold out</p>
                      ) : (
                        <p className="text-green-600">Available</p>
                      )}
                    </td>

                    <td>
                      {product?.ads === "advertise" ? (
                        <button
                          onClick={() => handleAdvertise(product._id)}
                          className="btn btn-success w-24 text-white btn-xs"
                        >
                          Advertised
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAdvertise(product._id)}
                          className="btn btn-outline w-24 btn-xs"
                        >
                          Advertise
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-error text-white btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="my-20 text-center">
          <img src={empty} alt="" className="h-40 w-[50%] mx-auto mb-10" />
          <p className="text-2xl mb-6  font-bold ">No Products found</p>
          <Link to="/">
            <button className="border text-sm w-60 bg-green-600 text-white px-2 py-2 rounded-md font-semibold  hover:bg-green-500 hover:border-green-500 translate duration-300 ease-in">
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyProducts;
