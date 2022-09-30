import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //check if user is login in
  const userDatFromStorage = sessionStorage.getItem("userData")
    ? JSON.parse(sessionStorage.getItem("userData"))
    : undefined;

  const userLogin = userDatFromStorage?.userId;
  return userLogin ? children : <Navigate to="/" />;
};
export default ProtectedRoute;
