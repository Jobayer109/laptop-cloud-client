import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdmitRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  // const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-full"></progress>;
  }

  if (user?.email && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdmitRoute;
