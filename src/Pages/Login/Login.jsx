import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  //   const googleProvider = new GoogleAuth

  const handleSignIn = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="text-center mt-16">
      <h3 className="text-2xl font-semibold text-pink-600 mb-6">Sign in</h3>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-2 rounded-md mt-2 border-pink-200"
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
          className="border w-80 p-2 rounded-md mt-2 border-pink-200"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <p className="w-[83%] cursor-pointer text-pink-600">
          <small>Forgot password ?</small>
        </p>
        <input
          type="submit"
          value="Sign in"
          className="border w-80 bg-pink-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-pink-700 text-white"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-pink-600">OR</div>
          <div className="flex items-center border rounded-full p-1 hover:bg-gray-200">
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
            <Link to="/register" className="text-pink-600 hover:underline">
              create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
