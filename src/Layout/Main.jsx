import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
  return (
    <div className="bg-green-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
