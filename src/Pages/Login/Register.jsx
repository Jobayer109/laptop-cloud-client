import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Register = () => {
  const { createUser, update, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [createdEmail, setCreatedEmail] = useState("");
  const navigate = useNavigate();
  const [isToken] = useToken(createdEmail);

  if (isToken) {
    navigate("/login");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        update(data.name);
        setCreatedEmail(data.email);
        logOut();
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.code, error.message);
        return;
      });

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
          const userInfo = {
            user_name: data.name,
            img: imageData.data.url,
            email: data.email,
            role: data.role,
          };
          fetch(`https://laptop-cloud-server.vercel.app/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                swal("Wow!", "User created Successfully !!", "success");
              }
            });
        }
      });
  };

  return (
    <div className="text-center my-24">
      <h3 className="text-2xl font-semibold text-green-500 mb-6">Register</h3>
      <p className="text-xs text-red-600 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          placeholder="Your name"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500"
        />{" "}
        {errors.name?.type === "required" && (
          <p className="text-xs text-red-700">Name is required</p>
        )}
        <br />
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500"
        />{" "}
        {errors.email?.type === "required" && (
          <p className="text-xs text-red-700">Email is required</p>
        )}
        <br />
        <input
          type="password"
          name="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
          })}
          placeholder="Password"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <select
          {...register("role", { required: true })}
          className="select select-bordered  border-green-500 w-80 mt-2"
        >
          <option disabled selected>
            Select your role
          </option>
          <option>buyer</option>
          <option>seller</option>
        </select>
        <br />
        <input
          type="file"
          name="image"
          {...register("image", { required: true })}
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500"
        />{" "}
        <br />
        <input
          type="submit"
          value="Register"
          className="border w-80 bg-green-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-green-700 text-white"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-green-600">OR</div>
          <div className="flex items-center border border-green-400 rounded-full p-1 hover:bg-green-200">
            <img src={google} alt="" className="h-8" />
            <input
              type="button"
              value="Continue with google"
              className="ml-16 font-medium text-sm"
            />
          </div>
          <p className="text-xs mt-2">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-green-600 font-mono text-sm font-semibold hover:underline"
            >
              please sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
