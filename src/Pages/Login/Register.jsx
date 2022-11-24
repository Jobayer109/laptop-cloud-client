import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser, update } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        update(data.name);
        setError("");
        navigate();
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.code, error.message);
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
          className="border w-80 p-2 rounded-md mt-2 border-green-500"
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
          className="border w-80 p-2 rounded-md mt-2 border-green-500"
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
          className="border w-80 p-2 rounded-md mt-2 border-green-500"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <input
          type="file"
          name="image"
          {...register("image")}
          className="border w-80 p-2 rounded-md mt-2 border-green-500"
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
