import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  // const [isSellerLoading, isSeller] = useSeller();
  // const [isAdminLoading, isAdmin] = useAdmin();
  if (loading) {
    return <progress className="progress w-full bg-green-500"></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
