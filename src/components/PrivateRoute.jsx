import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  console.log("====================================");
  console.log("User token:", token);
  console.log("====================================");
  return token ? children : <Navigate to='/' replace />;
};

export default PrivateRoute;
