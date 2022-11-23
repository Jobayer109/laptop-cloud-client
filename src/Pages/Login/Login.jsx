import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../assets/icons/google.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };

  const handleGoogleSignIn = () => {};

  return (
    <div className="text-center mt-16">
      <h3 className="text-2xl font-semibold text-green-600 mb-6">Sign in</h3>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
          {...register("password", { required: true })}
          placeholder="Password"
          className="border w-80 p-2 rounded-md mt-2 border-green-500"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <p className="w-[84%] cursor-pointer text-green-500 hover:underline">
          <small>Forgot password ?</small>
        </p>
        <input
          type="submit"
          value="Sign in"
          className="border w-80 bg-green-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-green-700 text-white"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-green-600">OR</div>
          <div className="flex items-center border border-green-500 rounded-full p-1 hover:bg-green-50">
            <img src={google} alt="" className="h-8" />
            <input
              onClick={handleGoogleSignIn}
              type="button"
              value="Continue with google"
              className="ml-12 font-medium text-sm"
            />
          </div>
          <p className="text-xs mt-2">
            New in Tahmi's parlour ?{" "}
            <Link
              to="/register"
              className="text-green-600 font-mono text-sm font-semibold hover:underline"
            >
              create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
