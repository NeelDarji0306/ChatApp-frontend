import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirects = "/login" }) => {
  if (!user) return <Navigate to={redirects} />;
  return children ? children : <Outlet />;
  // return <Outlet />;
};

export default ProtectRoute;
