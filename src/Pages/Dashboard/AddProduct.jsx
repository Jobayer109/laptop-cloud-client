import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=08dce7fbfc7b46f77e82a01c97db482a`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const productInfo = {
            category_id: data.category,
            condition: data.condition,
            img: imageData.data.url,
            location: data.location,
            phone: data.phone,
            resale_price: data.resale_price,
            original_price: data.original_price,
            posted_on: data.date,
            name: data.product,
            year_of_use: data.purchase,
            seller_name: user?.displayName,
            email: user?.email,
            description: data.description,
          };
          fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                navigate("/dashboard/addProduct");
                swal("Very nice!", "Product Added Successfully !!", "success");
              }
            });
        }
      });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">Add Product</h3>
      <div className="w-full mx-auto mb-24 p-4 shadow-lg rounded-lg bg-gray-200">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <input
            type="text"
            {...register("product", { required: true })}
            placeholder="Product's name"
            className="w-full border border-gray-500 p-3 text-sm rounded-lg mb-2"
          />
          {errors.name && <span className="text-error text-xs">This field is required</span>}
          <br />
          <div className="flex mt-3">
            <input
              type="number"
              {...register("original_price", { required: true })}
              placeholder="Original Price"
              className="w-full mr-6 border border-gray-500 p-3 text-sm rounded-lg"
            />
            {errors.original_price && (
              <span className="text-error text-xs">This field is required</span>
            )}

            <input
              type="number"
              {...register("resale_price", { required: true })}
              placeholder="Resale Price"
              className="w-full border border-gray-500 p-3 text-sm rounded-lg"
            />
            {errors.resale_price && (
              <span className="text-error text-xs">This field is required</span>
            )}
          </div>
          <br />

          <div className="flex">
            <input
              type="number"
              {...register("phone", { required: true })}
              placeholder="Phone number"
              className="w-full border border-gray-500 p-3 text-sm rounded-lg"
            />
            {errors.phone && <span className="text-error text-xs">This field is required</span>}
            <br />
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="Location"
              className="w-full border border-gray-500 p-3 text-sm rounded-lg ml-6"
            />
            {errors.location && <span className="text-error text-xs">This field is required</span>}
          </div>
          <br />
          <div className="flex">
            <input
              type="number"
              {...register("category", { required: true })}
              placeholder="Category ID (ex: 1, 2, 3)"
              className="w-full border border-gray-500 p-3 text-sm rounded-lg mb-6 mr-6"
            />
            {errors.category && <span className="text-error text-xs">This field is required</span>}
            <br />
            <input
              type="text"
              {...register("purchase", { required: true })}
              placeholder="Purchase of year"
              className="w-full border border-gray-500 p-3 text-sm rounded-lg mb-6"
            />
            {errors.purchase && <span className="text-error text-xs">This field is required</span>}
            <br />
          </div>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered border-gray-500 w-full"
            placeholder="Description"
          ></textarea>
          {errors.description && <span className="text-error text-xs">This field is required</span>}
          <br />
          <div>
            <select
              {...register("condition", { required: true })}
              className="select select-bordered border-gray-500 p-3 mt-2 text-sm mb-2 w-full"
            >
              <option disabled selected>
                Product condition type
              </option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full border border-gray-500 p-3 text-sm rounded-lg mt-2 mb-2"
          />
          {errors.date && <span className="text-error text-xs">This field is required</span>}
          <br />
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full border border-gray-500 bg-white p-3 text-sm rounded-lg mt-2 mb-2"
          />
          {errors.image && <span className="text-error text-xs">This field is required</span>}
          <br />

          <input
            type="submit"
            value="Add Product"
            className="btn border w-full  mt-8 mb-5 bg-green-600 text-white px-2 py-2 rounded-md font-semibold hover:bg-green-700 translate duration-300 ease-in"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
