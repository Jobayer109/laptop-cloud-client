import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Header from "../Pages/Shared/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);

  return (
    <section>
      <Header />
      <div className="drawer drawer-mobile px-10 mt-10">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-0">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>

            {isAdmin && (
              <div>
                {" "}
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
