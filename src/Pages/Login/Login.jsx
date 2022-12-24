import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [logedInEmail, setLogedInEmail] = useState("");
  const [isToken] = useToken(logedInEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isToken) {
      navigate(from, { replace: true });
    }
  }, [isToken, from, navigate]);

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        setLogedInEmail(data.email);
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        setLogedInEmail(result.user?.email);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="text-center my-24 ">
      <h3 className="text-2xl font-semibold text-green-600 mb-6">Sign in</h3>
      <p className="text-xs text-red-600 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500 outline-none"
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
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500 outline-none"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <p className="w-[85%] cursor-pointer text-green-500 hover:underline">
          <small>Forgot password ?</small>
        </p>
        <input
          type="submit"
          value="Sign in"
          className="border w-80 bg-green-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-green-700 text-white"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-green-600">OR</div>
          <div
            onClick={handleGoogleSignIn}
            className="md:flex lg:flex md:items-center lg:items-center md:border lg:border border-green-500 rounded-full p-1 hover:bg-green-200"
          >
            <img src={google} alt="" className="h-8 mx-auto md:mx-0 lg:mx-0" />
            <input
              type="button"
              value="Continue with google"
              className="md:ml-10 lg:ml-16  font-medium text-sm hidden md:block lg:block"
            />
          </div>
          <p className="text-xs mt-2">
            New in Laptop Cloud ? {""}
            <Link className="text-green-600 text-sm  hover:underline" to="/register">
              create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
