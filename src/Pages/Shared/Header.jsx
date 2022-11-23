import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 hover:border-green-400 hover:bg-green-100"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 hover:border-green-400 hover:bg-green-100"
          to="/services"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          className="text-sm hover:border-b-2 pb-1 hover:border-green-400 hover:bg-green-100"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" className="h-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="border w-24 bg-green-600 px-2 py-1.5 rounded-md font-medium hover:bg-green-700 text-white">
            Sign in
          </button>
        </Link>
        <Link to="/login">
          <button className="border w-24 bg-green-600 px-2 py-1.5 rounded-md font-medium hover:bg-green-700 text-white">
            Sign out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
