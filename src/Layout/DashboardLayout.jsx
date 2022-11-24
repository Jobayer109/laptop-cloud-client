import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";

const DashboardLayout = () => {
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
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
