import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token-new"));
  let role = token.result.role;
  let tokens = token.tokens;

  console.log("====================================");
  console.log("User token from PrivateRoute:", token);
  console.log("Role:", role);
  console.log("====================================");

  // 3 Conditions
  // a. If token does not exist => redirect to signin page
  // b. If token exists and role is "ADMIN" => allow to access and navigate to Admin Dashboard
  // c. If token exists and role is "CUSTOMER" => allow to access and navigate to CUSTOMER Dashboard

  if (tokens && role === "ADMIN") {
    return children;
  } else if (tokens && role === "CUSTOMER") {
    return <Navigate to='/customer-dashboard' replace />;
  } else {
    return <Navigate to='/' replace />;
  }
};

export default PrivateRoute;
