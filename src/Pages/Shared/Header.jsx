import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/login");
        localStorage.removeItem("Token");
      })
      .catch((error) => {});
  };

  const navItems = (
    <>
      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 text-white hover:border-green-400 hover:text-white"
          to="/"
        >
          Home
        </Link>
      </li>

      {user?.email && (
        <>
          {" "}
          <li>
            <Link
              className="text-sm hover:border-b-2 pb-1 text-white hover:border-green-400 hover:text-white"
              to="/dashboard"
            >
              {(isAdmin && "Admin Dashboard") ||
                (isSeller && "Seller Dashboard") ||
                (user?.email && "Dashboard")}
            </Link>
          </li>
        </>
      )}

      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 text-white hover:border-green-400 hover:text-white"
          to="/blogs"
        >
          Blogs
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar px-20 bg-green-700">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content bg-black mt-3 p-2 shadow rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" className="lg:h-10 sm:h-8" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <Link to="/login">
            <button
              onClick={handleSignOut}
              className="hidden lg:block border w-24 bg-white px-2 py-1.5 rounded-md font-semibold font-sans hover:bg-green-700 hover:text-white translate duration-300 ease-in "
            >
              Sign out
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="border w-24 bg-white px-2 py-1.5 rounded-md font-semibold font-sans hover:bg-green-700  hover:text-white translate duration-300 ease-in">
              Sign in
            </button>
          </Link>
        )}
      </div>
      <div className="dropdown">
        <label
          tabIndex={2}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <FaBars />
        </label>
        <ul
          tabIndex={2}
          className="menu menu-compact dropdown-content bg-black mt-3 p-2 shadow rounded-box w-52"
        >
          {navItems}
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Header;
