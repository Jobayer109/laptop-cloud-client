import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import empty from "../../assets/images/empty.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          swal("Good job!", "Item Deleted Successful!", "success");
          refetch();
        }
      });
  };

  return (
    <section>
      {products.length ? (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Delete</th>
                  <th>Advertise</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr>
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
                    <td className="text-green-500">Available</td>
                    <th>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-error text-white btn-xs"
                      >
                        Delete
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-primary text-white btn-xs">Advertise</button>
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
          <p className="text-2xl mb-6  font-bold ">No Products for Sale</p>
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
