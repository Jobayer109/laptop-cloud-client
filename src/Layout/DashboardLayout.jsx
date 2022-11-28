import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import Header from "../Pages/Shared/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <section>
      <Header />
      <div className="drawer drawer-mobile px-10 mt-10">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-0 ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu  border mr-6 bg-green-50 px-10 pt-4 rounded-lg">
            <li>
              <Link className="border-b mb-2 text-sm active:bg-green-700" to="/dashboard">
                My Orders
              </Link>
            </li>
            <li>
              <Link className="border-b mb-2 text-sm active:bg-green-700" to="/dashboard/wishList">
                My Wishlist
              </Link>
            </li>

            {isAdmin && (
              <div>
                <li>
                  <Link className="border-b mb-2 text-sm active:bg-green-700" to="/dashboard/users">
                    Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b mb-2 text-sm active:bg-green-700"
                    to="/dashboard/sellers"
                  >
                    Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b mb-2 text-sm active:bg-green-700"
                    to="/dashboard/allAdmin"
                  >
                    Admins
                  </Link>
                </li>
              </div>
            )}

            {isSeller && (
              <>
                <li>
                  <Link
                    className="border-b mb-2 text-sm active:bg-green-700"
                    to="/dashboard/addProduct"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b mb-2 text-sm active:bg-green-700"
                    to="/dashboard/myProducts"
                  >
                    My Products
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
