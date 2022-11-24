import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {});
  };

  const navItems = (
    <>
      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 text-white  hover:text-black hover:border-green-400 hover:bg-green-100"
          to="/"
        >
          Home
        </Link>
      </li>
      {user?.email && (
        <li>
          <Link
            className="text-sm hover:border-b-2 pb-1 text-white  hover:text-black hover:border-green-400 hover:bg-green-100"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 text-white hover:text-black  hover:border-green-400 hover:bg-green-100"
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
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" className="h-10" />
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
              className="border w-24 bg-white px-2 py-1.5 rounded-md font-semibold hover:bg-green-700 hover:text-white translate duration-300 ease-in "
            >
              Sign out
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="border w-24 bg-white px-2 py-1.5 rounded-md font-semibold hover:bg-green-700  hover:text-white translate duration-300 ease-in">
              Sign in
            </button>
          </Link>
        )}
      </div>
      <div>
        <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden">
          <FaBars />
        </label>
      </div>
    </div>
  );
};

export default Header;
