import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <progress className="progress w-full bg-green-500"></progress>;
  }

  if (user?.email && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
