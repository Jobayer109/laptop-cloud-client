import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-full bg-green-500"></progress>;
  }

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
